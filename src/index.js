import VanillaTilt from "vanilla-tilt";
import confetti from "canvas-confetti";

import { getNode } from "./common";
import { getPokemonById } from "./data-alt";
import { getPokemonId, showPokemon } from "./pokemon";

import "@picocss/pico";

import "./style.css";

VanillaTilt.init(getNode(".pokemon"));

async function main() {
  const pokemonId = getPokemonId();
  const pokemon = await getPokemonById(pokemonId);

  if (!pokemon) return alert("Error!");

  showPokemon(pokemon);
  confetti();
}

const searchForm = getNode(".search-pokemon");
searchForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  main();
});
