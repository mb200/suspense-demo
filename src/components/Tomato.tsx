import React from "react";

const Tomato: React.FC<Props> = ({ score }) => {
  const icon =
    score > 60 ? (
      <span className="tomato" role="img" aria-label="score">
        🍅
      </span>
    ) : (
      <span className="tomato" role="img" aria-label="score">
        🤮
      </span>
    );

  return icon;
};

interface Props {
  score: number;
}

export { Tomato };
