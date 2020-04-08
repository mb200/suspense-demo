import * as React from "react";
import { delay } from "../api/delay";
import { createLRU } from "./LRU";
import { TIMEOUTS } from "../api/config";

type Suspender = Promise<any>;

export enum ResourceStatus {
  PENDING,
  RESOLVED,
  REJECTED,
}

type PendingResult = {
  status: ResourceStatus.PENDING;
  value: Suspender;
};

type ResolvedResult<V> = {
  status: ResourceStatus.RESOLVED;
  value: V;
};

type RejectedResult = {
  status: ResourceStatus.REJECTED;
  value: any;
};

type Result<V> = PendingResult | ResolvedResult<V> | RejectedResult;

export type Resource<Input, Value> = {
  read(input: Input): Value;
  preload(input: Input): void;
};

const ReactCurrentDispatcher =
  // @ts-ignore
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    .ReactCurrentDispatcher;

function readContext<T>(Context: React.Context<T>, observedBits?: any): T {
  const dispatcher = ReactCurrentDispatcher.current;
  if (dispatcher === null) {
    throw new Error(
      "react-cache: read and preload may only be called from within a " +
        "component's render. They are not supported in event handlers or " +
        "lifecycle methods."
    );
  }
  return dispatcher.readContext(Context, observedBits);
}

function identityHashFn<I, K>(input: I): K {
  if (
    typeof input !== "string" &&
    typeof input !== "number" &&
    typeof input !== "boolean" &&
    input !== undefined &&
    input !== null
  ) {
    console.error(
      "Invalid key type. Expected a string, number, symbol, or boolean, " +
        "but instead received: %s" +
        "\n\nTo use non-primitive values as keys, you must pass a hash " +
        "function as the second argument to createResource().",
      input
    );
  }

  return (input as unknown) as K;
}

const CACHE_LIMIT = 500;
const GlobalCache = createLRU(CACHE_LIMIT);

const entries: Map<Resource<any, any>, Map<any, any>> = new Map();
const Context = React.createContext(null);

function accessResult<I, K, V>(
  resource: any,
  fetch: (input: I) => Promise<V>,
  input: I,
  key: K
): Result<V> {
  let entriesForResource = entries.get(resource);

  if (entriesForResource === undefined) {
    entriesForResource = new Map();
    entries.set(resource, entriesForResource);
  }

  const entry = entriesForResource.get(key);

  if (entry === undefined) {
    const thenable = fetch(input);
    thenable
      .then((res) => delay(() => res, TIMEOUTS.BASE)) // For DEMO only
      .then(
        (value) => {
          if (newResult.status === ResourceStatus.PENDING) {
            // @ts-ignore
            const resolvedResult: ResolvedResult<V> = newResult;
            resolvedResult.status = ResourceStatus.RESOLVED;
            resolvedResult.value = value;
          }
        },
        (error) => {
          if (newResult.status === ResourceStatus.PENDING) {
            // @ts-ignore
            const rejectedResult: RejectedResult = newResult;
            rejectedResult.status = ResourceStatus.REJECTED;
            rejectedResult.value = error;
          }
        }
      );
    const newResult: PendingResult = {
      status: ResourceStatus.PENDING,
      value: thenable,
    };
    const newEntry = GlobalCache.add(
      newResult,
      deleteEntry.bind(null, resource, key, entries)
    );
    entriesForResource.set(key, newEntry);

    return newResult;
  } else {
    return GlobalCache.access(entry) as Result<V>;
  }
}

function deleteEntry<I, K, V>(resource: Resource<I, V>, key: K): void {
  const entriesForResource = entries.get(resource);
  if (entriesForResource !== undefined) {
    entriesForResource.delete(key);
    if (entriesForResource.size === 0) {
      entries.delete(resource);
    }
  }
}

export function createResource<I, K, V>(
  fetch: (input: I) => Promise<V>,
  maybeHashInput?: (input: I) => K
): Resource<I, V> {
  const hashInput: (input: I) => K =
    maybeHashInput !== undefined ? maybeHashInput : identityHashFn;

  const resource = {
    read(input: I): V {
      // react-cache currently doesn't rely on context, but it may in the
      // future, so we read anyway to prevent access outside of render.
      readContext(Context);

      const key = hashInput(input);
      const result: Result<V> = accessResult(resource, fetch, input, key);

      switch (result.status) {
        case ResourceStatus.PENDING: {
          const suspender = result.value;
          throw suspender;
        }
        case ResourceStatus.RESOLVED: {
          const value = result.value;
          return value;
        }
        case ResourceStatus.REJECTED: {
          const error = result.value;
          throw error;
        }
        default:
          throw new Error("Unknown status!");
      }
    },

    preload(input: I): void {
      // react-cache currently doesn't rely on context, but it may in the
      // future, so we read anyway to prevent access outside of render.
      readContext(Context);
      const key = hashInput(input);
      accessResult(resource, fetch, input, key);
    },
  };

  return resource;
}

export function unstable_setGlobalCacheLimit(limit: number) {
  GlobalCache.setLimit(limit);
}
