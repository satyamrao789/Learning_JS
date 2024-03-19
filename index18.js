//The Person function always has a blank object inside it
//writing Person.prototype will show blank object
//now what if i define this greet inside Person only
//defined greet inside Person which is actually a fucntion


function Person(name, age) {
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    return person;
}
Person.prototype.greet = function(){
        console.log(`Hello ${this.name}, How are you?`)
    }

let user = Person("Priyam",18)
user.greet();
console.log(user);
// console.log(Person.prototype);