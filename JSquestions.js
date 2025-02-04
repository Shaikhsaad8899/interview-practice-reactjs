function abc(a, b) {
  return a + b;
}
// console.log("Sum of Numbers: ", abc(12, 22));

function maxNumber(arg) {
  let max = 0;
  for (let i = 0; i < arg.length; i++) {
    if (max < arg[i]) {
      max = arg[i];
    }
  }
  return max;
}
// console.log("Max Number: ",maxNumber([1, 3, 5, -1, 55, 45, 446, 5, 554, 454]));

function IdentifyPalindrome(string) {
  const string1 = string.split("").reverse().join("");
  if (string1 === string) {
    return "The given String is a Palindrome";
  } else {
    return "The given String is not a Palindrome";
  }
}

// console.log(IdentifyPalindrome("racecara"));
// console.log(IdentifyPalindrome("racecar"));

function reverseString(str) {
  const reverseWholeString = str.split("").reverse().join("");
  const WordsSplit = str.split(" ");
  const reverseWords = WordsSplit.map((item) =>
    item.split("").reverse().join("")
  );
  const reverseWords1 = reverseWords.join(" ");

  return { reverseWords1, reverseWholeString };
}
// console.log(reverseString("Saad Shaikh"));

function returnEvenNumbers(args) {
  const evenArray = args.filter((item) => {
    return item % 2 === 0;
  });

  return evenArray;
}
// console.log("Even Numbers: ",returnEvenNumbers([2,3,4,5]));

function ManipulateString(string) {
  let count = 1;
  let result = "";
  for (let i = 0; i < string.length; i++)
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      result += string[i] + count;
      count = 1;
    }

  return result;
}
function ManipulateStringUsingReduce(string) {
  return string.split("").reduce(
    (result, char, index, array) => {
      if (char === array[index + 1]) {
        result.count++;
      } else {
        result.output += char + result.count;
        result.count = 1;
      }

      return result;
    },
    { output: "", count: 1 }
  ).output;
}

console.log("ManipulateStringUsingFORLOOP: ", ManipulateString("aaabbbcca"));
console.log(
  "ManipulateStringUsingReduce: ",
  ManipulateStringUsingReduce("aaabbbcca")
);


let arr = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1];

// Find duplicate elements
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

// Remove duplicates from the duplicates array (optional, if you want unique duplicates)
let uniqueDuplicates = [...new Set(duplicates)];

// console.log(duplicates, uniqueDuplicates);

// let arr = [1, 2, 3, 4, 5];
let k = 2;

// Function to rotate the array
const rotateArray = (arr, k) => {
  // Calculate the effective rotations needed
  k = k % arr.length;

  // Split the array into two parts and concatenate them in reverse order
  return arr.slice(-k).concat(arr.slice(0, -k));
};

let rotatedArr = rotateArray(arr, k);
// console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

const newarr = arr2.filter((item) => arr1.includes(item))

console.log(newarr);

// Expected Output: [3, 4, 5]

let obj1 = { a: 10, b: 20, c: 30 };
let obj2 = { b: 40, c: 50, d: 60 };

// Function to merge objects and sum values of common keys
const mergeAndSum = (obj1, obj2) => {
  let result = { ...obj1 };

  for (let key in obj2) {
    if (result[key]) {
      result[key] += obj2[key];
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
};

let mergedObj = mergeAndSum(obj1, obj2);
console.log(mergedObj); // Output: { a: 10, b: 60, c: 80, d: 60 }


let obj = { name: "John", age: 30 };

// Convert object to array of key-value pairs
let keyValuePairs = Object.entries(obj);

console.log(keyValuePairs); // Output: [["name", "John"], ["age", 30]]

let obj23 = { a: 1, b: 2, c: 3, d: 4 };
let keys = ["a", "c"];

// Function to filter object by keys
const filterObjectByKeys = (obj23, keys) => {
  return keys.reduce((acc, key) => {
    if (obj23.hasOwnProperty(key)) {
      acc[key] = obj23[key];
    }
    return acc;
  }, {});
};

let filteredObj = filterObjectByKeys(obj23, keys);
console.log(filteredObj); // Output: { a: 1, c: 3 }


let obj12 = { apple: 30, banana: 25, mango: 35, orange: 20 };

// Function to find the key with the highest value
const findMaxValueKey = (obj12) => {
  return Object.keys(obj12).reduce((a, b) => (obj12[a] > obj12[b] ? a : b));
};

let maxKey = findMaxValueKey(obj12);
console.log(maxKey); // Output: "mango"

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

// Function to group objects by age
const groupByAge = (arr) => {
  return arr.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {});
};

let groupedPeople = groupByAge(people);
console.log(groupedPeople);
// Output:
// {
//   "25": [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
//   "30": [{ name: "Bob", age: 30 }]
// }
