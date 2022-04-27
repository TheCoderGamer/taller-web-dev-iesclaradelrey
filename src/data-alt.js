export async function getPokemonById(id) {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const pokemon = await data.json();

  return {
    id: pokemon.id,
    weight: pokemon.weight / 10,
    name: pokemon.name,
    image: pokemon.sprites.other.home.front_default
  };
}
