import React, { useState } from "react";
import "./AddPokemonForm.css";
import { createPokemon } from "../api";

function AddPokemonForm({ setPokedex }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPokemon = await createPokemon(
      name,
      number,
      type1,
      type2,
      imageUrl
    );

    setPokedex((prevState) => {
      return [...prevState, newPokemon];
    });
    //Reset all input fields
    setName("");
    setImageUrl("");
    setType1("");
    setType2("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <h1>Add Pokemon</h1>
      <div className="form-group">
        <label htmlFor="name">Pokemon Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Pokemon Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Pokemon Number:</label>
        <input
          type="text"
          value={number}
          placeholder="Enter Pokemon Number"
          onChange={(event) => setNumber(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type1">Pokemon Type 1:</label>
        <input
          type="text"
          value={type1}
          placeholder="Enter Pokemon Type 1"
          onChange={(event) => setType1(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type2">Pokemon Type 2:</label>
        <input
          type="text"
          value={type2}
          placeholder="Enter Pokemon Type 2"
          onChange={(event) => setType2(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Pokemon ImageUrl:</label>
        <input
          type="text"
          value={imageUrl}
          placeholder="Enter ImageUrl"
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Add Pokemon
      </button>
    </form>
  );
}

export default AddPokemonForm;
