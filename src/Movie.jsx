import React from "react";

export const Movie = ({ id, name, price }) => {
  return (
    <div>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};
