import Loader from "../../../shared/components/Loader";
import { EffectEntry } from "../../../shared/utils/pokemon";
import { usePokemonDetailsSkill } from "../hooks/usePokemonSkill";

interface PokemonProps {
  pokemon: string;
}

const PokemonModal = ({ pokemon }: PokemonProps) => {
  const { data, isFetching } = usePokemonDetailsSkill(pokemon);

  return (
    <div className="contenedor_effect">
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          <h3>Efectos:</h3>
          {data.effect_entries.map((effec: EffectEntry) => (
            <li key={effec.effect}>
              {effec.effect}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonModal;