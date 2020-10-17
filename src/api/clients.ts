import { IMovie, IMovieDetails, IMovieReview } from "./data";

function request<V>(url: string): Promise<V> {
  return fetch(url).then((res) => res.json());
}

function fetchMovieList() {
  return request<IMovie[]>("/api/movies");
}

function fetchMovieDetails(movieId: string) {
  return request<IMovieDetails>(`/api/movies/${movieId}`);
}

function fetchMovieReviews(movieId: string) {
  return request<IMovieReview[]>(`/api/movies/${movieId}/reviews`);
}

export { fetchMovieList, fetchMovieDetails, fetchMovieReviews };
