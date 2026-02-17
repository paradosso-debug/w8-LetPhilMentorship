// 01 – VARIABLES
// ----------------------------------------------
// TASK 1 – BASIC VARIABLES
// ==============================================

// STEP 1: Create a variable called firstName using let.
//         Give it a string value with your first name.
//         Example idea: "John"

// STEP 2: Create a variable called age using let.
//         Give it a number value with your age.

// STEP 3: Create a variable called favoriteColor using let.
//         Give it a string value with your favorite color.

// STEP 4: Use console.log to print each variable on its own line.
//         Example: console.log(firstName);

// STEP 5: Use console.log to print ALL three values in one message.
//         Example idea: "My name is ___, I am ___ years old, and my favorite color is ___."

let firstName = "Joel";
let age = 29;
let favColor = "pink";

console.log(firstName);
console.log(age);
console.log(favColor);

console.log(
  `My name is ${firstName}, I am ${age} years old. My favourite color is ${favColor}`,
);

console.log(
  "My name is " +
    firstName +
    "," +
    " I am " +
    age +
    " years old. My favorite color is " +
    favColor +
    ".",
);

// ==============================================
// TASK 2 – REASSIGNMENT WITH let
// ==============================================

// STEP 6: Use let to create a variable named currentColor.
//         Set it equal to a color you like right now.

// STEP 7: Use console.log to print a message like:
//         "At first, my favorite color was ___."

// STEP 8: Reassign currentColor to a DIFFERENT color (a new string value).

// STEP 9: Use console.log to print a new message:
//         "Now, my favorite color is ___."

let currentColor = "pink";

console.log(`At first, my favorite color was ${currentColor}.`);
currentColor = "green";
console.log("Now, my favorite color is " + currentColor);

// let currentColor = "green";

// ==============================================
// TASK 3 – SENTENCE WITH TEMPLATE LITERALS
// ==============================================

// STEP 10: Create a variable called personName with your name (string).

// STEP 11: Create a variable called personAge with your age (number).

// STEP 12: Use a template literal (backticks `)
//          to create a message like:
//          "Hi, my name is ___ and I am ___ years old."
//          Store this in a variable called introduction.

// STEP 13: console.log() the introduction variable to see your message.

let personName = "Joel";
let personAge = 29;
let introduction = `Hi my name is ${personName} and I am ${personAge} years old.`;
console.log(introduction);

// ==============================================
// TASK 4 – let VS const
// ==============================================

// STEP 14: Create a variable using let called mood.
//          Set it to a string, like "happy".

// STEP 15: Log mood to the console.

// STEP 16: Change the value of mood to a different emotion,
//          like "excited", then log it again.

// STEP 17: Now create a variable using const called birthYear.
//          Give it a number value with your birth year.

// STEP 18: Try to change birthYear to a different value
//          in another line of code.
//          Hint: This should cause an error in the console.
//          (This shows that const cannot be reassigned.)

let mood = "happy";
console.log(mood);
mood = "excited";
console.log(mood);
let birthYear = 1995;
console.log(birthYear);
birthYear = 1998;
console.log(birthYear);

let score = 0;
