module.exports = evenIndexes

function evenIndexes(inputStr) {
  let outputTab = []
  for(i = 0; i < inputStr.length; i+=2) {
      outputTab.push(inputStr[i])
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