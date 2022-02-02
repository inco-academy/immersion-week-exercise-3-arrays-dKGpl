module.exports = evenIndexes

function evenIndexes(inputStr) {
  const inputStrTab = [...inputStr]
  let outputTab = []
  for(const [index, element] of inputStrTab.entries()) {
      if(index%2 === 0) outputTab.push(element)
  }
  return outputTab
};

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes("lol"), [ 'l', 'l' ]);
verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
verify(evenIndexes(""), [ ]);