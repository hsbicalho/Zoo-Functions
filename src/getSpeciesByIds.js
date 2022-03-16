const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id: specieId }) => ids.some((id) => specieId === id));
}

module.exports = getSpeciesByIds;
