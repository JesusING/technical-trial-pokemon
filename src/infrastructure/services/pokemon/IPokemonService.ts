import { Pokemon } from "../../../domain/models/pokemon";

export interface IPokemonService {
  pokemonList?: Pokemon[];
  current(): Pokemon[] | undefined;
  save(pokemon: Pokemon[]): void;
  clear(): void;
}
export const PokemonService = Symbol.for("PokemonService");
