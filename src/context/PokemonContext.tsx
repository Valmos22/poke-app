import { createContext, ReactNode, useContext, useState } from 'react';
import { PokemonDetailType } from '../shared/utils/pokemon';

interface PokemonContextType {
    selectedPokemon: PokemonDetailType | null;
    setSelectedPokemon: (pokemon: PokemonDetailType) => void;
    isEffect: boolean | null;
    setIsEffect: (effect: boolean) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetailType | null>(null);
    const [isEffect, setIsEffect] = useState<boolean | null>(null);
  
    return (
      <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon, isEffect, setIsEffect }}>
        {children}
      </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
      throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
};