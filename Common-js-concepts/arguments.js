// THIS IS ADVANCED.

function sum(a, b, c){
    // console.log(arguments);   //Argument is an array like object and it will give you the full arguments list.
    // arguments.push(45);      //you cannot push a number because its not a real array, its an array like object.
    const args = [...arguments];    //can convert it into an array, and you can even do a for loop if you want with it.
    // console.log(args);

    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);   //gives a length of parameters, basically the number of parameters that are declared in this function.


