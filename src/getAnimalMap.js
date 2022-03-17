const { species } = require('../data/zoo_data');

function listNames(options, specie) {
  return specie.residents.reduce((arrayList, animal) => {
    if (options.sex && animal.sex === options.sex) arrayList.push(animal.name);
    if (!options.sex) arrayList.push(animal.name);
    return arrayList;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const animalMap = species.reduce((obj, specie) => {
    if (options.includeNames) {
      const animalNamesList = listNames(options, specie);
      if (options.sorted) {
        animalNamesList.sort();
      }
      obj[specie.location].push({ [specie.name]: animalNamesList });
    } else {
      obj[specie.location].push(specie.name);
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return animalMap;
}
module.exports = getAnimalMap;
