import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../services/pokemonApi";

export const usePokemonDetails = (offset = '') => {
  return useQuery({
    queryKey: ["pokemons", offset],
    queryFn: () => getPokemonDetails(offset),
  });
};


