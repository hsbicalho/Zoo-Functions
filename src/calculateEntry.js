const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants) {
    if (Object.entries(entrants).length === 0) return 0;
    const objEntrants = { child: 0, adult: 0, senior: 0 };
    objEntrants.child = entrants.filter(({ age }) => age < 18).length;
    objEntrants.adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
    objEntrants.senior = entrants.filter(({ age }) => age >= 50).length;
    return objEntrants;
  }
  return 0;
}

function calculateEntry(entrants) {
  const nEntry = countEntrants(entrants);
  if (nEntry === 0) return 0;
  return nEntry.child * prices.child + nEntry.adult * prices.adult + nEntry.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
