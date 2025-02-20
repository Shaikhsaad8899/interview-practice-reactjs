function Parent(name) {
    this.name = name
}

Parent.prototype.greet = function () {
    console.log(`hello mr ${this.name}`);
}


const child = new Parent("Saad Shaikh")

console.log(child.greet());

function Parent2(name, age) {
    Parent.call(this, name)
    this.age = age
}
Parent2.prototype = Object.create(Parent.prototype)
Parent2.prototype.information = function () {
    console.log(`Hello Mr.${this.name} your age is ${this.age} `);
    
}
// Parent2.prototype.constructor = Parent2
const child2 = new Parent2("Saad Shaikh",24)

console.log(child2.information());