/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */

import {
  create as createImpl,
  StateCreator,
  StoreMutatorIdentifier,
} from "zustand";
import { devtools, persist as persistImpl } from "zustand/middleware";

import { merge } from "./store.extensions";
import { ClassConstructor } from "class-transformer";

export const create = <
  T extends unknown,
  Mos extends [StoreMutatorIdentifier, unknown][] = []
>(
  stateCreator: StateCreator<T, [], Mos>
) => {
  const configuration = {
    withPersist: false,
    entityConstructor: undefined as any,
    entityName: "",
  };

  const store = createImpl<T>();

  const build = () => {
    const { withPersist, entityConstructor, entityName } = configuration;

    if (withPersist) {
      const storageKey = entityName;

      return store(
        devtools(
          persistImpl(stateCreator as any, {
            name: storageKey,
            merge: (persistedState: any, currentState: T) =>
              merge(entityConstructor, persistedState, currentState),
          })
        )
      );
    }

    return store(devtools(stateCreator as any));
  };

  const withPersist = <T>(entityType: ClassConstructor<T>, name: string) => {
    configuration.entityConstructor = entityType;
    configuration.withPersist = true;
    configuration.entityName = name;

    return { build };
  };

  return {
    build,
    withPersist,
  };
};
