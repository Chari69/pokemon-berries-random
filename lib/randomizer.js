'use strict';

const Berries = require('../data/berries.json');
const Pokemon = require('../data/pokemon.json');

const randomizer = (total) => (Math.random() * total | 0) + 1; // "randomizer"

// get a random berrie
exports.randomBerry = () => {
    return Berries[randomizer(Berries.length)];
};

// get a random pokemon (gen 1-8)
exports.randomPokemon = () => {
    return Pokemon.allrandom[randomizer(Pokemon.allrandom.length)];
};

// get a random legendary pokemon
exports.randomLengendary = () => {
    return Pokemon.legendaries[randomizer(Pokemon.legendaries.length)];
};

// get a random mythical pokemon
exports.randomMythical = () => {
    return Pokemon.mythical[randomizer(Pokemon.mythical.length)];
};