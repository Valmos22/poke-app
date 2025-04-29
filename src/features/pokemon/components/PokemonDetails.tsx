import { useState } from "react";
import { useFavoritesContext } from "../../../context/FavoritesContext";
import { usePokemonContext } from "../../../context/PokemonContext";
import { Toast } from "../../../shared/utils/alert";
import { Button } from "../../filters/components/Button";
import PokemonModal from "./PokemonModal";

const PokemonDetails = () => {
    const [uriEffect, seturiEffect] = useState<string>("");

    const { selectedPokemon, isEffect, setIsEffect } = usePokemonContext();
    const { agregarPokemon} = useFavoritesContext();

    const handleClick = (pokeUri: string) => {
      seturiEffect(pokeUri);
      setIsEffect(true)
    };

    const agregaPokemon = () => {
      if (selectedPokemon) {
        Toast.fire({
          icon: "success",
          title: `Se agrego ${selectedPokemon.name} a tus favoritos`
        });
        agregarPokemon({
          name: selectedPokemon.name,
          img: selectedPokemon.img,
          weight: selectedPokemon.weight || 0,
          types: selectedPokemon.types || [],
          abilities: selectedPokemon.abilities || [],
          sprites: selectedPokemon.sprites || {
            other: {
              home: {
                front_default: "",
                front_shiny: "",
              },
              showdown: {
                back_default: "",
                back_shiny: "",
                front_default: "",
                front_shiny: "",
              },
            },
          },
        });
      } else {
        console.error("selectedPokemon no tiene los datos requeridos.");
      }
    };

    if (!selectedPokemon) return <p>Selecciona un Pokémon con doble click en la imagen</p>;

    return (
      <>
        <div className="contenedor_all_details">
          <div>
            <Button onClick={agregaPokemon} icon='heart-fill'/>
          </div>
          <div className="pokemon_card_det">
            <h2 className="text-center font-semibold">{selectedPokemon?.name}</h2>
              <img
                src={selectedPokemon?.sprites.other.home.front_default}
                alt={selectedPokemon?.name}
                className="mx-auto w-24 h-24 cursor-pointer hover:scale-105 transition-transform"
              />
          </div>
          <div className="contenedor_poke_details">
            <p className="text-xl font-bold mb-2 w-full">Tipo de Pokémon: {selectedPokemon?.types[0].type.name}</p>
            <p className="w-full">Peso: {selectedPokemon.weight}</p>
            <div className="poke_abilities mt-2 w-full">
              <p className="font-semibold w-full">Habilidades:</p>
              <div className="poke_details_buttons">
                {selectedPokemon.abilities.map((ability) => (
                    <div key={ability.ability.name}>
                      <span className="flex flex-col animate-bounceDown">👇</span>
                      <button
                        onClick={() => handleClick(ability.ability.url)}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        {ability.ability.name}
                      </button>
                    </div>
                ))}
              </div>
            </div>
            <div className="poke_details_gif">
              <img
                src={selectedPokemon?.sprites.other.showdown.front_default}
                alt={selectedPokemon?.name}
                className="mx-auto w-24 h-24 cursor-pointer hover:scale-105 transition-transform"
              />
              <img
                src={selectedPokemon?.sprites.other.showdown.back_shiny}
                alt={selectedPokemon?.name}
                className="mx-auto w-24 h-24 cursor-pointer hover:scale-105 transition-transform"
              />
            </div>   
          </div>
        </div>
        {isEffect && (
          <div className="contenedor_all_effect">
            <PokemonModal pokemon={uriEffect} />
          </div>
        )}
      </>
    )
}

export default PokemonDetails