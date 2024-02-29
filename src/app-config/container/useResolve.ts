import { interfaces } from "inversify";
import { Container } from "./container";

export const useResolve = <T>(
  serviceIdentifier: interfaces.ServiceIdentifier<T>
): T => {
  return Container.get(serviceIdentifier);
};
