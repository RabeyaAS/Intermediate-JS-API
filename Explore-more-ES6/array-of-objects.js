const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// map
const names = products.map(p => p.name);   //gives all the products names in an array.
console.log(names);

const price = products.map(p => p.price);   //gives all the products prices in an array.
console.log(price);


// forEach
products.forEach(p => console.log(p.id));    //gives a loop of the ids


// filter
const expensive = products.filter(p => p.price > 50000);    //gives only the objects that are more than that price.
console.log(expensive);


// find
const affordable = products.find(p => p.price < 50000);    //gives 45000 karon etai age paise based on the length order. er kom thakleo dibena.
console.log(affordable);


//reduce
const total = products.reduce((accum, current) => accum + current.price, 0);
console.log(total);

