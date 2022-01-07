import React, { useContext } from "react";
import { getPokemonInfo } from "../dataFetch/fetchHook";
import { AppContext } from "../context/AppProvider";

export default function PokemonList() {
  const context = useContext(AppContext);

  const searchName = async (name) => {
    const resultado = await getPokemonInfo(name);
    // console.log('Resultados', resultado);
    context.setPokemonName(resultado);
    context.setPokemonInfo(resultado);
  }

  return (
    <div className="poke-nav-list">
      <h1>Pokemons</h1>
      <nav className="poke-nav-style">
        {context.showType?.pokemon?.map((data) => {
          return (
            <>
              <li className="poke-list-style" key={data.pokemon.id}>
                <button type="button" onClick={() => searchName(data.pokemon.name)} >{data.pokemon.name}</button>
              </li>
            </>
          );
        })}
      </nav>
    </div>
  );
}
