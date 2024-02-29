import {
  ClassConstructor as InternalClassConstructor,
  plainToClass,
} from "class-transformer";

export type ClassConstructor<T> = InternalClassConstructor<T>;

export class Mapper {
  public static convert<FROM, TO>(from: FROM, to: ClassConstructor<TO>): TO {
    return plainToClass(to, from);
  }
}
