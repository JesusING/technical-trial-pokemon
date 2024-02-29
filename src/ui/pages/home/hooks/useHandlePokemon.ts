import { useEffect, useState } from "react";
import { IPaginatedResult } from "../../../../infrastructure/interfaces/pokemon-interface";

export const useHandlePokemon = () => {
  const [pokemonesResult, setPokemonesResult] = useState<IPaginatedResult>();

  const fetchPokemonesPaginated = async (call?: string) => {
    const res = await fetch(call ?? `https://pokeapi.co/api/v2/pokemon?limit=${151}&offset=${0}`);
    return res.json();
  };

  const handlePokemonesResult = async () => {
    const result = await fetchPokemonesPaginated();
    setPokemonesResult(result);
  };

  useEffect(() => {
    handlePokemonesResult();
  }, []);

  return {
    fetchPokemonesPaginated,
    pokemonesResult
  };
};
