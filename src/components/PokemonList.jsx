import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
// import { Link } from "react-router-dom";

export default function PokemonList() {
  const context = useContext(AppContext);

  const mostrarMensaje = () => {
      console.log('pokemon es TIPO:', context.showType);
  }

  return (
    <div className="claseParaLaListica">
      <p>Pokemones</p>
      {context.showType?.pokemon?.map((data) => {
        return (
          <>
            <p className="claseParaLosNombres" onClick={mostrarMensaje}>
              {data.pokemon.name}
            </p>
          </>
        );
      })}
    </div>
  );
}
