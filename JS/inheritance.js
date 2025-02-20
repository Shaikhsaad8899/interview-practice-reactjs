class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info = function () {
        console.log(`Hi I'm ${this.name} and my age is ${this.age}`)
    }
};
class Human extends Person {
    constructor(name, age,species) {
        super(name, age)
        this.species = species
    }

    Species = function () {
        console.log(`I belong to ${this.species} and my name is ${this.name}`);

    }
}
const User1 = new Person("saad", "24");
const User2 = new Human("saad", "24", "Homo Sapiens");
Person.prototype.greet = function () {
    console.log(`Now in a prototype function I'm ${this.name}`)
}
User1.info()
User1.greet()
User2.Species()