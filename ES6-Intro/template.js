const first = 'Jaan';
const last = 'pakhi';
const greet = 'Potas potas';

const name = first + ' ' + last + ' ' + greet;   //You add an empty string with one space to make a space between the first and last name.
console.log(name);


const a = 10;
const b = 20;

const numbers = [45, 23, 76, 87];
const student = {name: 'jhon ochena', age: 6}

const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);  //this is correct but a long way to do 
const result2 = 'The sum of ' + numbers[0] + ' and ' + student.age + ' is ' + (a + b);   

console.log(result);
console.log(result2)


const math = `The sum of ${a} and ${b} is ${a + b}`;   //this is more accurate and easy to do using the `` backtick.
const math2 = `The sum of ${numbers[2]} and ${student.age} is ${numbers[2] + student.age}`;   

console.log(math);
console.log(math2)



// Using backward slash \n allows you to move it to the next line, but its a long way to do.
const email = 'Hi John \n' + 
'cena cena lage \n' +
'tumi mara mari korba naki';

console.log(email)


// This is much easier way to do using the `` backtick, it allows you to automatically move to the next line.
const challenge = `John cena
cena naki ochena 
mair dimu prochur`;

console.log(challenge)


