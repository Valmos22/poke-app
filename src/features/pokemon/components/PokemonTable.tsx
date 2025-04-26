import Loader from "../../../shared/components/Loader.tsx";
import { PokemonBasicType } from "../../../shared/utils/pokemon.ts";
import PokemonCard from "./PokemonCard";

interface PokemonTableProps {
  pokemons: PokemonBasicType[];
}

const PokemonTable = ({ pokemons }: PokemonTableProps) => {
  return (
    <>
    {pokemons ? (
        <div className="contenedor_poke w-full flex justify-center items-start flex-wrap gap-4">
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>
          ))}
        </div>
    ) : (
      <div className={`loading-overlay ${pokemons ? "visible" : "hidden"}`}>
        <Loader />
      </div>
    )}
    </>
  );
};

export default PokemonTable;