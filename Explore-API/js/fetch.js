/**
 * The fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
 * 
 */

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())         //.json is not similar but close to JSON.parse
       .then(json => console.log(json))          //NOTE: any name that is on the left side of => sign is a parameter name.
                                                // the right side is the return value of the function, its basically the arrow function.
*/

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))


function loadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

