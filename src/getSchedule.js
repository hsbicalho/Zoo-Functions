const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const officeHour = 'officeHour';
const exhibition = 'exhibition';

function getSpecieByWeekDay(day) {
  const names = [];
  if (day === 'Monday') return 'The zoo will be closed!';
  species.forEach((dSpecie) => {
    if (dSpecie.availability.includes(day)) names.push(dSpecie.name);
  });
  return names;
}
function getDayByAnimal(animal) {
  const foundedAnimal = species.find((chosenAnimal) => chosenAnimal.name === animal);
  return foundedAnimal.availability;
}

function getFraseByDay(day) {
  if (day !== 'Monday') return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  return 'CLOSED';
}

function getDayHour(day) {
  if (day === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' },
    };
  }
  const objWeekDay = {};
  objWeekDay[day] = { [officeHour]: getFraseByDay(day), [exhibition]: getSpecieByWeekDay(day) };
  return objWeekDay;
}
function getSchedule(scheduleTarget) {
  if (species.some((sName) => sName.name === scheduleTarget)) {
    return getDayByAnimal(scheduleTarget);
  }
  if (Object.keys(hours).some((weekDay) => weekDay === scheduleTarget)) {
    return getDayHour(scheduleTarget);
  }
  if (scheduleTarget === undefined || scheduleTarget) {
    const objWeekDays = Object.keys(hours).reduce((obj, day) => {
      const finalObj = obj;
      finalObj[day] = { [officeHour]: getFraseByDay(day), [exhibition]: getSpecieByWeekDay(day) };
      return finalObj;
    }, {});
    return (objWeekDays);
  }
}
module.exports = getSchedule;
