// capitalize words
const phrase = "my name is dima";
const words = phrase.split(" ");
const capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(capitalizedWords);

// Text truncate
function truncate(text, maxlength) {
  if (text.length > maxlength) {
    text = text.substring(0, maxlength - 3) + "...";
  }
  return text;
}

const inputText = "Lorem ipsum dolor sit amet, consectetur";
const maxLength = 14;
const truncatedText = truncate(inputText, maxLength);
console.log(truncatedText);

// Filter arr
function filterRange(arr, from, to) {
  return arr.filter((num) => num >= from && num <= to);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredArr = filterRange(arr, 3, 7);
console.log(filteredArr);

// Sort Arr
const arr1 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];

arr1.sort(function (a, b) {
  return a - b;
});

console.log(arr1);

// Sort arr str
const arr2 = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

arr2.sort((a, b) => a.length - b.length);

console.log(arr2);

// Calculate average age of users older then 17 and younger then 55
function averageAge(users) {
  const filteredUsers = users.filter((user) => user.age > 17 && user.age < 55);
  const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  const averageAge = sumOfAges / filteredUsers.length;
  return averageAge;
}

const arr3 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

console.log(averageAge(arr3));

// Sort arr by name
const arr4 = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

arr4.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(arr4);

// Find min and max
const arr5 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

arr5.sort((a, b) => a.age - b.age);

console.log(arr5);

// Save only unique values
const strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

const uniqueArr = [...new Set(strings)];

console.log(uniqueArr)
