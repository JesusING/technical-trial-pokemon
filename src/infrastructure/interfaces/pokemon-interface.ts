export interface IPokemonPreview {
    name: string;
    url: string;
  }
  
  export interface IPaginatedResult {
    count: number;
    next: string;
    previous: string;
    results: IPokemonPreview[];
  }
  
  export interface IPokemon {
    id: string;
    name: string;
    sprites: { other: { home: { front_default: string } } };
    weight: number;
    height: number;
  }
  