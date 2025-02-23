// =======================
// 🟢 1. Prototypal Inheritance
// =======================

// Parent Object
const animalProto = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

// Child Object inheriting using Object.create()
const dogProto = Object.create(animalProto);
dogProto.name = "Rex";
dogProto.bark = function () {
    console.log(`${this.name} barks!`);
};

dogProto.speak(); // Output: Rex makes a noise.
dogProto.bark();  // Output: Rex barks!


// =======================
// 🟡 2. Class-Based Inheritance (ES6)
// =======================

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Inherit name from Animal
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

const classDog = new Dog("Buddy", "Beagle");
classDog.speak(); // Output: Buddy makes a noise.
classDog.bark();  // Output: Buddy barks!


// =======================
// 🟣 3. Functional Inheritance (Factory Functions)
// =======================

function eatables(name) {
    return {
        name,
        sayEatables() {
            console.log(name + " is a eatable")
        }
    }
}


function vegetables(name, vegetables) {
    const eatabless = eatables(name)
    return {
        ...eatabless,
        vegetables,
        sayVegetables() {
            console.log(vegetables + " is a vegetable")
        }
    }
}

const human = new vegetables("apple", "tomato")
human.sayEatables()
human.sayVegetables()

