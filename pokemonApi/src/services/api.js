import axios from "axios";
import { createContext, useState } from "react";

export const Api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getAllPokemon = () => {
  Api.get(`/pokemon?limit=15&offset=200`).then((response) => {
    console.log(response.data);
    return response.data.results;
  });
};

export const getPokemon = async (poke) => {
  try {
    Api.get(`pokemon/${poke}`).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
};
