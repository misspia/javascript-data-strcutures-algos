const { Sort, Search } = require('./src/algorithms');
const { Stack } = require('./src/dataStructures');
const utils = require('./src/utils');

const array = [8, 2, 3, 4, 9, 6, 7, 1, 5];
const selectionSortedArray = Sort.selectionSort(utils.clone(array));
console.log('- Selection Sort -')
console.log('input: ', array);
console.log('result: ', selectionSortedArray)



