const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieObj = species.find((specie) => specie.name === animal);
  return specieObj.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
