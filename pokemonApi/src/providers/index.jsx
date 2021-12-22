import React, { createContext } from "react";
import Api from "../services/api";

export const PokemonContext = createContext({});

const pokemonProvider = () => {
  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    height: 40,
    weight: 3,
    experienceBase: 114,
  });
};

export const getPokemon = (poke) => {};
