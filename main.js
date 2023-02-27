//////////////////////////////////////////////////////
/* The challenge is to create an algorithm that takes in an array
of numbers and returns the "most profitable" possible return. This 
assumes several expectations: 
1. The "buy" day MUST come before the "sell" day.
2. They can't be the same day.
3. If only a "loss" is possible, we should return smallest "loss".

Ex: [17, 11, 60, 25, 150, 5, 31, 120]
// Desired output: [1, 4]

// Number at index 1 is: 11
// Number at index 4 is: 150
// Profit = 150 - 11 = 139 */
///////////////////////////////////////////////////////

//^^^^^^I say all this to clarify that we ARE NOT looking for the 
//^^^^^^lowest value index and the highest value index. We are 
//^^^^^^looking for the biggest possible positive diff between 
//^^^^^^two indexes from left to right


function maxProfitDays(array) {
  let bigDiff = 0;
  let bigDiffIndexes = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= i; j--) {
      if ((array[j] - array[i]) > bigDiff) {
        bigDiff = (array[j] - array[i]);
        bigDiffIndexes = [i, j];
      }      
    }
  }
  return bigDiffIndexes;
};

const array1 = [1, 2, 3, 4, 5, 6, 7]; //Expected [0, 6]
const array2 = [200, 75, 84, 899, -30, 30, 456]; // Expected [1, 3]
const array3 = [-32, -40, -75, -8, -10, -100, -1]; // Expected [5, 6]
const array4 = [100, 10, 0, 85, null, 98, 9]; // Expected [2, 5]

console.log(maxProfitDays(array1));
console.log(maxProfitDays(array2));
console.log(maxProfitDays(array3));
console.log(maxProfitDays(array4));