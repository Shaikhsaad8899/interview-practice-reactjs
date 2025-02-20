// Encapsulation: Bundling data and methods together, and hiding internal details from the outside.
// Abstraction: Simplifying complex systems by exposing only the necessary parts.
// Inheritance: Allowing one object or class to inherit properties and behaviors from another.
// Polymorphism: Enabling objects to be treated as instances of a common interface, with each object responding in its own way.

// Parent class (Inheritance)
function Vehicle(type) {
    this.type = type; // Encapsulation (data is within the object)
  
    // Private property (Abstraction)
    let engineStatus = "off";
  
    // Public method to control the private property
    this.startEngine = function () {
      engineStatus = "on";
      console.log(`${this.type} engine started.`);
    };
  
    this.stopEngine = function () {
      engineStatus = "off";
      console.log(`${this.type} engine stopped.`);
    };
  }
  
  // Method on the prototype
  Vehicle.prototype.drive = function () {
    console.log(`The ${this.type} is driving.`);
  };
  
  // Child class (Inheritance)
  function Car(brand) {
    Vehicle.call(this, "Car"); // Inherit properties
    this.brand = brand;
  }
  
  // Inherit Vehicle's prototype
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  // Polymorphism: Overriding the drive method
  Car.prototype.drive = function () {
    console.log(`The ${this.brand} car is cruising.`);
  };
  
  // Usage
  const myCar = new Car("Toyota");
  
  myCar.startEngine(); // Abstraction + Encapsulation: "Car engine started."
  myCar.drive();       // Polymorphism: "The Toyota car is cruising."
  myCar.stopEngine();  // "Car engine stopped."
  