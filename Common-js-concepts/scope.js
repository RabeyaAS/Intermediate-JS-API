/**
 * scope ---> means wherever the second bracket starts and ends, everything that is inside of it is a part of the scope
 * and it is only available inside the scope block. Like the function is a scope and inside it can have many var, const, let, 
 * and it is accessable within the scope not outside. And inside can have more scopes that are small to big scope blocks like 
 * the if(){} has also a small scope.
 * 
 * Note: var does not follow the scope is goes out of the scope block and takes only the var part which is the left side
 * of the equal sign (not the value side), and takes it to the top of the function and declares it as the var current, this is called Hoisting. 
 */

function add(a, b){
    const total = a + b;
    // console.log(a, b);

    if(b > 5){
        const sum = 25 + a + b;
        
    }
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    // console.log(sum); //it wont work because it is outside the scope.
    console.log(current);
    return total;
}

add(5, 3);

// const result = add(5, 7);
// console.log(result);
