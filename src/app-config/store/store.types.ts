/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
export declare type SetState<T extends unknown> = {
  _(partial: T | Partial<T> | ((state: T) => T | Partial<T>)): void;
}["_"];

export declare type GetState<T extends unknown> = () => T;

export declare type Destroy = () => void;
