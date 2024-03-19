class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello ${this.name}, How are you?`);
    }
}

let user = new Person("Priyam",18)
console.log(user);
user.greet();