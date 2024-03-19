//used new keyword to create blank Person object
//defined greet key which is actually a function
//gave that blank object with keys name and age
//stored values inside it
//exceution is same as previous
//now this Person becomes constrcutor of Person object

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(`Hello ${this.name}, How are you?`);
}

let user = new Person("Priyam",18);
user.greet();
console.log(user);
console.log(Person.prototype);
