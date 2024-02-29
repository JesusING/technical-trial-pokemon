import "./di.decorate";
import { Container } from "./app-config/container/container";


export const register = (container: typeof Container) => {
  container.unbindAll();

//   container
//     .bind<IUserService>(UserService)
//     .toDynamicValue(() => useUserService());
};
