import { useFavoritesContext } from '../../../context/FavoritesContext';
import { Button } from '../../filters/components/Button';

const PokemonFavorites = () => {
  const { dataFavorites, eliminarPokemon } = useFavoritesContext();
  
  const eliminaPokemon = (name: string) => {
    eliminarPokemon(name);
  };

  return (
    <>
      {dataFavorites.length > 0 ? (
        <div className='contenedor_favoritos'>
          <h1>Pokemones Favoritos</h1>
          <div className='favoritos'>
            {dataFavorites.map((poke, index) => (
              poke?.sprites?.other?.home?.front_default ? (
                <div key={index} className='favoritos_img_name'>
                  <Button onClick={() => eliminaPokemon(poke.name)} icon='x-circle' />
                  <img
                    src={poke.sprites.other.home.front_default}
                    alt={poke.name}
                    className="mx-auto w-24 h-24 cursor-pointer hover:scale-105 transition-transform"
                  />
                  <span>{poke.name}</span>
                </div>
              ) : (
                <></>
              )
            ))}
          </div>
        </div>
      ) : (
        <p>No hay Pokémon favoritos.</p>
      )}
    </>
  );
};

export default PokemonFavorites;