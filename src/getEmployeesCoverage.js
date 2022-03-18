const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function getEmployeeByName(name) {
  return employees.find((employee) => employee.firstName === name || employee.lastName === name);
}

function getSpeciesByEmploy(idEmploy) {
  const arrayAnimals = employees.find((employee) => employee.id === idEmploy)
    .responsibleFor.map((idAnimal) => species.find((specie) => idAnimal === specie.id).name);
  return arrayAnimals;
}

function getLocationByAnimal(idEmploy) {
  const arrayLocation = employees.find((employee) => employee.id === idEmploy)
    .responsibleFor.map((idAnimal) => species.find((specie) => idAnimal === specie.id).location);
  return arrayLocation;
}

function getEmployeesCoverage(employeInfo) {
  if (!employeInfo) {
    const finalObj = employees.reduce((array, eachEmploye) => {
      const objEmoploye = { id: '', fullname: '', species: [], locations: [] };
      objEmoploye.id = eachEmploye.id;
      objEmoploye.fullname = `${eachEmploye.firstName} ${eachEmploye.lastName}`;
      objEmoploye.species.push(getSpeciesByEmploy(eachEmploye.id));
      objEmoploye.species.push(getLocationByAnimal(eachEmploye.id));
      return objEmoploye;
    }, []);
    return finalObj;
  }
  if (employees.some((employeeId) => employeInfo === employeeId.id
  || employees.some((employeeName) => employeInfo === employeeName.name))) {
  }
  throw new Error('Informações inválidas');
}
getEmployeesCoverage();
module.exports = getEmployeesCoverage;
