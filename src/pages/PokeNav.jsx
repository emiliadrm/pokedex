import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import PokemonList from "../components/PokemonList";
import Card from "../components/Card";

export default function PokeNav() {
  const context = useContext(AppContext);

  return (
    <div className="">
      <PokemonList />
      <div>
        {context.pokemonName ? (<Card pokemonInfo={context.pokemonInfo} />) 
        : 
        ( <p>Selecciona un Pokemón</p>)}
      </div>
    </div>
  );
}

