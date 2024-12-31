const numbers = [12, 10, 8, 15, 7];

const double = numbers.map(num => num * 2);
// console.log(double);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const halves = numbers.map(n => n / 2);
// console.log(halves);


// ---------------------------------------------------------------


const friends = ['Tom', 'John', 'Michael', 'Oliver'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);

const firstLetter = friends.map(frnd => frnd[0]);     //gives the first letter of each name.
console.log(firstLetter);

