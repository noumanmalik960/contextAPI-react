import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(4);

  const [movies, setMovies] = useContext(MovieContext);

  const addMovie = (e) => {
    // stops the page from refreshing when you click on the form
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { id: number, name: title, price: amount },
    ]);
    setTitle("");
    setAmount(0);
    setNumber((prev) => prev + 1);
  };

  return (
    <form onSubmit={addMovie} className="form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Movie name"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Amount"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
