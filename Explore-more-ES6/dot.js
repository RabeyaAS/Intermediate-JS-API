const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'third',
    'add-dress': 'dhaka'
}
// different ways of getting an object property using dot notation, and bracket notation.
console.log(person.job);
console.log(person['job']);    //using the bracket notation and writing the property name in a string to access.
console.log(person['3']);
console.log(person["add-dress"]);
const prop = 'job';    //setting the property name in a variable then getting it using the bracket notation by the variable name.
console.log(person[prop]);


