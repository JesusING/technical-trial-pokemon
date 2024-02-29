import { useResolve } from "../../../../app-config/container/useResolve";
import { IPokemonService, PokemonService } from "../../../../infrastructure/services/pokemon/IPokemonService";

export const useHandleFavoritePokemon = () => {
  const pokemonService = useResolve<IPokemonService>(PokemonService);
  const pokemonState = pokemonService.pokemonList;

  const getPokemonById = async (id: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  };

  const saveFavoritePokemon = (id: string) => {
    getPokemonById(id)
      .then(res => {
        pokemonService.save([...(pokemonService.pokemonList ?? []), res]);
        alert(`Pokemon with id: ${id} has been added succesfuly`);
      })
      .catch(error => {
        alert(error);
      });
  };

  const deleteFavoritePokemon = (id: number) => {
    const pokemonList = pokemonState?.filter(item => +item.id !== +id) ?? [];
    pokemonList?.filter(item => +item.id !== +id);
    pokemonService.save(pokemonList ?? []);
  };

  const isPokemonFavorite = (id: number) => {
    return pokemonState?.map(pokemon => +pokemon.id === id).includes(true) ?? false;
  };

  return {
    saveFavoritePokemon,
    deleteFavoritePokemon,
    pokemonState,
    isPokemonFavorite
  };
};
