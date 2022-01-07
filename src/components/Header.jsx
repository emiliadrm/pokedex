import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import getPokemonType from "../fetchHook";
import pokeFire from "../resource/poke_red.svg";
import pokeWater from "../resource/poke_blue.svg";
import pokeElectric from "../resource/poke_yellow.svg";
import pokeGrass from "../resource/poke_green.svg";

export default function Header() {
  const context = useContext(AppContext);

  const handlerSearch = async () => {
    const result = await getPokemonType(context.pickType);
    console.log(result);
    return context.setShowType(result);
  };

  return (
    <>
      <select
        onChange={(e) => {
          context.setpickType(e.target.value, true);
        }}
        name="pokemons"
        id="pokemons"
        value={context.pickType}
      >
        <option>Elige un tipo</option>
        <option value="fire">Fuego</option>
        <option value="electric">Electrico</option>
        <option value="water">Agua</option>
        <option value="flying">Voladores</option>
      </select>
      <button onClick={handlerSearch}>Buscar</button>
    </>
  );
}
