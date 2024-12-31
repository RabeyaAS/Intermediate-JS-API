// function declaration 

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b){
    return a + b;
}


// function expression     
// note: function without a name can be used and its called anonymous function cause it has no name.
const add2 = function(a, b){
    return a + b;
}

// arrow function
//note: If its used for a small coding then use this way. And for this you dont need to write return just write what you
//want to return it will give. But in some cases you may need to write return and in that case you put it in a second bracket like you would do normally in a function.
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 93);
const sum = add4(4, 5, 6, 7);

console.log(sum);

const mult = multiply(3, 12);
console.log(mult);




