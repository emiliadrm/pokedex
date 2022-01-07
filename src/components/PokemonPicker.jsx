import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Card from "./Card";

export default function PokemonPicker() {
  const { pokemonsList, setPokemonName, pokemonName, pokemonInfo } = useContext(
    AppContext
  );

  return (
    <div className="pokemon-picker">
      <div>
        <h1>Pokemons</h1>
        {pokemonsList.map((pokemon) => (
          <h3 onClick={() => setPokemonName(pokemon.name)} key={pokemon.name}>
            {pokemon.name}
          </h3>
        ))}
      </div>

      {pokemonName ? (
        <Card pokemonInfo={pokemonInfo} />
      ) : (
        <p>Selecciona un Pokemón</p>
      )}
    </div>
  );
}
