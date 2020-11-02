import React, { createContext, useState } from "react"


export const MovieContext = createContext();


export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Inception",
      price: "$19",
    },
    {
      id: 2,
      name: "Manchester by the sea",
      price: "$10",
    },
    {
      id: 3,
      name: "Godfather",
      price: "$20",
    },
  ]);

  return (<MovieContext.Provider value={[movies, setMovies]} >
    { children}
  </MovieContext.Provider >)

}
