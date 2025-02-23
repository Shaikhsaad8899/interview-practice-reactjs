// const abc = {
//     name: "Saad Shaikh",
//     age: 25,
//     mail: "saadsk9288@gmail.com"
// }
// const abc2 = {
//     username: "abcd Shaikh",
// }
// console.log(abc);

// const newObject = Object.create(abc)
// newObject.name = "yasa"
// console.log(newObject.name);

// class createObject {
//     constructor(name, age, email) {
//         this.name = name
//         this.age = age
//         this.email = email
//     }
//     printObject() {
//         return console.log(`${this.name} ${this.age} ${this.email}`);

//     }
// }
// const CreateObject = new createObject("Saad Shaikh", 25, "saadsk9288@gmail.com")
// CreateObject.printObject()


// function creatingObject(name, age, email) {
//     this.name = name
//     this.age = age
//     this.email = email
// }

// creatingObject.prototype.greet = function () {
//     console.log(`${this.name} ${this.age} ${this.email}`);
// }

// const person = new creatingObject("Ahad Shaikh", 27, "ahadsk@gmail.com")
// person.greet()


// const AssignedObject = Object.assign(abc,abc2)
// console.log("AssignedObject", AssignedObject.username);


// class Person {
//     constructor(name, mail) {
//         this.name = name
//         this.mail = mail
//     }

//     greet() {
//         console.log(`${this.name} ${this.mail}`);

//     }
// }

// const person2 = new Person("Saad", "saadsk8856@gmail.com")
// person2.greet()


// const newMadeObject = new Object()
// newMadeObject.name = "Saad Shaikh 8856"
// console.log(newMadeObject.name);



const object1 = {
    name: "Saad Shaikh",
    address: { city: "Aurangabad" }
}

const object2 = Object.assign({}, object1)
const object3 = Object.create(object1)

object2.name = "ahad"
object2.address.city = "pune"

console.log("object1", object1);
console.log("object2", object2);
console.log("object3", object3);

function outerFunction() {
    let outerVar = "I am outside!";

    function innerFunction() {
        console.log(outerVar); // Inner function "remembers" outerVar
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am outside!
console.log(closureFunc.outerVar);
