import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "./services/api";

function App() {
  const { register, handleSubmit } = useForm();
  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [baseExperience, setbaseExperience] = useState();

  function getPokemon(poke) {
    try {
      Api.get(`/${poke}`).then((response) => {
        console.log(response.data);
        setPokemonInformations(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function setPokemonInformations(informations) {
    setPokemon(informations.name);
    setWeight("Weight : " + informations.weight);
    setHeight("Height :" + informations.height);
    setPokemonImg(informations.sprites.front_default);
    setbaseExperience("Experience : " + informations.base_experience);
  }

  const onSubmit = (poke) => {
    const pokemonName = poke.namePokemon;
    getPokemon(pokemonName.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>digite o name do coisa</label>
        <input {...register("namePokemon")} />

        <input type="submit" value="submit" />
        <h1>{pokemon}</h1>
        <img src={pokemonImg} alt="pokemon" />
        <h1>{height}</h1>
        <h1>{weight}</h1>
        <h1>{baseExperience}</h1>
      </form>
    </>
  );
}

export default App;
