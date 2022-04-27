import { getNode } from "./common";

export function getPokemonId() {
  const pokemonInput = getNode(".search-pokemon__input");
  return +pokemonInput.value;
}

export function showPokemon(pokemon) {
  getNode(".pokemon__id").innerText = pokemon.id;
  getNode(".pokemon__weight").innerText = pokemon.weight;
  getNode(".pokemon__name").innerText = pokemon.name;
  getNode(".pokemon__image").src = pokemon.image;
}
