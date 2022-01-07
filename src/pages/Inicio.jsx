import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="container-inicio">
        <h1>POKEDEX</h1>
        <Link to="/Wiki">
          <button className="botón-enter">Enter</button>
        </Link>
    </div>
  );
}
