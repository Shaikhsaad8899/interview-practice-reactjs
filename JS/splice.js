// Original array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 🔹 1. Adding Elements (Insert "25" at index 2)
arr.splice(2, 0, 25);
console.log("After Adding 25:", arr); // [10, 20, 25, 30, 40, 50]

// 🔹 2. Removing Elements (Remove 2 elements from index 3)
let removed = arr.splice(3, 2);
console.log("Removed Elements:", removed); // [30, 40]
console.log("After Removal:", arr); // [10, 20, 25, 50]

// 🔹 3. Modifying Elements (Replace index 1 with 99)
arr.splice(1, 1, 99);
console.log("After Modification:", arr); // [10, 99, 25, 50]


console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray("Hello"));    // false
console.log(Array.isArray({ key: 123 })); // false
console.log(Array.isArray(new Array(5))); // true
console.log(Array.isArray([]));  // true


// 🔹 Convert a String to an Array
console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']

// 🔹 Convert a Set to an Array
let mySet = new Set([10, 20, 30]);
console.log(Array.from(mySet)); // [10, 20, 30]

// 🔹 Convert an Array-like `arguments` object to an Array
function exampleFunction() {
    console.log(Array.from(arguments));
}
exampleFunction(1, 2, 3, 4); // [1, 2, 3, 4]

// 🔹 Use `mapFunction` to Transform Data
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]


async function demoAsync() {
    // 🔹 Convert an array of Promises to an array of values
    let result1 = await Array.fromAsync([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ]);
    console.log("From Promises:", result1); // [1, 2, 3]

    // 🔹 Apply an async function to transform data
    let result2 = await Array.fromAsync([1, 2, 3], async x => x * 2);
    console.log("Mapped Async:", result2); // [2, 4, 6]

    // 🔹 Convert an asynchronous generator into an array
    async function* asyncGenerator() {
        yield 10;
        yield 20;
        yield 30;
    }
    let result3 = await Array.fromAsync(asyncGenerator());
    console.log("From Async Generator:", result3); // [10, 20, 30]
}

demoAsync();
