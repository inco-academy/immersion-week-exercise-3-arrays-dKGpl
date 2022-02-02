module.exports = averageMinMax

function averageMinMax(inputTab) {
  sortedInput = inputTab.sort((a, b) => a - b)
  const tabLength = sortedInput.length,
        elMin = sortedInput[0],
        elMax = sortedInput[tabLength -1]
  let sum = 0,
      average = 0
  for( el of sortedInput) {
      sum += el
  }
  average = Math.floor(sum/tabLength)
  console.log(`Min: ${elMin} Max: ${elMax} Average: ${average}`)
};

/**Weryfikacja */
// function verify(input, goal) {
//   if (input === goal) {
//     console.log('Gratulacje!');
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
// verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
// verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');