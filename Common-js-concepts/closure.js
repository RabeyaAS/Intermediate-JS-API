/**
 * THIS IS ADVANCED.
 * Closure ---> is a function which is inside a function. When you call the function has to be used () followed by the
 * function name or the variable name that is saved. Also, if you create different variables for the same function and call it,
 * it will give you the output however each variable will hold a copy of its own, and won't know or have access to the other variables
 * of the same function. No matter how many times you call them each variable at different times it will keep a record of its last call
 * and give you the output of the next following number, e.g. if the last call was up to 3 then the next time you call it will give you 4.
 * and this applies the same for the other variables. 
 * 
 * NOTE: the whole function has a scope, and the inner function also have its own small scope and this scope can have access outside of its 
 * scope that is anything in the main function which is called outer scope. 
 */

function kitchen(){    //this is a scope
    let roast = 0;          
    return function(){    //this is another scope that is small, that has access to the outer scope
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());



function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

// non of the variables has access to each other, they may be calling the same function but they has their own copy
// which the other don't have access to and is not aware of either.
const watch1 = stopWatch();
console.log('watch 1:', watch1());
console.log('watch 1:', watch1());
console.log('watch 1:', watch1());


const watch2 = stopWatch();
console.log('watch 2:', watch2());
console.log('watch 2:', watch2());
console.log('watch 2:', watch2());
console.log('watch 2:', watch2());


const watch3 = stopWatch();
console.log('watch 3:', watch3());
console.log('watch 3:', watch3());

// continues from where it was last called
console.log('watch1:', watch1());
console.log('watch3:', watch3());
console.log('watch3:', watch3());
