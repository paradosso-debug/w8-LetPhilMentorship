// 07 – ARRAY METHODS
// ----------------------------------------------

// ==============================================
// TASK 1 – BASIC PUSH / POP / SHIFT / UNSHIFT
// ==============================================

// STEP 1: Create an array called fruits with at least 3 fruit names.

// STEP 2: Log the original fruits array.

// STEP 3: Use .push() to add a new fruit to the end.
//         Then log the array again.

// STEP 4: Use .unshift() to add a fruit to the beginning.
//         Then log the array again.

// STEP 5: Use .pop() to remove the last fruit.
//         Save the removed fruit in a variable and log it.

// STEP 6: Use .shift() to remove the first fruit.
//         Save the removed fruit in a variable and log it.

// STEP 7: Log the final state of the fruits array.

let fruits = ["Strawberry", "Orange", "Apple"];
console.log("Original Array", fruits);

fruits.push("Grape");
console.log("After Push", fruits);

fruits.unshift("Pineapple");
console.log("After unshift", fruits);

let removedFruit = fruits.pop();
console.log("After pop", removedFruit);

let removedSecondFruit = fruits.shift();
console.log(`After shift`, removedSecondFruit);

console.log("Final Array", fruits);

// Using array methods with objects.

// let person = {
//   name: "John",
//   tasks: ["Work", "eat", "gym"],
// };

// person.tasks.push("sleep");
// console.log(person.tasks);

// ==============================================
// TASK 2 – FOREACH: SAY HELLO TO EACH ITEM
// ==============================================

// STEP 8: Create an array called mentees with 3 names.

// STEP 9: Use .forEach() to log a message for each mentee, for example:
//         "Hello, (name)! Ready to code?"

let mentees = ["Alice", "Bob", "Charlie"];

mentees.forEach((mentee) => {
  console.log(`Hello, ${mentee}! Ready to code?`);
});

// ==============================================
// TASK 3 – MAP: TRANSFORM VALUES
// ==============================================

// STEP 10: Create an array called numbers with some numbers, for example:
//          [2, 4, 6, 8].

// STEP 11: Use .map() to create a new array called doubledNumbers
//          where each number is multiplied by 2.

// STEP 12: Log both arrays:
//          - original numbers
//          - doubledNumbers

// STEP 13: Use .map() again to create a new array called labeledNumbers
//          where each item is a string like "Value: X".

// STEP 14: Log labeledNumbers.
let numbers = [2, 4, 6, 8];
let doubleNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubleNumbers);

const labeledNumbers = numbers.map((number2) => `Value: ${number2}`);
console.log(labeledNumbers);

// ==============================================
// TASK 4 – FILTER: KEEP ONLY SOME VALUES
// ==============================================

// STEP 15: Create an array called mixedNumbers with numbers, for example:
//          [3, 10, 7, 20, 15, 2].

// STEP 16: Use .filter() to create a new array called bigNumbers
//          that only keeps numbers greater than or equal to 10.

// STEP 17: Log bigNumbers.

// STEP 18: Use .filter() again to create a new array called evenNumbers
//          that only keeps numbers that are even (number % 2 === 0).

// STEP 19: Log evenNumbers.

let mixedNumbers = [];
