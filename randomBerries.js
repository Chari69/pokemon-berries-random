const Berries = require('./src/berriesRow.json')

module.exports = () => {
     const randomBerry = (total) => (Math.random() * total | 0) + 1
     return Berries[randomBerry(Berries.length)]
 }