import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import SinglePokemon from "./SinglePokemon";
import { getAllPokemon } from "./api";

function App() {
  const [pokedex, setPokedex] = useState([]);

  // To get all the pokemon for our app
  useEffect(() => {
    const fetchAllPokemon = async () => {
      const pokemon = await getAllPokemon();
      setPokedex(pokemon);
    };

    // Call function to use in useEffect
    fetchAllPokemon();
  }, []);

  console.log("pokedex", pokedex);
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
