const { employees } = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.some((idManager) => idManager.managers.includes(id));
  return manager;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employer = employees.filter((manager) => manager.managers.includes(managerId));
    const name = employer.map((managerName) => `${managerName.firstName} ${managerName.lastName}`);
    return name;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
