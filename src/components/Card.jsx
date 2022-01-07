import React, { useContext} from "react";
import { AppContext } from "../context/AppProvider";


export default function Card() {
  const { pokemonInfo } = useContext(AppContext);

  const name = pokemonInfo.name;
  const skills = pokemonInfo.abilities;

  return (
    <div>
      {name ? (
          <>
            <h1>Card</h1>
            <div className="images">
              <img src={pokemonInfo.sprites.front_default} alt="" />
              <img src={pokemonInfo.sprites.back_default} alt="" />
            </div>
            <h2>{name}</h2>
            {skills.map((skill) => (
              <ul key={skill.ability.name} className="types">
                <li>{skill.ability.name}</li>
              </ul>
            ))}
          </>
        )
        : 
        ( <p>Selecciona un Pokemón</p>)}
    </div>
  );
}
