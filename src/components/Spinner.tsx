import React from "react";

const Spinner: React.FC<Props> = ({ isBig }) => {
  let className = "";
  if (isBig) {
    className += " BigSpinner";
  }
  return (
    <span aria-busy="true" className={className}>
      <span className="Spinner" aria-hidden="true">
        🌀
      </span>
    </span>
  );
};

interface Props {
  isBig?: boolean;
}

export { Spinner };
