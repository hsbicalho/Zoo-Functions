const { species } = require('../data/zoo_data');

function countAnimals(...animal) {
  if (animal.length === 0) {
    const objSpecie = {};
    species.forEach((eachSpecie) => { objSpecie[eachSpecie.name] = eachSpecie.residents.length; });
    return objSpecie;
  }
  if (animal[0].sex) {
    return species.find((findSpecieBySex) => animal[0]
      .specie === findSpecieBySex.name).residents.filter((specieSex) => specieSex
      .sex === animal[0].sex).length;
  }
  return species.find((findSpecie) => findSpecie.name === animal[0].specie).residents.length;
}

module.exports = countAnimals;
