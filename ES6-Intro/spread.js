/**
 * Math.max --> gives you the highest number
 */

const max = Math.max(6, 23, 56, 76, 78, 89);
console.log(max);    //here they gave 89 as the highest number because we simply put it in the first bracket.

const numbers = [3, 5, 2, 45, 5, 43, 90, 66, 12];
// const arrayMax = Math.max(numbers);   //here the highest number is not giving because it is in an array and so it shows NaN.
const arrayMax = Math.max(...numbers);    //Use ... three dots before the variable name of the array, it allows to spread out the numbers from the brackets and gives you highest number.

console.log(arrayMax);



// Use Spread Operator to Copy --->

//this way doesn't work because it changes both the friends and bondhu values when i want to keep friends the and only push the new value to bondhu.
// const friends = [4, 5, 87, 9];  
// const bondhu = friends;
// bondhu.push(12);

// The right way to do --> use three dots ... before the variable name friends within the third brackets, that way it will make a copy of the whole array itself
//and wont be affected by the reference so even if there is any changes it wont affect the copy version. 
//The ... also allows to spread the values as without it will show as an array inside another array, so this way will show within one array by spreading out.
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends];    // copy

friends.push(12);


console.log(friends);
console.log(bondhu);
console.log(dosto);


// advanced
const sonkha = [...friends, 999]   // add extra elements while copying an array.
console.log(sonkha);

const aroSonkha = [1, 2, ...friends, 99, 80];   //can add extra elements at first and/or last while copying an array.
console.log(aroSonkha);





