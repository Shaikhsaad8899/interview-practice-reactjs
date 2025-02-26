// let newText = text.replace("JavaScript", "Python");

// console.log(newText);
// Output: "Python is fun, and JavaScript is powerful!"


// let text = "JavaScript is fun, and JavaScript is powerful!";
// let newText1 = text.replaceAll(/JavaScript/gi, "Python");

// console.log(newText1);
// Output: "Python is fun, and Python is powerful!"
let text = "JAVASCRIPT JavaScript is fun, and JavaScript is powerful!";

function replace(string, wordToFind) {
    const words = string.split(' '); // Split into words
    if (words.includes(wordToFind)) {
        const word = words.filter((item) => item.includes(wordToFind));
        return  words.indexOf(word)
    }
    return false;
}

console.log(replace(text, "is"));
// Output: ["is"]

console.log(replace(text, "JavaScript"));
// Output: ["JavaScript", "JavaScript"]
