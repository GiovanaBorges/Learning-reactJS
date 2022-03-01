import React, { useState } from "react";
import { getPokemon, Api } from "./services/api";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [pokeName, setPokeName] = useState("");

  let verifyError = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyPoke();
  };

  const handleChange = (e) => {
    console.log(e.target.value.toLowerCase());
    setPokeName(e.target.value.toLowerCase());
  };

  const verifyPoke = async () => {
    let toArray = [];
    try {
      let result = await Api.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );

      toArray.push(result.data);
      console.log(result.data);

      setPokeData(toArray);
    } catch (e) {
      verifyError = true;
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          placeholder="Enter the pokemon name"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <>
        {verifyError ? (
          <>
            <h1>Erro ao procurar o pokemon</h1>
          </>
        ) : (
          <>
            {pokeData.map((poke) => {
              return (
                <>
                  <div className="pokemonBox">
                    <h2>{poke.name}</h2>
                    <h2>Altura : {poke.height}</h2>
                    <h2>Experiência : {poke.base_experience}xp</h2>
                    <img
                      src={poke.sprites.front_default}
                      alt={`image of ${poke.name}`}
                    />
                  </div>
                </>
              );
            })}
          </>
        )}
      </>
    </>
  );
}

export default App;
