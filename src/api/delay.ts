/**
 * Useful for mocking client functions before the API is ready
 *
 * @example
 *
 * ```ts
 * return [delay(() => FAKES, 800), noop];
 * ```
 *
 */
async function delay<C extends any>(
  syncCallbackFn: () => C,
  time: number
): Promise<C> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(syncCallbackFn());
    }, time);
  });
}

export { delay };
