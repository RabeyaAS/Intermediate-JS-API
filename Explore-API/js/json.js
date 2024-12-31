/**
 * JSON ---> JavaScript Object Notation.
 * 
 * JSON is an open data interchange format that is both human and machine-readable.
 * 
 * JSON.stringify ---> it changes a value to a string. puts all in a double quotation like a string even if its a string value 
 * it still puts it in a double quotation marks, except number and boolean values.
 * It is to avoid any type of error like sometimes we may put or forgot to put a property name in a single quotation,
 * or it has numbers in the property name in that case to avoid any mistakes we use the JSON stringify as in 
 * changing the value to a JSON string. 
 * 
 * JSON.parse ---> changes a string value to an original value, like an object that was in a string format
 * will convert into the object value.
 */

const user = {id: 1, name: 'Gorib Amir', job: 'Actor'};

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

/** output -->
 * { id: 1, name: 'Gorib Amir', job: 'Actor' }  ---> this is JS
 * {"id":1,"name":"Gorib Amir","job":"Actor"}   ---> this is JSON stringify
 */



// this is normal JS.
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

console.log(shop);

const shopJSON = JSON.stringify(shop);      //changes the value to a string.
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);      //changes the string to a value.
console.log(shopObj);

