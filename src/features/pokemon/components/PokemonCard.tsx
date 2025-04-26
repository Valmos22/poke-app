import { usePokemonContext } from "../../../context/PokemonContext";
import { PokemonBasicType, PokemonDetailType } from "../../../shared/utils/pokemon";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

interface PokemonTableProps {
  pokemon: PokemonBasicType;
}

const PokemonCard = ({ pokemon }: PokemonTableProps) => {
  const {setSelectedPokemon, setIsEffect } = usePokemonContext();
  const { name } = pokemon;
  const { data, isFetching } = usePokemonDetails(name);

  const onSelect = (poke: PokemonDetailType) => {
    setSelectedPokemon(poke);
    setIsEffect(false);
  }

  return (
    <>
      {isFetching ? (
        <p>Cargando...</p>
      ) : (
        <div className="pokemon_card">
          <img
            src={data?.sprites.other.home.front_default}
            alt={data?.name}
            className="mx-auto w-full h-24 cursor-pointer hover:scale-105 transition-transform"
            onDoubleClick={() => onSelect(data)}
          />
          <h2 className="text-center font-semibold">{data?.name}</h2>
        </div>
      )}
    </>
  );
};

export default PokemonCard;