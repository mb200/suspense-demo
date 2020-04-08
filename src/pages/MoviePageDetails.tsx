import React from "react";
import { IMovieDetails } from "../api/data";
import { Resource } from "../cache/ReactCache";
import { ImgDelayed } from "../components/Image";
import { Popcorn } from "../components/Popcorn";
import { Tomato } from "../components/Tomato";

const MoviePageDetails: React.FC<Props> = ({ resource, movieId }) => {
  const movieDetails = resource.read(movieId);

  return (
    <div className="movie-details">
      <div className="poster">
        <ImgDelayed
          style={{ height: 350 }}
          src={movieDetails.posterSrc}
          alt={`movie-poster-${movieDetails.name}`}
        />
      </div>
      <div className="summary">
        <h1>{movieDetails.name}</h1>
        <hr className="separator" />
        <div className="scores">
          <div className="block">
            <h5>Tomatometer</h5>
            <Tomato score={movieDetails.tomatoMeter} />
            <span className="score">{movieDetails.tomatoMeter}%</span>
          </div>
          <div className="block">
            <h5>Audience Score</h5>
            <Popcorn />
            <span className="score">{movieDetails.audienceScore}%</span>
          </div>
        </div>
        <div className="consensus">
          <h5>Critics Consensus</h5>
          {movieDetails.criticsConsensus}
        </div>
      </div>
    </div>
  );
};

interface Props {
  resource: Resource<string, IMovieDetails>;
  movieId: string;
}

export { MoviePageDetails };
