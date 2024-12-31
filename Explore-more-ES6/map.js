/**
 * Map --> loops through each element of the array and do the operation that you passed in
 * the call back function and hold the result from each operation in an array and finally 
 * returns you the result in an array.
 */

const numbers = [4, 5, 2, 8, 12];

// 4. getting the double of each numbers using map only where the inside is the function:
const result2 = numbers.map(x => x * 2);

console.log(result2);


// -----------------------------------------------------------------


// 3. getting the double of each numbers using array function:
const double2 = n => n * 2;

const output = numbers.map(double2);
// console.log(output);


// -----------------------------------------------------------------


// 2. getting the double of each number by using a function:
function doubleIt(num){
    // console.log('the loop of numbers array', num);
    return num * 2;
}

const result = numbers.map(doubleIt);
// console.log(result);

// -----------------------------------------------------------------


// 1. Getting double of each number in the array in a simple way:
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);


// -----------------------------------------------------------------