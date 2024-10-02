import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import SinglePokemon from "./SinglePokemon";

function App() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch("http://localhost:5000/pokedex");
        const data = await response.json();
        setPokedex(data);
      } catch (error) {
        console.error("Uh oh, there was an error catchin them all", error);
      }
    };

    // Call function to use in useEffect
    fetchAllPokemon();
  }, []);
  return (
    <div>
      <h1>Gotta Catch Em All</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/pokemon"
          element={<PokemonList pokedex={pokedex} setPokedex={setPokedex} />}
        />
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
      </Routes>
    </div>
  );
}

export default App;
