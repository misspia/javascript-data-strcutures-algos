/**
 * 
 * https://www.geeksforgeeks.org/bubble-sort/
 * Time complexity: O(n^2)
 *  
 */
const bubbleSort = (arr) => {
  let temp = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++) {
      if(arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
