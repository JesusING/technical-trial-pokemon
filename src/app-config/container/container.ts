import {
  Container as InversifyContainer,
  decorate,
  inject,
  injectable,
} from "inversify";

type Newable<T> = new (...args: never[]) => T;

class CustomContainer extends InversifyContainer {
  constructor() {
    super({ skipBaseClassChecks: true });
  }

  bindGenericRepository<R, A>(repository: Newable<R>, api: Newable<A>): void {
    decorate(injectable(), repository);
    decorate(injectable(), api);
    decorate(inject(api), repository, 0);

    this.bind(repository).toSelf();
    this.bind(api).toSelf();
  }
}

export const Container = new CustomContainer();
