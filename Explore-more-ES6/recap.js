/**
 * 1. var let const --> let and const are block scoped, var is not a block scoped. Let can be reassigned and Const cannot be reassigned.
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of --> used in arrays and strings
 * 8. for in --> used in objects
 */


// using template string
const x = 56;
const numbers = [23, 6, 7];
const person = {
    name: 'Mike Jonnas'
}

const message = `Hi, ${person.name} has a: ${x} and access to ${numbers[2]}`

console.log(message);

// simple way getting a square
// const square = a => a * a;
// const result = square(4);

// console.log(result);


// getting a square using the Math.pow
const square = a => Math.pow(a, 2);    // parameter a is the value in the argument and 2 is the number of power.
const result = square(9);

console.log(result);


// parameters more than one:
const sum = (a, b) => a + b;
const add = sum(3, 5);

console.log(add);


// destructuring and spread operator 
const {age, z, ...others} = {x: 2, y: 5, z: 9, name: 'Obhijeet', age: 34}
console.log(age, z, others)


const [first, second, ...remaining] = ['ram', 'sam', 'tonu', 'monu'];
console.log(first, second, remaining)

