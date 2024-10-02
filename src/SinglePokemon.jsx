import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonItem from "./components/PokemonItem";
import { getSinglePokemon } from "./api";

//Here
function SinglePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Create function
    const fetchSinglePokemon = async (id) => {
      const singlePokemon = await getSinglePokemon(id);
      setPokemon(singlePokemon);
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
