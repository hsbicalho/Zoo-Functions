const { employees } = require('../data/zoo_data');

function getEmployeeByName(e) {
  if (arguments.length === 0) return {};
  return employees.find((employee) => employee.firstName === e || employee.lastName === e);
}

module.exports = getEmployeeByName;
