// String Manipulation Tasks
// 1. Reverse a String
let str1 = "hello";
let reversedStr = str1.split("").reverse().join("");
console.log(reversedStr); // Output: "olleh"

// 2. Check if a String is a Palindrome
let str2 = "racecar";
let isPalindrome = str2 === str2.split("").reverse().join("");
console.log(isPalindrome); // Output: true

// 3. Count the Number of Vowels in a String
let str3 = "hello world";
let vowelCount = str3.match(/[aeiou]/gi).length;
console.log(vowelCount); // Output: 3

// 4. Replace All Occurrences of a Substring
let str4 = "hello world";
let newStr = str4.replace(/o/g, "a");
console.log(newStr); // Output: "hella warld"

// 5. Convert a String to Title Case
let str5 = "hello world";
let titleCaseStr = str5.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCaseStr); // Output: "Hello World"

// 6. Find the Longest Word in a String
let str6 = "The quick brown fox jumps over the lazy dog";
let longestWord = str6.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
console.log(longestWord); // Output: "jumps"

// 7. Count the Number of Words in a String
let str7 = "The quick brown fox jumps over the lazy dog";
let wordCount = str7.split(" ").length;
console.log(wordCount); // Output: 9

// 8. Check if a String Contains a Substring
let str8 = "hello world";
let containsSubstring = str8.includes("world");
console.log(containsSubstring); // Output: true

// 9. Repeat a String Multiple Times
let str9 = "hello";
let repeatedStr = str9.repeat(3);
console.log(repeatedStr); // Output: "hellohellohello"

// 10. Remove Whitespace from a String
let str10 = "  hello world  ";
let trimmedStr = str10.trim();
console.log(trimmedStr); // Output: "hello world"

// Array Manipulation Tasks
// 1. Find the Maximum Value in an Array
let arr1 = [1, 2, 3, 4, 5];
let maxVal = Math.max(...arr1);
console.log(maxVal); // Output: 5

// 2. Find the Minimum Value in an Array
let arr2 = [1, 2, 3, 4, 5];
let minVal = Math.min(...arr2);
console.log(minVal); // Output: 1

// 3. Sum All Elements in an Array
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((a, b) => a + b, 0);
console.log(sum); // Output: 15

// 4. Remove Duplicates from an Array
let arr4 = [1, 2, 3, 4, 5, 5, 3, 6, 7, 8, 1];
let uniqueArr = [...new Set(arr4)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 5. Find the Intersection of Two Arrays
let arr5_1 = [1, 2, 3, 4, 5];
let arr5_2 = [3, 4, 5, 6, 7];
let intersection = arr5_1.filter(item => arr5_2.includes(item));
console.log(intersection); // Output: [3, 4, 5]

// 6. Flatten a Nested Array
let arr6 = [1, [2, [3, [4, 5]]]];
let flatArr = arr6.flat(Infinity);
console.log(flatArr); // Output: [1, 2, 3, 4, 5]

// 7. Sort an Array of Numbers
let arr7 = [5, 3, 8, 1, 2];
let sortedArr = arr7.sort((a, b) => a - b);
console.log(sortedArr); // Output: [1, 2, 3, 5, 8]

// 8. Find the Index of an Element in an Array
let arr8 = [1, 2, 3, 4, 5];
let index = arr8.indexOf(3);
console.log(index); // Output: 2

// 9. Remove an Element from an Array
let arr9 = [1, 2, 3, 4, 5];
let newArr = arr9.filter(item => item !== 3);
console.log(newArr); // Output: [1, 2, 4, 5]

// 10. Merge Two Arrays
let arr10_1 = [1, 2, 3];
let arr10_2 = [4, 5, 6];
let mergedArr = [...arr10_1, ...arr10_2];
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

// Object Manipulation Tasks
// 1. Merge Two Objects
let obj1_1 = { a: 1, b: 2 };
let obj1_2 = { b: 3, c: 4 };
let mergedObj = { ...obj1_1, ...obj1_2 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// 2. Clone an Object
let obj2 = { a: 1, b: 2 };
let clonedObj = { ...obj2 };
console.log(clonedObj); // Output: { a: 1, b: 2 }

// 3. Get the Keys of an Object
let obj3 = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj3);
console.log(keys); // Output: ["a", "b", "c"]

// 4. Get the Values of an Object
let obj4 = { a: 1, b: 2, c: 3 };
let values = Object.values(obj4);
console.log(values); // Output: [1, 2, 3]

// 5. Get the Entries of an Object
let obj5 = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj5);
console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]

// 6. Check if an Object has a Key
let obj6 = { a: 1, b: 2, c: 3 };
let hasKey = obj6.hasOwnProperty("b");
console.log(hasKey); // Output: true

// 7. Convert an Object to a JSON String
let obj7 = { a: 1, b: 2, c: 3 };
let jsonString = JSON.stringify(obj7);
console.log(jsonString); // Output: '{"a":1,"b":2,"c":3}'

// 8. Convert a JSON String to an Object
let jsonString2 = '{"a":1,"b":2,"c":3}';
let obj8 = JSON.parse(jsonString2);
console.log(obj8); // Output: { a: 1, b: 2, c: 3 }

// 9. Filter an Object by Keys
let obj9 = { a: 1, b: 2, c: 3, d: 4 };
let keysToFilter = ["a", "c"];
let filteredObj = keysToFilter.reduce((acc, key) => {
  if (obj9.hasOwnProperty(key)) {
    acc[key] = obj9[key];
  }
  return acc;
}, {});
console.log(filteredObj); // Output: { a: 1, c: 3 }

// 10. Find the Key with the Highest Value
let obj10 = { apple: 30, banana: 25, mango: 35, orange: 20 };
let maxKey = Object.keys(obj10).reduce((a, b) => (obj10[a] > obj10[b] ? a : b));
console.log(maxKey); // Output: "mango"




// INTERMEDIATE QUESTIONS
// String Manipulation Tasks
// 1. Reverse Words in a String
let str1 = "hello world";
let reversedWords = str1.split(" ").reverse().join(" ");
console.log(reversedWords); // Output: "world hello"

// 2. Check if Two Strings are Anagrams
let str2_1 = "listen";
let str2_2 = "silent";
let areAnagrams = str2_1.split("").sort().join("") === str2_2.split("").sort().join("");
console.log(areAnagrams); // Output: true

// 3. Find the First Non-Repeated Character in a String
let str3 = "swiss";
let firstNonRepeatedChar = str3.split("").find((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
console.log(firstNonRepeatedChar); // Output: "w"

// 4. Count the Number of Occurrences of Each Character in a String
let str4 = "hello world";
let charCount = str4.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(charCount); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// 5. Remove Duplicate Characters from a String
let str5 = "hello world";
let uniqueChars = [...new Set(str5)].join("");
console.log(uniqueChars); // Output: "helo wrd"

// 6. Find the Longest Palindromic Substring
let str6 = "babad";
let longestPalindrome = (s) => {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = s.slice(i, j + 1);
      if (substr === substr.split("").reverse().join("") && substr.length > res.length) {
        res = substr;
      }
    }
  }
  return res;
};
console.log(longestPalindrome(str6)); // Output: "bab" or "aba"

// 7. Convert a String to Camel Case
let str7 = "hello world";
let camelCaseStr = str7.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, "");
console.log(camelCaseStr); // Output: "helloWorld"

// 8. Check if a String is a Valid Email Address
let str8 = "test@example.com";
let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str8);
console.log(isValidEmail); // Output: true

// 9. Find the Most Frequent Character in a String
let str9 = "hello world";
let mostFrequentChar = Object.entries(str9.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {})).reduce((a, b) => a[1] > b[1] ? a : b)[0];
console.log(mostFrequentChar); // Output: "l"

// 10. Convert a String to Snake Case
let str10 = "hello world";
let snakeCaseStr = str10.toLowerCase().replace(/\s+/g, "_");
console.log(snakeCaseStr); // Output: "hello_world"

// Array Manipulation Tasks
// 1. Rotate an Array to the Left by k Positions
let arr1 = [1, 2, 3, 4, 5];
let k1 = 2;
let rotatedLeftArr = arr1.slice(k1).concat(arr1.slice(0, k1));
console.log(rotatedLeftArr); // Output: [3, 4, 5, 1, 2]

// 2. Find the Second Largest Element in an Array
let arr2 = [1, 2, 3, 4, 5];
let secondLargest = arr2.sort((a, b) => b - a)[1];
console.log(secondLargest); // Output: 4

// 3. Find the Union of Two Arrays
let arr3_1 = [1, 2, 3];
let arr3_2 = [3, 4, 5];
let union = [...new Set([...arr3_1, ...arr3_2])];
console.log(union); // Output: [1, 2, 3, 4, 5]