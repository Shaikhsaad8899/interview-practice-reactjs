// console.log("Start");

// new Promise((resolve, reject) => {
//     console.log("Inside Promise");
//     resolve("Resolved!");
// }).then((data) => {
//     console.log(data);
// });

// console.log("End");



// console.log("Start"); //1

// setTimeout(() => console.log("Timeout"), 0); //5

// new Promise((resolve, reject) => {
//     console.log("Inside Promise"); //2
//     resolve("Resolved!");
// }).then((data) => {
//     console.log(data); //4
// });

// console.log("End"); //3


// console.log("Start"); //1

// new Promise((resolve, reject) => {
//     console.log("Inside Promise"); //2
//     reject("Error occurred!");
// }).then(() => {
//     console.log("Success");
// }).catch((err) => {
//     console.log("Caught:", err); //4
// });

// console.log("End"); //3



// console.log("Start"); //1 

// new Promise((resolve) => {
//     console.log("Inside Promise"); //2
//     resolve("Resolved!");
// })
// .then((data) => {
//     console.log("First then:", data); //4
//     return "Data from First then";
// })
// .then((data) => {
//     console.log("Second then:", data); //5
// });

// console.log("End"); //3


// console.log("Start"); //1

// new Promise((resolve, reject) => {
//     // console.log("Inside Promise"); //2
//     reject("Error occurred!");
// })
// .catch((err) => {
//     console.log("Caught first:", err); //4
//     throw "New error!";
// })
// .catch((err) => {
//     console.log("Caught second:", err); //5
// });

// console.log("End"); //3


// console.log("Start");

// new Promise((resolve, reject) => {
//     reject("Error!");
// })
// .catch((err) => {
//     console.log("Caught:", err);
// })
// .finally(() => {
//     console.log("Finally Block Executed");
// });

// console.log("End");


// console.log("Start");

// new Promise((resolve, reject) => {
//     resolve("Uncaught Error!");
// });

// console.log("End");


var p = new Promise((resolve, reject) => {
    reject(Error("The Fails!"))
})
p.catch((error) => console.log(error.message))
p.catch((error) => console.log(error.message))

var pp = new Promise((resolve, reject) => {
    return Promise.reject(Error("The Fails!"))
})
pp.catch((error) => console.log(error.message))
pp.catch((error) => console.log(error.message))

var ppp = new Promise((resolve, reject) => {
    reject(Error("The Fails!"))
})
    .catch((error) => console.log(error.message))
    .then((error) => console.log(error.message))

new Promise((resolve, reject) => {
    resolve("The Fails!")
})
    .then(() => { throw Error("OOps") })
    .catch((error) => { return console.log("that worked") })
    .then((error) => console.log(error))