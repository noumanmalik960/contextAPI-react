import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h3>Navbar</h3>
      <h3>Total movies : {movies.length}</h3>
    </div>
  );
};

export default Nav;
