import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import getPokemonType from "../dataFetch/fetchHook";
import pokeFire from "../resource/poke-red.svg";
import pokeWater from "../resource/poke-blue.svg";
import pokeElectric from "../resource/poke-yellow.svg";
import pokeGrass from "../resource/poke-green.svg";

export default function Header() {
  const context = useContext(AppContext);

  const selectType = async (tipo) => {
    const resultado = await getPokemonType(tipo);
    console.log('Resultados', resultado);
    context.setShowType(resultado);
  }

  return (
    <>
      <div className="">
        <h1>POKEDEX</h1>
        <label>
          <button
            type="button"
            onClick={() => selectType('fire')}
          >
            <img src={pokeFire} alt="" />
          </button>
          <button
            type="button"
            onClick={() => selectType('electric')}
          >
            <img src={pokeElectric} alt="" />
          </button>
          <button
            type="button"
            onClick={() => selectType('water')}
          >
            <img src={pokeWater} alt="" />
          </button>
          <button
            type="button"
            onClick={() => selectType('grass')}
          >
            <img src={pokeGrass} alt="" />
          </button>
        </label>
      </div>
    </>
  );
}