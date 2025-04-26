import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/pokemonApi";

export const usePokemon = (offset = 0) => {
  return useQuery({
    queryKey: ["pokemons", offset],
    queryFn: () => getPokemons(offset),
  });
};