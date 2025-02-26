// promise example with promise chaining
function getData2(dataId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(dataId);
            resolve(); // Resolve the promise after logging
        }, 1000);
    });
}

// Properly chaining the Promises
// getData2(1)
//     .then(() => getData2(2))
//     .then(() => getData2(3))
//     .then(() => console.log("All done!"))
//     .catch((err) => console.error("Error:", err));

//async await example

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("Promise Resolved", dataId); // Ensure the function is called inside `resolve`
            // if (getFunc) {
            //     getFunc()
            // }
        }, 1000);
    })
}

// (async function () {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// })()


function getDataCallback(dataId, callback) {
    setTimeout(() => {
        console.log(dataId);
        callback()
    }, 1000);
}

// 
getDataCallback((11), () => getDataCallback((12), () => getDataCallback((13), () => console.log("3 callbacks finished"))))