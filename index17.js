//Person fn bnaye with parameters name & age
//created ek user variable that calls Person, & passed Priyam,18
//created person object inside Person function
//created two keys name,age inside person object
//stored parameter wala name value inside name key of person object
//stored parameter wala age value inside age key of person object
//returned person

//created obj1 object, inside obj1 object greet function
//gave reference of obj1 object to person object inside Object.create
//inside greet used ${this.name} 
//did user.greet();
//it will go to Person fucntion taking Priyam,18
//it will store Priyam & age inside keys of person i.e inside name,age
//it will search for greet(), not found
//it will search in reference 
//found here ${this.name} i.e here ${person.name}
//output = Hello Priyam, How are you?



function Person(name, age) {
    let person = Object.create(obj1);
    person.name = name;
    person.age = age;
    return person;
}
var obj1 = {
    greet(){
        console.log(`Hello ${this.name}, How are you?`)
    }
}
let user = Person("Priyam",18)
user.greet();
console.log(user);