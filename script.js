const MODULE_MASSES = [
  118474, 89187, 55404, 99729, 110519, 105939, 97881, 134416, 121399, 85572, 96223, 121830, 116952, 51791, 54990, 87574, 124293, 110738, 63018, 58979, 121364, 126737, 124272, 129029, 81031, 87281, 142930, 136317, 108278, 67501, 50264, 136054, 122299, 84352, 111745, 65118, 61906, 58711, 79420, 72634, 87682, 143462, 100637, 83705, 130900, 93339, 73279, 138297, 92996, 139955, 58905, 140094, 134137, 137049, 58000, 115166, 141420, 76790, 90670, 110806, 130804, 70101, 56430, 117847, 89100, 80854, 108783, 121459, 87944, 105578, 134521, 136085, 118503, 73630, 80192, 59111, 79084, 85915, 95139, 148425, 56153, 117876, 133583, 143720, 138704, 141052, 69262, 76687, 95278, 99868, 62316, 56673, 79013, 51022, 87035, 145645, 148465, 92768, 83509, 108044
];

fuelNeededForAModule = (weight) => {
  return Math.floor(weight / 3) - 2;
};

fuelCalculator = (mass) => {
  const sum = (a, b) => (a + b);
  return mass
    .map(moduleWt => {
      // module fuel
      const moduleFuel = fuelNeededForAModule(moduleWt);
      // fuel for fuel
      return calculateExtraFuel(moduleFuel, moduleFuel);
    })
    .reduce(sum);
};

calculateExtraFuel = (fuelMass, total) => {
  const extraFuel = fuelNeededForAModule(fuelMass);
  if (extraFuel <= 0) {
    return total;
  }
  return calculateExtraFuel(extraFuel, extraFuel + total); 
}

console.time('aoc1');
const fuelNeeded = fuelCalculator(MODULE_MASSES);
console.log('total fuel needed', fuelNeeded);
console.timeEnd('aoc1');