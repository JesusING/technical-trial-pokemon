/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassConstructor } from "class-transformer";
import { Mapper } from "./Mapper";

export const merge = <StateType, E>(
  EntityType: ClassConstructor<E>,
  persistedState: any,
  currentState: StateType
) => {
  const entityKey = Object.keys(persistedState)[0];
  const persistedEntity = persistedState[entityKey];

  const entityData = Array.isArray(persistedEntity)
    ? persistedEntity.map((entity) => Mapper.convert(entity, EntityType))
    : Mapper.convert(persistedEntity, EntityType);

  const state = {
    [entityKey]: entityData,
  };

  return {
    ...currentState,
    ...state,
  } as StateType;
};
