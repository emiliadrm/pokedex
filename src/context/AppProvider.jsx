import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

export default function AppProvider(props) {
  const [pickType, setPickType] = useState("");
  const [showType, setShowType] = useState();

  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({});

  const getPokemons = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon");
      const response = await request.json();
      const { results } = response;
      setPokemonsList(results);
    } catch {
      console.warn("Error");
    }
  };

  const getPokemon = async (pokemonName) => {
    try {
      const request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const response = await request.json();
      setPokemonInfo(response);
    } catch {
      console.warn("Error");
    }
  };

  useEffect(() => {
    getPokemons();
    getPokemon(pokemonName);
  }, [pokemonName]);

  return (
    <AppContext.Provider
      value={{
        pokemonsList,
        setPokemonName,
        pokemonName,
        pokemonInfo,
        pickType,
        setPickType,
        showType,
        setShowType
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
