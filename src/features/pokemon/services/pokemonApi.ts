import { API_URL, PAGE_LIMIT } from "../../../shared/utils/constants";


export const getPokemons = async (offset: number = 0, limit: number = PAGE_LIMIT) => {
  const response = await fetch(
    `${API_URL}?offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }

  return response.json();
};

export const getPokemonDetails = async (name: string = '') => {
  const response = await fetch(`${API_URL}/${name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }

  return response.json();
};

export const seeSkill = async (offset: string) => {
  const response = await fetch(`${offset}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }

  return response.json();
}