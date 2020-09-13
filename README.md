# Pokemon-Berries-Random

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/pokemon-berries-random"><img src="https://img.shields.io/npm/v/pokemon-berries-random.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/pokemon-berries-random"><img src="https://img.shields.io/npm/dt/pokemon-berries-random.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/CharizardFire58/pokemon-berries-random"><img src="https://travis-ci.org/CharizardFire58/pokemon-berries-random.svg" alt="Build status" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/pokemon-berries-random/"><img src="https://nodei.co/npm/pokemon-berries-random.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## About

This Module Contains all berries and pokemons names and return a Pokemon (or berrie) random name from the list.

<br />

**Getting Started**

To install, simply run the following command in your terminal (from your project directory):

```
npm install pokemon-berries-random
```

<br></br>

**Example Code**
For calling the pokemon and berries random names.

```js
const Pokemon = require("pokemon-berries-random");

// Logs a random mythical pokemon
console.log("Mythical Pokemon: " + Pokemon.randomMythical());

// Logs a random legendary pokemon
console.log("Legendary Pokemon: " + Pokemon.randomLengendary());

// Logs a random pokemon from gen 1 to 8
console.log("Full Random Pokemon: " + Pokemon.randomPokemon());

// Logs a random berrie
console.log("Random Berries: " + Pokemon.randomBerry().toUpperCase());
```
