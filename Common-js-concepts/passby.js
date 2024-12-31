// THIS IS ADVANCED.
// Javascript e pass by value beshi use kora hoi.

// Primitive types are pass by value. Even if the value is changed in the inner scope it won't change the value
// in the outer scope. Because it keeps a copy of the original value as an independent value and passes the copy to the function. 

let num1 = 5; 
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

// console.log(num1);     //gives 5
// multiply(num1, num2);
// console.log(num1);     //gives 5 after the function call, not 27 because its a primitive type.
const total = multiply(num1, num2);
console.log(total);

// (Arrays and Objects are Non-primitive types)
// Non-Primitive types are pass by reference. If the value is changed in the inner scope then they will
// also change the value that is in the outside of scope, which is the original referenced value.
// Because when a non-primitive value is passed to a function, they are passed as a reference, not as a value. 
// They don't keep a copy of the reference, instead they share the reference thats why.

let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'Anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
}

console.log(student1);      //gives Jalil
makeMovie(student1, student2);
console.log(student1);     //gives Ononto after the function call, because an object is a non-primitive type.


