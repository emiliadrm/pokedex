import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider(props) {
  const [pickType, setPickType] = useState("");
  const [showType, setShowType] = useState();
  const [pokemonInfo, setPokemonInfo] = useState({});

  const [pokemonsList, setPokemonsList] = useState([]); // probablemente estos estados 
  const [pokemonName, setPokemonName] = useState(""); // no son necesarios

  return (
    <AppContext.Provider
      value={{
        pokemonsList,
        setPokemonsList,
        pokemonName,
        setPokemonName,
        pokemonInfo,
        setPokemonInfo,
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
