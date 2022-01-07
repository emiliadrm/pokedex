import React from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";

export default function Wiki() {
  return (
    <div className="wiki-container">
      <Header />
      <PokemonList />
    </div>
  );
}
