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

function getObjEmployees() {
  const finalObj = employees.reduce((elemento, eachEmploye) => {
    const objEmoploye = { id: '', fullName: '', species: [], locations: [] };
    objEmoploye.id = eachEmploye.id;
    objEmoploye.fullName = `${eachEmploye.firstName} ${eachEmploye.lastName}`;
    objEmoploye.species = getSpeciesByEmploy(eachEmploye.id);
    objEmoploye.locations = getLocationByAnimal(eachEmploye.id);
    elemento.push(objEmoploye);
    return elemento;
  }, []);
  return finalObj;
}

function getInfoById(id) {
  const objInfo = { id: '', fullName: '', species: [], locations: [] };
  objInfo.id = getEmployeeById(id).id;
  objInfo.fullName = `${getEmployeeById(id).firstName} ${getEmployeeById(id).lastName}`;
  objInfo.species = getSpeciesByEmploy(id);
  objInfo.locations = getLocationByAnimal(id);
  return objInfo;
}

function getInfoByName(name) {
  const objInfo = { id: '', fullName: '', species: [], locations: [] };
  objInfo.id = getEmployeeByName(name).id;
  objInfo.fullName = `${getEmployeeByName(name).firstName} ${getEmployeeByName(name).lastName}`;
  const employ = getEmployeeByName(name);
  objInfo.species = getSpeciesByEmploy(employ.id);
  objInfo.locations = getLocationByAnimal(employ.id);
  return objInfo;
}

function validadeId(info) {
  if (info.id && employees.some((employe) => info.id === employe.id)) return true;
  return false;
}

function validadeName(info) {
  if (info.name && employees.some((e) => info.name === e.firstName || info.name === e.lastName)) {
    return true;
  }
  return false;
}

function getEmployeesCoverage(employeInfo) {
  if (!employeInfo) return getObjEmployees();
  if (validadeId(employeInfo)) return getInfoById(employeInfo.id);
  if (validadeName(employeInfo)) return getInfoByName(employeInfo.name);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
