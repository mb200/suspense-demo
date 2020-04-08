import { createResource } from "../cache/ReactCache";
import { fetchMovieDetails, fetchMovieReviews } from "../api";

function prepareMoviePage() {
  return {
    details: createResource((id: string) => fetchMovieDetails(id)),
    reviews: createResource((id: string) => fetchMovieReviews(id)),
  };
}

export { prepareMoviePage };
