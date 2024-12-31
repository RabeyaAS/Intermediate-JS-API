/**
 * forEach --> it works similar to the map, but the only difference is that map returns the operation
 * whereas forEach do not return the result. So i may do all kinds of calculations and it will do it 
 * but it just wont return it.
 */

const numbers = [1, 5 , 6, 4, 15];

const result = numbers.forEach(n => console.log(n));  // it shows that it does do the function operations but do not return it.

// const result = numbers.forEach(n => {
//     //can do all kinds of things here but dont return anything
// })

console.log(result);  //as you can see it shows Undefined, doesn't return the result.

