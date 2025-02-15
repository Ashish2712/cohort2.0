// // write a program to print even elements in a array

// function evenNumbers(array){
//     even_ele = []
//     for(let i = 0; i<=array.length; i++){
//         if (array[i] %2 == 0){
//             even_ele.push(array[i]);
//         }
//     }
//     return even_ele;
// }

// array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const result = evenNumbers(array);
// console.log("even elements are ", result)

// // wap to print the biggest number in the array

// function biggestNumber(array){
//     max = array[0];
//     for(let i=0; i<=array.length; i++){
//         if(array[i] > max){
//             max =  array[i];
//         }
//     }
//     return max;
// }

// const result2 = biggestNumber(array);
// console.log("Biggest number in the array = ", result2);

// // wap to reverse all the elements of the array

// function reversTheElements(array){
//     reversed_arr = [];
//     for(let i=array.length-1; i>=0; i--){
//         reversed_arr.push(array[i]);
//     }
//     return reversed_arr
// }

// const result3 = reversTheElements(array);
// console.log("Reversed elements are ",result3)

// display result

function sum(num1, num2, callback) {
  result = num1 + num2;
  return callback(result);
}

function displayResult(data) {
  console.log("The result is " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is " + data);
}

const ans = sum(10, 20, displayResult);

function calculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b);
  return ans;
}

function sum() {
  console.log(10 + 20);
}

setTimeout(sum, 1 * 2000);

console.log(calculateArithmetic(1, 2, sum));


const counter = () => {
  const count = 0;
  for (let i = 30; i >= 0; i--) {
    console.log(i);
  }
};





