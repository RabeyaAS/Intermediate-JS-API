const numbers = [4, 5, 7, 1, 2, 66];

// previous is the added value and the current is the new number thats coming from the array one by one and getting added to the previous value.
// e.g: 0+4= 4, 4+5=9, 9+7=16, 16+1=17, 17+2=19, 19+66= 85.
const total = numbers.reduce((previous, current) => previous + current, 0);  //0 is an initial value, because ill be adding the
                                                                            //numbers one by one so it needs to start from 0.
console.log(total);


const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);


