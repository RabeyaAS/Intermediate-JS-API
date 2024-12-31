const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single or one parameter
const getAge = (person) => person.age;    //Here we are getting a value from an object which is age and returning it to the function
const student = {name: 'ananta', age: 45}    //This is the Object

const age = getAge(student);    //Here we are calling the function where the value is the object's variable name.
console.log(age);    //outputting the function.


const getThird = numbers => numbers[2]   //Here we are getting an index 2 of an Array.
const third = getThird([5, 7, 34, 56, 87]);    //calling the function with an array as one value
console.log(third);     //outputting only the index 2 value from the array.


const doubleIt = num => num * 2;
const double = doubleIt(5);
console.log(double);


// no parameter
const getPI = () => Math.PI;
console.log(getPI());


// large arrow function
//note: if you need to write it in more than one line then use the second bracket to do so, and make sure to write return keyword.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}

const work = doMath(3, 4, 5);
console.log(work);


