module.exports = removeDouble

function removeDouble(inputTable) {
  for(compElem of inputTable) {
       let duplicateIndexes = []
       for(const [index, element] of inputTable.entries()) {
           if(compElem === element) duplicateIndexes.push(index)
       }
       if(duplicateIndexes.length > 1) {
           for(let i = 0; i< duplicateIndexes.length -1; i++) {
               inputTable.splice(duplicateIndexes[i],1)
           }
       }
  }
  return inputTable
};

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), [ 'clock', 'butter', 'suit' ]);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [ -3, 23, 'hello' ]);
