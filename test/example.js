// Test file
const Pokemon = require('../index.js');

// Logs a random mythical pokemon
console.log("Mythical Pokemon: " + Pokemon.randomMythical());

// Logs a random legendary pokemon
console.log("Legendary Pokemon: " + Pokemon.randomLengendary());

// Logs a random pokemon from gen 1 to 8
console.log("Full Random Pokemon: " + Pokemon.randomPokemon());

// Logs a random berrie
console.log("Random Berries: " + Pokemon.randomBerry().toUpperCase());