// // 1. Object Literal
// const objLiteral = {
//     name: "Alice",
//     age: 30
//   };
//   console.log("Object Literal:", objLiteral);

//   // 2. Using the Object Constructor
//   const objConstructor = new Object();
//   objConstructor.name = "Bob";
//   objConstructor.age = 25;
//   console.log("Object Constructor:", objConstructor);

//   // 3. Factory Function
//   function createPerson(name, age) {
//     return {
//       name,
//       age,
//       greet() {
//         console.log(`Hello, my name is ${name}`);
//       }
//     };
//   }
//   const personFactory = createPerson("Charlie", 28);
//   console.log("Factory Function:", personFactory);
//   personFactory.greet();

//   // 4. Constructor Function
//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Person.prototype.greet = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
//   const personConstructor = new Person("Dana", 32);
//   console.log("Constructor Function:", personConstructor);
//   personConstructor.greet();

//   // 5. ES6 Class
//   class PersonClass {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     greet() {
//       console.log(`Hey, I'm ${this.name}`);
//     }
//   }
//   const personClassInstance = new PersonClass("Eve", 29);
//   console.log("ES6 Class:", personClassInstance);
//   personClassInstance.greet();

//   // 6. Object.create()
//   const proto = {
//     describe() {
//       console.log(`This is ${this.name}`);
//     }
//   };
//   const objCreate = Object.create(proto);
//   objCreate.name = "Frank";
//   objCreate.age = 40;
//   console.log("Object.create():", objCreate);
//   objCreate.describe();