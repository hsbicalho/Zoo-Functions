const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employ = employees.find((emp) => emp.id === id);
  const fisrt = species.find((bixo) => bixo.id === employ.responsibleFor[0]);
  const arrayAnimals = fisrt.residents.sort((a, b) => b.age - a.age);
  return [arrayAnimals[0].name, arrayAnimals[0].sex, arrayAnimals[0].age];
}

module.exports = getOldestFromFirstSpecies;
