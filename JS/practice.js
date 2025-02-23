// class Animal{
//     constructor(name,type){
//         this.name = name
//         this.type = type
//     }

//     infoAnimal(){
//         console.log(`${this.name} is a ${this.type}`)
//     }
// }

// const animal = new Animal("Lion","Carnivores")
// animal.infoAnimal()

// class Shelter extends Animal{
//     constructor(name,type,shelter){
//         super(name,type)
//         this.shelter = shelter
//     }

//     location(){
//         super.infoAnimal()
//     console.log(`${this.name} lives in a ${this.shelter}`)
//     }
// }

// const animalshelter = new Shelter("Lion","Carnivores","Den")
// animalshelter.location()
// //completed 


// function Animals(name,type){
//     this.name = name
//  this.type = type
//  this.infoAnimals = function(){
//      console.log(`${this.name} is a ${this.type} animals`)
//  }
// }
// function Fish(name,type){
//     Animals.call(this,name,type)
// }
//  Fish.prototype  = Object.create(Animals.prototype)
//    const fish = new Fish("nemo","fish")
// fish.infoAnimals()



// // dog is from this labrodar breed and eats biscuits
// // dog is from this labrodar breed


// class Student {
//     constructor(name, classname) {
//         this.name = name
//         this.classname = classname

//     }

//     greet() {
//         console.log(`${this.name} is from this ${this.classname}class`);
//     }

// }


// class School extends Student {
//     constructor(name, classname, school) {
//         super(name, classname)
//         this.school = school
//         this.childinfo = function () {
//             console.log(`${this.name} is from this ${this.classname}class which is ${school} school`);
//         }
//     }
//     child() {
//         super.greet()
//         this.childinfo()
//     }

// }
// const Studentinfo = new School("Saad", "X", "Little Flower School")
// // console.log(Studentinfo);
// Studentinfo.child()



// function Student(name) {
//     this.name = name;
//     console.log(`${this.name} is my name.`);
// }

// Student.prototype.info = function () {
//     console.log(`${this.name} is my name.`);
// }

// const studentInstance = new Student("Saad");
// studentInstance.info();

// function Teacher(name, teacher) {
//     Student.call(this, name)
//     this.teacher = teacher
// }
// Teacher.prototype = Object.create(Student.prototype)
// Teacher.prototype.teacherinfo = function () {
//     console.log(`${this.name} is my name and ${this.teacher} is my teacher`);
// }
// const teachern = new Teacher("Saad", "KK")

// teachern.teacherinfo()

// const teacher = Object.create(Student.prototype)
// teacher.info("Saad")    





class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`${this.name} is my name and ${this.age} is my age`)
    }
    work() {
        console.log(`${this.name} is my name and ${this.age} is my age`)
    }
}

class Employee extends Person {
    constructor(name, age, job, salary) {
        super(name, age)
        this.salary = salary
        this.job = job
    }
    greet() {
        console.log(`${this.name} is my name and ${this.age} is my age and My ${this.salary} is my salary`)
    }
    work() {
        console.log(`${this.name} is my name and ${this.age} is my age, I work as a ${this.job} and My ${this.salary} is my salary`)
    }
}
class Company extends Employee {
    constructor(name, age, job, salary, company) {
        super(name, age, job, salary)
        this.company = company
    }
    greet() {
        console.log(`${this.name} is my name and ${this.age} is my age and My ${this.salary} is my salary`)
    }
    work() {
        console.log(`${this.name} is my name and ${this.age} is my age, I work as a ${this.job} and My ${this.salary} is my salary and I work in ${this.company}`)
    }
}
// const employee = new Employee("Saad", 25, "SE", 30000)
// const companyname = new Company("Saad", 25, "SE", 30000, "Impetus")
// employee.greet()
// employee.work()
// companyname.work()



class Shape {
    constructor(name) {
        this.name = name
    }
    shape() {
        console.log(`This is a ${this.name}`);

    }
}

class Rectangle extends Shape {
    constructor(name, side1, side2) {
        super(name)
        this.side1 = side1
        this.side2 = side2
    }
    calculateArea() {
        super.shape()
        return this.side1 * this.side2
    }
}

const rectangle = new Rectangle("Rectangle", 12, 14)
console.log(rectangle.calculateArea());

class Circle extends Shape {
    constructor(name, side1, side2) {
        super(name)
        this.side1 = side1
        // this.side2 = side2
    }

    calculateArea() {
        super.shape()
        return 3.14 * (this.side1 * this.side1)
    }
}

const circle = new Circle("Circle", 10)
console.log(circle.calculateArea());


const canFly = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}
const canSwim = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

class Animal {
    constructor(name) {
        this.name = name
    }
}
Object.assign(Animal.prototype, canFly, canSwim)
const animal = new Animal("Eagle")
animal.fly()
animal.swim()


