function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))   //thats one way to do it.

        //Another way to call this function is by using another function, we don't do console here we do this:
        .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data)
}