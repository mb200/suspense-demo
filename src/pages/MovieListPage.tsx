import React from "react";
import { prepareMovieListPage } from "../suspense/prepareMovieListPage";
import { Link } from "react-router-dom";
import { Tomato } from "../components/Tomato";
import { Popcorn } from "../components/Popcorn";

const MOVIE_LIST_CACHE_KEY = "/api/top-movies";
const { movies: moviesResource } = prepareMovieListPage();

const MovieListPage: React.FC = () => {
  const movies = moviesResource.read(MOVIE_LIST_CACHE_KEY);

  return (
    <div className="movie-list-page">
      <h1>
        Top Movies of 2019 <Popcorn />
      </h1>
      <div className="movie-list">
        {movies.map((m) => (
          <Link key={m.id} to={`/movies/${m.id}`} className="movie-item">
            <Tomato score={m.details.tomatoMeter} />
            <div className="content">
              <h3>{m.details.name}</h3>
              <span>{m.details.tomatoMeter}%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { MovieListPage };
