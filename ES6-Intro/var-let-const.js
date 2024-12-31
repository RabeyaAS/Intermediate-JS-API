/**
 * const - the value cannot be changed but can be used 
 * 
 * let - the value can be changed and used
 */


const money = 20;
// money = 50;  //shows error because const cannot be assigned new value
const rich = money + 40;  //works because we are using the value not assigning it!
console.log(rich);

let count = 3;
// count = 10;  //works because we used let to assign the new value.
count = count + 20;   //works as well.
console.log(count);
