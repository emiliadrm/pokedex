import React from "react";
import { Route } from "react-router-dom";
import "./css/styles.css";
import Inicio from "./pages/Inicio";
import Wiki from "./pages/Wiki";
// import PokemonPicker from "./components/PokemonPicker";

export default function App() {
  return (
    <div className="App">
      <div className="container-app">
        <Route exact path="/" component={Inicio} />
        <Route path="/Wiki" component={Wiki} />
        </div>
    </div>
  );
}

