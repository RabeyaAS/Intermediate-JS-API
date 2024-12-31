/**
 * ==    compares the same type of values. And if the values are different then they changed by casting and conversion
 *       and through coercion for comparison.
 * ===   compares both the values and the type of value.
 */

// this will show not equal because == and === can only compare primitive types and boolean, null and more.
// but for non-primitive types like array and object they cant do the same, you have to do like this:
// const first = {};
// const second = first;
//or,
// ekta object ba array ke loop kore niye then compare kora.

const first = {};
const second = {};

if(first == second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

// type coercion --> multiple stage of conversion. like a string number gets converted to number, and a boolean gets converted. 
// type conversion
// type casting --> it converts the value behind the scene and turns it same to compare if its equal
                // e.g. a boolean value is converted into a number behind the scene and compares if the numbers
                // are equal, so if true and number is 1, then true gets converted to a number 1 to give the output correct.
