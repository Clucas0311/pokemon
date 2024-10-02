import React from "react";
import "./PokemonItem.css";
import { useNavigate } from "react-router-dom";

function PokemonItem({ pokemon, isSingle }) {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleBackButton = () => {
    navigate("/pokemon");
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <p className="pokemon-number">#{pokemon.number}</p>
        <div className="pokemon-types">
          <span className={`pokemon-type type-${pokemon.type1.toLowerCase()}`}>
            {pokemon.type1}
          </span>
          <span className={`pokemon-type type-${pokemon.type2.toLowerCase()}`}>
            {pokemon.type2}
          </span>
        </div>
      </div>
      {isSingle ? (
        <button onClick={handleBackButton}>Go Back</button>
      ) : (
        <button onClick={handleSeeDetails}>See Details</button>
      )}
    </div>
  );
}

export default PokemonItem;
