/**
 * 
 * Reference https://www.geeksforgeeks.org/selection-sort/
 * Time complexity: O(n^2) 
 */
const selectionSort = (arr) => {
  let temp = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

module.exports = selectionSort;
