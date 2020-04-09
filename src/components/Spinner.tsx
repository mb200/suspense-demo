import React from "react";

const Spinner: React.FC<Props> = ({ isBig }) => {
  let className = "spinner-container";
  if (isBig) {
    className += " big";
  }
  return (
    <span aria-busy="true" className={className}>
      <span className="spinner" aria-hidden="true">
        🌀
      </span>
    </span>
  );
};

interface Props {
  isBig?: boolean;
}

export { Spinner };
