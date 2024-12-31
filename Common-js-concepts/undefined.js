/**
 * 8 ways to get Undefined -->
 * 1. variable that is not initialised will give undefined
 * 2. function with no return
 * 3. parameter that is not passed with be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exist on an object will give undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an array inside an element. Note: don't do this, instead use splice to remove.
 * 8. set a value directly to undefined
 */

// 1.
let first;
// console.log(first);

//2.
function second(a, b){
    const total = a + b;
}

const result = second();
// console.log(result);


//3.
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}

// third(2, 3);


// 4.
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

const total = noNegative(2, -5);
// console.log(total);


//5.
const fifth = {id: 2, name: 'Mike', age: 55}
// console.log(fifth.age, fifth.salary);


// 6. and 7. 
const sixth = [4, 54, 6, 23, 78];
delete sixth[1];    //no. 7. you should not do this, because it shows empty item. Instead use splice to remove if you have to.
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);


// 8.
const eighth = undefined;

const ninth = null;    // use null if you have to show there is no value or the value is not available or undefined.

const data = {results: [], updated: null}

console.log(typeof undefined);    //shows undefined.

console.log(typeof null);    //shows object although its not, its a mistake by the programmers.


