// Optional video. Class came in ES6.

const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// has some properties, method
class Product{
    country = 'Bangladesh';
    // jekono class er property thakle constructor use korte hoi to add the properties.
    constructor(name){
        // this hocche ekta keyword, and .name is a property name, and the parameter name is being set in the right side = name
        this.name = name;
    }
    // this is a method
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

// must add new to call the class function. Class ke call kora means constructor re call kora. 
const lenovo = new Product('kola pata');     //this gets set in the constructor name.
// console.log(lenovo);
// lenovo.speak('ola ki bolo');


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid', 'English');
console.log(rashid);

