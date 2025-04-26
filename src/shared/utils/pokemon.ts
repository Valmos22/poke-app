export interface PokemonDetailType {
  name: string;
  img: string;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  sprites: {
    other: {
      home: {
        front_default: string,
        front_shiny: string,
      },
      showdown: {
        back_default: string,
        back_shiny: string,
        front_default: string,
        front_shiny: string,
      },
    }
  }
}

export interface PokemonBasicType {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
}