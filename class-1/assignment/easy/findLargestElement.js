/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var max = numbers[0];

    for(let num of numbers){
        if (num > max){
            max = num;
        }
    }
    return max;
}

console.log(findLargestElement([121, 3, 7, 2, 9, 1]))

module.exports = findLargestElement;