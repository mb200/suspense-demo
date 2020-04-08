import { MOVIES, MovieID, REVIEWS } from "./data";
import { delay } from "./delay";
import { TIMEOUTS } from "./config";

function fetchMovieList() {
  return fakedFetch([...MOVIES.values()], TIMEOUTS.MOVIE_LIST);
}

function fetchMovieDetails(movieId: string) {
  const match = MOVIES.get(movieId as MovieID);

  if (!match) {
    throw new Error("No movie found!");
  }

  return fakedFetch(match.details, TIMEOUTS.MOVIE_DETAILS);
}

function fetchMovieReviews(movieId: string) {
  const match = REVIEWS.get(movieId as MovieID);

  if (!match) {
    throw new Error(`No reviews found for movie with ID: ${movieId}`);
  }

  return fakedFetch(match, TIMEOUTS.MOVIE_REVIEWS);
}

async function fakedFetch<T>(data: T, timeout: number = 0): Promise<T> {
  return delay(() => Promise.resolve(data), timeout);
}

export { fetchMovieList, fetchMovieDetails, fetchMovieReviews };
