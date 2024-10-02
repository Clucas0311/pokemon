import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonItem from "./components/PokemonItem";

function SinglePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Create function
    const fetchSinglePokemon = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/pokedex/${id}`);
        const singlePokemon = await response.json();
        setPokemon(singlePokemon);
      } catch (error) {
        console.error("Error, fetching a single pokemon", error);
      }
    };
    // call function
    fetchSinglePokemon(id);
  }, [id]);

  if (!pokemon) {
    return <h1>Loading....</h1>;
  }

  return <PokemonItem pokemon={pokemon} isSingle />;
}

export default SinglePokemon;
