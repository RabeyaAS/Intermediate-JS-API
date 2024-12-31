/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy except for 0
 * 3. any string except from an empty string
 * 4. '0', 'false'
 * 5. {} , []
 * 
 * 
 * Falsy:
 * 1. false
 * 2. 0
 * 3. empty string ''
 * 4. undefined
 * 5. null
 * 
 * 
 */

let x = [];
// console.log(x);

// let x = null;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = null;

if(!y){
    console.log('value is falsy')
}


// check truthy
const z = ' ';

if(!!z){
    console.log('value is truthy');
}


