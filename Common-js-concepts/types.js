// Note: Javascript is a dynamic type programming language.
/**
 * Primitive type --> is number, string, and boolean.
 * Non-Primitive type --> is array and object.
 */

// primitive
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


// non-primitive - it holds the reference
let p = {job: 'web developer'};
let q = p;
// q = {job: 'front end'};     //if you reassign the whole value then q will discard the old reference and take new one and p will keep the old reference.
q.job = 'back end';       //if you change the value partially like for an specific value then it changes both for p and q
                          //because it holds the reference.
console.log(p, q);



