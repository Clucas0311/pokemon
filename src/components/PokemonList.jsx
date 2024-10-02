import React from "react";
import PokemonItem from "./PokemonItem";
import AddPokemonForm from "./AddPokemonForm";

function PokemonList({ pokedex, setPokedex }) {
  return (
    <div>
      <AddPokemonForm setPokedex={setPokedex} />
      <div className="pokemon-container">
        {pokedex.map((pokemon) => {
          return (
            <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}
              setPokedex={setPokedex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
