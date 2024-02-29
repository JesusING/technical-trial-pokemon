import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../app-config/routes";
import { IPokemon } from "../../../../infrastructure/interfaces/pokemon-interface";

export const usePokemonDetail = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>()
  const navigate = useNavigate();

  const getPokemonById = async (id: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  };

  const goToDetail = (id: string) => {
    getPokemonById(id)
      .then((res) => {
        setSelectedPokemon(res)
        navigate(`${ROUTES.home}/${id}`);
      })
      .catch(error => {
        alert(error);
      });
  };

  const onCloseDetail = () => {
    setSelectedPokemon(undefined)
    navigate(`${ROUTES.home}`)
  } 

  return {
    selectedPokemon,
    goToDetail,
    onCloseDetail
  };
};
