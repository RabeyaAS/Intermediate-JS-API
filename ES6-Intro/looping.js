// for of --> used for arrays and strings
// for in --> used for objects


// looping an array
const numbers = [1, 6, 8, 4];

// can use for and while. Will be used sometimes.
// for(let i = 0; i < numbers.length; i ++){}
// while


// For of will be used a lot.
for(const num of numbers){
    // console.log(num);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    // console.log(char);
}



// looping an object
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
}

// Cannot for of loop an object
// for(const key of glass){
//     console.log(key);
// }

// Can loop an object using for in
for(const key in glass){
    console.log(key);      //Gives a loop of the property names
}


for(const key in glass){
    // const values = glass[key];   //Gives a loop of the values. We put the key in [] bracket notation because the key property names are not a property name, its in a variable.
    console.log(key, values);     //Gives a loop of the property names and values.
}

// optional
// Getting an object loop in a different way. By getting the objects keys first in an array form and then looping it using for of.
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const values = glass[key];
    console.log(key, values);
}

