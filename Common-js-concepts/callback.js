/**
 * THIS IS ADVANCED.
 * Calling back a function as a parameter. Basically, ekta function ke parameter hoye pathayle shetake execute korbe jotobar call kora hobe,
 * and shetakei bola hoi callback function.
 * 
 */

function greeting(greetingHandler, name){
    // console.log(person);
    greetingHandler(name);
}

// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'Lenovo', memory:'8GB'};
// greeting(laptop);


// ekta function ke parameter er moto use kore call kora hocche:
function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetingEvening(){
    console.log('Good Evening');
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Mike Thomson');
greeting(greetingHandler, 'Mike Locus');
greeting(greetingHandler, 'Mike Miller');

greeting(greetingEvening);
greeting(greetingEvening);

greeting(greetNight, 'Jack Miller');
greeting(greetNight, 'Jack Salman');
greeting(greetNight, 'Jack Potter');


// what we did so far is pretty much the same as we have been doing by using document... and then .addEventListener... 
// function submitHandler(){
//     console.log('submit button clicked')
// }
// document.getElementById('btn-submit').addEventListener('click', submitHandler)
