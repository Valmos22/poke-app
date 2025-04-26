import React, { useEffect, useState } from "react";
import imgPoke from "../src/assets/pokeballdos.png";
import './App.css';
import { FavoritesProvider } from "./context/FavoritesContext";
import PokemonFilter from "./features/filters/components/PokemonFilter";
import PokemonDetails from "./features/pokemon/components/PokemonDetails";
import PokemonFavorites from "./features/pokemon/components/PokemonFavorites";
import PokemonTable from "./features/pokemon/components/PokemonTable";
import { usePokemon } from "./features/pokemon/hooks/usePokemon";
import Loader from "./shared/components/Loader";
import Pagination from "./shared/components/Pagination";
import { PAGE_LIMIT } from "./shared/utils/constants";
import { PokemonBasicType } from "./shared/utils/pokemon";
import { totalPagesTable } from "./shared/utils/totalPagesTable";

const App = () => {
  const [offset, setOffset] = React.useState(0);
  const { data, isFetching } = usePokemon(offset);

  const [filteredData, setFilteredData] = useState([]);
  const [filterText, setFilterText] = useState<string>(""); 

  useEffect(() => {
    if (filterText.trim() === "") {
        setFilteredData(data?.results);
    } else {
        const filtered = data?.results.filter((poke: PokemonBasicType) =>
            poke.name.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredData(filtered);
    }
  }, [filterText, data]);

  const totalPage = totalPagesTable(filteredData?.length, PAGE_LIMIT)

  return (
    <>
      <div className="contenedor_titulo w-full flex justify-start items-start text-5xl">
        <h1 className="">
          Pokémon App
        </h1>
        <img 
            src={imgPoke} 
            alt="Descripción de la imagen"
        />
      </div>
      <FavoritesProvider>
        <div className="">
          <PokemonFavorites />
        </div>
        <div className="poke_detail flex gap-4">
          <div className="cotenedor_pokemones flex justify-center items-start w-[60%]">
            <div className="data_pokemones relative flex flex-col gap-8 justify-center items-center w-full">
              <PokemonFilter filterText={filterText} onFilterChange={setFilterText} />
              {filteredData ? (
                <PokemonTable pokemons={filteredData} />
              ) : (
                <div className={`loading-overlay ${isFetching ? "visible" : "hidden"}`}>
                  <Loader />
                </div>
              )}
              <Pagination
                currentPage={offset / PAGE_LIMIT}
                onPageChange={(page: number) => setOffset(page * PAGE_LIMIT)}
                totalPage={totalPage}
              />
            </div>
          </div>
          <div className="details_poke w-[40%] flex flex-col">
            <PokemonDetails /> 
          </div>
        </div>
      </FavoritesProvider>
    </>
  );
};

export default App;