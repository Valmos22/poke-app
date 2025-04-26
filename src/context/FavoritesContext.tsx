import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { PokemonDetailType } from '../shared/utils/pokemon';

interface PokemonContextType {
    dataFavorites: PokemonDetailType[];
    setdataFavorites: (pokemons: PokemonDetailType[]) => void;
    agregarPokemon: (pokemon: PokemonDetailType) => void;
    eliminarPokemon: (name: string) => void;
}

const FavoritesContext = createContext<PokemonContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {

    const [dataFavorites, setdataFavorites] = useState<PokemonDetailType[]>(() => {
        const storedData = localStorage.getItem("pokemonesFavoritos");
        return storedData ? JSON.parse(storedData) : [];
    });

    useEffect(() => {
        const storedData = localStorage.getItem("pokemonesFavoritos");
        if (storedData) {
            setdataFavorites(JSON.parse(storedData));
        }
    }, []);

    const agregarPokemon = (pokemon: PokemonDetailType) => {
        const pokemonExistente = dataFavorites.find((item) => item.name === pokemon.name);

        if (pokemonExistente) {
            alert("El pokemon ya está en favoritos");
        } else {
            const newFavorites = [...dataFavorites, pokemon];
            setdataFavorites(newFavorites);
            localStorage.setItem("pokemonesFavoritos", JSON.stringify(newFavorites));
        }
    };

    const eliminarPokemon = (name: string) => {
        const newFavorites = dataFavorites.filter((poke) => poke.name !== name);
        setdataFavorites(newFavorites);
        localStorage.setItem("pokemonesFavoritos", JSON.stringify(newFavorites));
    };

    return (
        <FavoritesContext.Provider
            value={{
                dataFavorites,
                setdataFavorites,
                agregarPokemon,
                eliminarPokemon,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )

}

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
      throw new Error('useFavoritesContext must be used within a FavoritesProvider');
    }
    return context;
};