//Class --> class diye je Object toiri kora hoi jemon ekhane hocche Person er ekta object ba instance bola hoi.
// and shekhane properties ase constructor re.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 25);  
console.log(kodom);
kodom.sleep();

const badam = new Person('Kacha badam', 21);
badam.sleep();


