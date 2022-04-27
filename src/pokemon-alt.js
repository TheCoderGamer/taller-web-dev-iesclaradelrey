export function getPokemonId() {
  return +prompt("Pokémon ID:");
}

export function showPokemon(pokemon) {
  alert("Pokémon: " + pokemon.id + " - " + pokemon.name);
}
