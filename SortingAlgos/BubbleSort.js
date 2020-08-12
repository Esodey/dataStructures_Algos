function bubbleSort (array) {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(array[j], array[j + 1])
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

let array1 = [1,2,5,6,3,8,4]
console.log(bubbleSort(array1));