import React from "react";
import { Resource } from "../cache/ReactCache";
import { IMovieReview } from "../api/data";
import { Tomato } from "../components/Tomato";

const MoviePageReviews: React.FC<Props> = ({ resource, movieId }) => {
  const reviews = resource.read(movieId);

  return (
    <div className="movie-reviews">
      {reviews.map((review, idx) => (
        <div key={idx} className="movie-review">
          <Tomato score={review.fresh ? 100 : 0} />
          <div className="content">
            <p className="blurb">{review.blurb}</p>
            <span className="by-line">
              {review.author}, {review.source}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

interface Props {
  resource: Resource<string, IMovieReview[]>;
  movieId: string;
}

export { MoviePageReviews };
