import React, { useContext } from "react";
import { getPokemonInfo } from "../dataFetch/fetchHook";
import { AppContext } from "../context/AppProvider";

export default function PokemonList() {
  const context = useContext(AppContext);

  const searchName = async (name) => {
    const resultado = await getPokemonInfo(name);
    console.log('Resultados', resultado);
    context.setPokemonName(resultado);
  }


  return (
    <div className="poke-nav-list">
      <h1>Pokemons</h1>
      <nav className="poke-nav-style">
        {context.showType?.pokemon?.map((data) => {
          return (
            <>
              <li className="poke-list-style" onClick={() => searchName(data.pokemon.name)} key={data.pokemon.id}>
                {data.pokemon.name}
              </li>
            </>
          );
        })}
      </nav>
    </div>
  );
}
