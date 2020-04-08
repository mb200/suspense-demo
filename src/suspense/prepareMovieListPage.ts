import { createResource } from "../cache/ReactCache";
import { fetchMovieList } from "../api";

function prepareMovieListPage() {
  return {
    movies: createResource(() => fetchMovieList()),
  };
}

export { prepareMovieListPage };
