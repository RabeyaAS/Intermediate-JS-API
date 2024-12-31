// default --> if value is not provided then take this as a default value.
// Mostly if is a default number then the value is 0 in terms of plus and minus, and for multiplication is 1.

function add(num1 = 99, num2 = 0, num3){
    const result = num1 + num2 + num3;
    console.log(num1, num2, num3, result);
    return result; 
}

const sum = add(5, 7);   //The default value won't take because there is a value defined. 
// const sum = add(5);  //the second value will show as Undefined as i didn't defined the value and so the result will show as NaN. 
                       //The Default value (which num2=0) will show and be added as there was no value defined. However if there is a value defined then it won't take the default value.
// const sum = add();   //this will show both Undefined and the result will be NaN, because the values are not defined.


// Mostly the default for a string is an empty string.
function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}

// default array is an empty array
function friends(numbs = []){

}


// default object is an empty object
function person(human = {}){

}

// default boolean can be a false or true value.



