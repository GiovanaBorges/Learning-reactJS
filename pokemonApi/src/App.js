import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "./services/api";
import style from "./style.css";

function App() {
  const { register, handleSubmit } = useForm();
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonImg, setPokemonImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const [height, setHeight] = useState("Height : 4");
  const [weight, setWeight] = useState("Weight : 60");
  const [baseExperience, setbaseExperience] = useState("Experience : 112");
  const [error, setError] = useState(false);

  function getPokemon(poke) {
    try {
      Api.get(`/pokemon/${poke}`).then((response) => {
        console.log(response.data);
        setPokemonInformations(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function setPokemonInformations(informations) {
    setPokemon(
      informations.name[0].toUpperCase() + informations.name.substr(1)
    );

    setWeight("Weight : " + informations.weight);
    setHeight("Height : " + informations.height);
    setPokemonImg(informations.sprites.front_default);
    setbaseExperience("Experience : " + informations.base_experience);
  }

  const onSubmit = (poke) => {
    const pokemonName = poke.namePokemon;
    getPokemon(pokemonName.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={style}>
        <div className="search" style={style}>
          <input
            className="searchInput"
            {...register("namePokemon")}
            placeholder={"Pikachu"}
          />
          <input className="searchBtn" type="submit" value="Pesquisar" />
        </div>

        {error ? (
          <div className="error" style={style}>
            <h1>
              Pokemon Não encontrado , Verifique se digitou direito {pokemon}
            </h1>
          </div>
        ) : (
          <>
            <div className="card">
              <div style={style}>
                <h1 className="pokemonName">{pokemon}</h1>
                <h1 className="pokemonHeight">{height}</h1>
                <h1 className="pokemonWeight"> {weight}</h1>
                <h1 className="pokemonExperience">{baseExperience}</h1>
              </div>
              <div className="imgField">
                <img src={pokemonImg} alt="pokemon" />
              </div>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default App;
