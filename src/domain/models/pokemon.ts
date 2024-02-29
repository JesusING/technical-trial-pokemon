export class Pokemon {
    id: string;
    name: string;
    sprites: { other: { home: { front_default: string } } };
    weight: number;
    height: number;
  
    constructor(sprites: { other: { home: { front_default: string } } }, weight: number, height: number, name: string, id: string) {
      this.sprites = sprites;
      this.weight = weight;
      this.height = height;
      this.name = name;
      this.id = id;
    }
  }
  