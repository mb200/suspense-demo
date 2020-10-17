import { createResource } from "../cache/ReactCache";
import { fetchMovieList } from "../api/clients";

function prepareMovieListPage() {
  return {
    movies: createResource(() => fetchMovieList()),
  };
}

export { prepareMovieListPage };
