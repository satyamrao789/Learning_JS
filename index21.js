class User{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello ${this.name}, How are you`);
    }
}
let user1 = new User("Priyam")
user1.sayHello();
let user2 = new User("Motii")
user2.sayHello();
let user3 = new User("Moon")
user3.sayHello();

console.log(user1);
console.log(user2);
console.log(user3);
console.log(typeof User); // USer is a fake class, its actually a fucnction
console.log(User.prototype);