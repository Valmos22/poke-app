import { useQuery } from "@tanstack/react-query";
import { seeSkill } from "../services/pokemonApi";

export const usePokemonDetailsSkill = (offset: string) => {
    return useQuery({
      queryKey: ["pokemons", offset],
      queryFn: () => seeSkill(offset),
    });
};