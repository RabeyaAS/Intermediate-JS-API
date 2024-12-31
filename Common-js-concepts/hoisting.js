print5();
print10();

for(var i = 0; i < 5; i++){
    // console.log(i);      //eta 4 porjonto cholbe then 5 toh match hoina condition e so eta then baire chole jay
}

// console.log('outside', i);     //so ekhane dekhabe 5 because of the hoisting.

// thats why we use let then it only runs within the block scope not outside. with let the outside console will give an error and thats how it should be.



// NOTE: Hoisting ---> kono ekta variable ke var diye declare korle ota hoisting korbe by taking only the left side of the var and 
// moving all the way to the top. And here we put a function in a var variable and the value is not taken because of hoisting, 
// so the var will give output as print10 is not a function.
function print5(){
    console.log('inside print5', 5);
}
var print10 = function(){
    console.log('inside print10', 10);
}
