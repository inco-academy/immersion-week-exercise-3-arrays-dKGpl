module.exports = displayFullName

function displayFullName(fullName) {
  const nameArr = fullName.split(" ")
  console.log(`My name is ${nameArr[nameArr.length-1]}, ${fullName}`)
};

/* Weryfikacja */

// function verify(input, goal) {
//   if (input === goal) {
//     console.log('Gratulacje!');
//   } else {
//     console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
//   }
// }

// verify(displayFullName("James Bond"), "My name is Bond, James Bond");
// verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
// verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");