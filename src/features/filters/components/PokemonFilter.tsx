import { Input } from "./Input";

interface PokemonFilterProps {
  filterText: string;
  onFilterChange: (value: string) => void;
}

const PokemonFilter = ({ filterText, onFilterChange }: PokemonFilterProps) => {
  return (
      <div className="w-full h-[40px] flex justify-center items-center">
        <div className="flex gap-2 items-center w-1/2">
          <Input
            placeholder="Filtrar"
            value={filterText}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </div>
      </div>
  );
};

export default PokemonFilter;