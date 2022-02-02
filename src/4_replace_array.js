module.exports = replaceArray

function replaceArray(inputTab) {
  let outputTab = []
  for(el of inputTab) {
      el[0].includes("h") || el[0].includes("H") ? outputTab.push(el.toUpperCase()) : outputTab.push(el)
  }
  return outputTab
};

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(["banana", "suit", "hammer"]), [ 'banana', 'suit', 'HAMMER' ]);
verify(replaceArray(["Hello", "there"]), [ 'HELLO', 'there' ]);
verify(replaceArray(["Hey!", "hey..."]), [ 'HEY!', 'HEY...' ]);