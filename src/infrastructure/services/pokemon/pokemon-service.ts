
import { create } from "../../../app-config/store/store";
import { Pokemon } from "../../../domain/models/pokemon";
import { IPokemonService } from "./IPokemonService";

export const usePokemonService = create<IPokemonService>((set, get) => ({
  save: (newState: Pokemon[]) => set({ pokemonList: newState }),
  clear: () => set({ pokemonList: undefined }),
  current: () => get().pokemonList,
}))
  .withPersist(Pokemon, "pokemonList")
  .build();
