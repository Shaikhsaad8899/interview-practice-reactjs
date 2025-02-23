class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(this.name + " eats leaves and vegetables");
    }
}

class Carnivores extends Animal {
    constructor(name) {
        super(name)
    }
    eat() {
        super.eat()
        console.log(this.name + " eats meat and flesh");
    }
}
const parrot = new Animal("Parrot")
const lion = new Carnivores("lion")
parrot.eat()
lion.eat()