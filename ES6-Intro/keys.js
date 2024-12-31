// NOTE: the propertries are also known as Keys. and the left side are the values.
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    city: {
        place: 'Dhaka',
    },
    isClean: true
}

console.log(glass);

// gives an array with only the object properties names
const keys = Object.keys(glass);     
// console.log(keys);    
// Output - [ 'name', 'color', 'price', 'isClean' ]


// gives an array with only the object values
const values = Object.values(glass);
// console.log(values);    
// Output - [ 'glass', 'golden', 12, true ]


// its called an array of an array, or two dimensional array.
const entries = Object.entries(glass);
// console.log(entries);
// Output - 
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isClean', true ]
// ]


// it allows to delete a property and its values
// delete glass.isClean;
// console.log(glass);


// This is called removing a property using rest syntax. Its allows to show all the other properties and values except the isClean one. The ...anyName gives the things of the rest of the Object.
// Here delete korar name notun ekta object toiri korlam, shekhane tumi Spread Operator diye korte paro.
// const {isClean, ...rest} = glass;
// console.log(rest);


// Freeze - allows to freeze the object and no matter what you add or delete it won't apply the changes because its frozen. But the properties of child Objects can be modified, like object er bhetore arekta object thakle shetar child properties ke change kora jabe.  
// Object.freeze(glass);
Object.seal(glass);    // Seal - modifies the object a bit, so it won't add the new property or remove the name, but it will modify an existing property like the price value can be changed.
glass.source = 'Bangladesh';
glass.price = 5000;
glass.city.place = 'Noakhali';
delete glass.name;
console.log(glass);


