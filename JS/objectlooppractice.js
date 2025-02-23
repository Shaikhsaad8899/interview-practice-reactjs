const student = {
    name: "John",
    age: 21,
    course: "Computer Science"
};
for (let keys in student) {
    console.log(keys, student[keys])
}
let studentarray = Object.entries(student);
console.log(studentarray);

const salaries = {
    Alice: 5000,
    Bob: 7000,
    Charlie: 6000
};

let sum = 0;
for (let keys in salaries) {
    console.log(sum += salaries[keys]);
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 90 }
];


students.forEach((student) => {
    if (student.score > 80) {
        console.log(student.name)
    }
})

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency = {}
for (let count of fruits) {
    frequency[count] = (frequency[count] || 0) + 1
}
console.log(frequency);


const reportCard = {
    student: "John",
    grades: {
        Math: "A",
        Science: "B+",
        History: "A-"
    }
};


for (let keys in reportCard.grades) {
    console.log(`${keys}:${reportCard.grades[keys]}`)
}


const nestedObj = {
    user: {
        name: "Alice",
        details: {
            age: 30,
            address: {
                city: "New York",
                zip: 10001
            }
        }
    },
    active: true
};
function traverseObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            // console.log("Saad",key);
            traverseObject(obj[key]);
        } else {
            console.log("Saad1", `${key}: ${obj[key]}`);
        }
    }
}

traverseObject(nestedObj);



const string = "aaabbbbcceeaa";


const abc = string.split('');
console.log(abc);

let occurrencesstring = "";
// Count the occurrences of each character
let count = 1
for (let i = 0; i < abc.length; i++) {
    if (abc[i] === abc[i + 1]) {
        count++
    } else {
        occurrencesstring += abc[i] + count
        count = 1
    }
}

// Build the occurrences string

// console.log(occurrences);
console.log(occurrencesstring);




const str = "aabbcceez"
function manipulatestring(str) {
    const data = str.split('').reduce((acc, curr, index, array) => {
        if (curr === array[index + 1]) {
            acc.count++
        } else {
            acc.string += curr + acc.count;
            acc.count = 1;
        }
        return acc
    }, { count: 1, string: "" })
    return data
}
console.log(manipulatestring(str).string);

// function ManipulateStringUsingReduce(string) {
//     return string.split("").reduce(
//         (result, char, index, array) => {
//             if (char === array[index + 1]) {
//                 result.count++;
//             } else {
//                 result.output += char + result.count;
//                 result.count = 1;
//             }

//             return result;
//         },
//         { output: "", count: 1 }
//     ).output;
// }

