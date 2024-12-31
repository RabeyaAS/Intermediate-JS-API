const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01717653844',
    money: 124454533564
}
// Object Destructuring - it helps to breakdown and do these steps in a more easier way.
// Note: if right side is an object then the left side will be destructuring as well. And use the property name as a variable within the brackets.
const {phone} = actor;

// const {name, age} = actor;      //can use more then one property

const {name, age: boyos} = actor;    //replaces the property name age to boyos and when you console it age it wont will show error because the property name has changed to boyos so now you have to call it with boyos.
                                    //this way of replacing the property name to another name is called Alias.

//This is not destructure. By saving it in a variable we can easily call it over and over as many times as needed straightaway, instead of doing it step by step every time.
// const phone = actor.phone; 
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);
console.log(name);
console.log(boyos);    //consoling with the new property name as the previous one age wont work because its changed.
// console.log(age);


// Array destructuring
const numbers = [45, 99];
const [first, second] = numbers;   //the variable first value is 45 from the numbers variable, and the second is 99.

console.log(first, second);


const [x, y] = [12, 66];   //x variable value is 12, and y variable value is 66. For array they count the index number. 
console.log(x, y);



// Advanced
function doubleThem(a, b){
    return [a*2, b*2]    //this will return an array and the value for a will be doubled as well as for value b.
}

// since the return is an array, so the left side will be destructuring an array and with 2 variable names because there are 2 parameters.
const [prothom, ditiyo] = doubleThem(6, 9);   //the value for a and b on the right side.
console.log(prothom, ditiyo);
