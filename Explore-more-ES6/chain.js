// Data access chain --> its called chain because eta ektar por ekta dhore dhore jay like a chain.

const data = [{id: 1, name:'abul', address: 'kochu khet'}]

// console.log(data.address);   //this will show Undefined

// console.log(data);   //gives the whole the data value
// console.log(data[0]);   //index 0 gives the full object because it counts as one value of an array
console.log(data[0].address);  //to get the object's property, first get the index 0 which is an object and then get the specific property like the address.


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

//getting the second product price
console.log(products.data[1].price);   //so we got the .data of the object and then did index [1] since its an array then did .price


const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.second);


const user2 ={
    id: 5002,
    name:'Kola pata bajar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
// Optional Chaining (?) --> means if there is a a value for street then give otherwise end it
console.log(user2.address.street?.second);   //using the optional chain (?) doesn't give an error anymore it shows Undefined.
console.log(user.address.street?.second);   //using the (?) we got result because in this object has the property name and value thats why it shows.
console.log(user2.address?.city);
