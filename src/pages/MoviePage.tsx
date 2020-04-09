// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Suspense, SuspenseList } from "react";
import { useParams } from "react-router-dom";
import { prepareMoviePage } from "../suspense/prepareMoviePage";
import { MoviePageDetails } from "./MoviePageDetails";
import { MoviePageReviews } from "./MoviePageReviews";
import { Spinner } from "../components/Spinner";

const { details, reviews } = prepareMoviePage();

const MoviePage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <div className="movie-page">
      <Suspense fallback={<Spinner />}>
        <MoviePageDetails resource={details} movieId={movieId} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MoviePageReviews resource={reviews} movieId={movieId} />
      </Suspense>
    </div>
  );
};

export { MoviePage };
