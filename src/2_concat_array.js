module.exports = concatArray

function concatArray(inputTab) {
  return inputTab.join(" ") + "."
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(concatArray(["Hello", "this", "is", "dog"]), 'Hello this is dog.');
verify(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]), 'All I want for christmas is you.');
verify(concatArray([]), '.');