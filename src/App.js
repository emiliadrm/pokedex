import React from "react";
import { Route } from "react-router-dom";
import "./css/styles.css";
import Inicio from "./components/Inicio";
import Wiki from "./components/Wiki";
// import PokemonPicker from "./components/PokemonPicker";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Inicio} />
      <Route path="/Wiki" component={Wiki} />
    </div>
  );
}

