import "./di.decorate";
import { Container } from "./app-config/container/container";
import { IPokemonService, PokemonService } from "./infrastructure/services/pokemon/IPokemonService";
import { usePokemonService } from "./infrastructure/services/pokemon/pokemon-service";


export const register = (container: typeof Container) => {
  container.unbindAll();

  container
    .bind<IPokemonService>(PokemonService)
    .toDynamicValue(() => usePokemonService());
};
