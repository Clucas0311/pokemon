// const cohort_url = "2406-FTB-MT-WEB-PT"
// const BASE_URL = `http://localhost:5000/api/${cohort_url}`

const BASE_URL = "http://localhost:5000";

// GET all Pokemon
export async function getAllPokemon() {
  try {
    const response = await fetch(`${BASE_URL}/pokedex`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching all pokemon", error);
  }
}

// GET single Pokemon
export async function getSinglePokemon(id) {
  try {
    const response = await fetch(`${BASE_URL}/pokedex/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error, fetching single pokemon", error);
  }
}

// POST create pokemon
export async function createPokemon(name, number, type1, type2, imageUrl) {
  try {
    const response = await fetch(`${BASE_URL}/pokedex`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        number: number,
        type1: type1,
        type2: type2,
        imageUrl: imageUrl,
      }),
    });
    const newPokemon = await response.json();
    return newPokemon;
  } catch (error) {
    console.error("There was an error creating pokemon", error);
  }
}

// DELETE delete pokemon

export async function deletePokemon(id) {
  try {
    const response = await fetch(`${BASE_URL}/pokedex/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error deleting pokemon", error);
  }
}
