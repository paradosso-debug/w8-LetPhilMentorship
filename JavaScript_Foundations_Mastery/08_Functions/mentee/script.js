// 08 – FUNCTIONS
// ----------------------------------------------
//
//  Goal:
// Functions are the "machines" of JavaScript.
// You put information IN (inputs), and you get results OUT (outputs).
//
// ==============================================
// TASK 1 – YOUR FIRST FUNCTION (DECLARATION)
// ==============================================
//
// A "function declaration" looks like:
// function name() { ... }
//
// STEP 1: Create a function declaration named sayHello.
//         Inside the function body:
//         console.log("Hello from a function!");
//
// STEP 2: Call (run) the function by writing:
//         sayHello();
//
// STEP 3: Add a label log BEFORE the call so you can see the order, like:
//         console.log("About to call sayHello...");
//
//
// STEP 4: Call (run) the function by writing:
//         sayHello();

function sayHello() {
  console.log("Hello from a function!");
}

console.log("About to call sayHello...");
sayHello();

// ==============================================
// TASK 2 – PARAMETERS (INPUTS) + ARGUMENTS (VALUES)
// ==============================================
//
//  Parameter = the placeholder variable in the function definition.
// Argument  = the real value you pass in when you call the function.
//
// STEP 4: Create a function named greetUser that has ONE parameter named userName.
//         Inside the function, console.log a message like:
//         "Hi, <userName>!"
//
// STEP 5: Call greetUser 3 times with different names as arguments.
//
// STEP 6: Add labels so you can clearly see which call is which.
//

function greetUser(userName) {
  console.log(`Hi, ${userName}`);
}

const names = ["Lena", "Eduardo", "Stephen"];

names.forEach((name) => {
  greetUser(name);
});

// ==============================================
// TASK 3 – RETURN VALUES (OUTPUTS)
// ==============================================
//
//  console.log shows something.
// return gives something BACK to the caller.
//
// STEP 7: Create a function named addTwoNumbers that has TWO parameters: a and b.
//         Inside the function, return the sum of a + b.
//
// STEP 8: Call addTwoNumbers and store the result in a variable named total.
//         Example call idea: addTwoNumbers(3, 7)
//
// STEP 9: console.log("total =", total);
//
// STEP 10: Try calling addTwoNumbers without storing it, like:
//          console.log(addTwoNumbers(10, 5));
//

function addTwoNumbers(a, b) {
  return a + b;
}

const total = addTwoNumbers(3, 7);

console.log("total =", total);

console.log(addTwoNumbers(10, 5));

// ==============================================
// TASK 4 – FUNCTION EXPRESSION (FUNCTION INSIDE A VARIABLE)
// ==============================================
//
// Function expression means: a function stored in a variable.
// Example shape:
// const name = function() { ... }
//
// STEP 11: Create a const variable named sayBye.
//          Assign it a function expression (no name needed).
//          Inside, console.log("Bye!");
//
// STEP 12: Call sayBye();
//
// STEP 13: IMPORTANT: Try calling sayBye BEFORE you define it.
//          Observe the error.
//          Then put the call back AFTER the definition.
//          (This is a preview of "hoisting" differences.)

let sayBye = function () {
  console.log("Bye!");
};

sayBye();

//
// ==============================================
// TASK 5 – ARROW FUNCTIONS (MODERN SYNTAX)
// ==============================================
//
//  Arrow function example:
// const fn = () => { ... }
//
// STEP 14: Create an arrow function named multiply.
//          It should take two parameters: x and y.
//          It should return x * y.
//
// STEP 15: Test multiply with console.log:
//          console.log("multiply 4 * 6 =", multiply(4, 6));
//
// STEP 16: Create another arrow function named makeFullName.
//          It takes two parameters: first and last.
//          It returns a string like: "first last"
//
// STEP 17: console.log(makeFullName("Riley", "Kim"));

const multiply = (x, y) => {
  return x * y;
};
console.log("multiply 4 * 6 =", multiply(4, 6));

const makeFullName = (first, last) => {
  return `${first} ${last}`;
};
console.log(makeFullName("Riley", "Kim"));

// ==============================================
// TASK 6 – CALLBACKS (FUNCTIONS PASSED INTO FUNCTIONS)
// ==============================================
//
//  A callback is a function you give to another function to run later.
//
// STEP 18: Create a function named runTwice that takes ONE parameter named callback.
//          Inside runTwice:
//          - call callback()
//          - call callback() again
//
// STEP 19: Call runTwice and pass in an anonymous function that logs:
//          "Running!"
//
// STEP 20: Call runTwice again but this time pass an arrow function that logs:
//          "Again!"
//
function runTwice(callback) {
  callback();
  callback();
}

runTwice(function () {
  console.log("running!");
});

runTwice(() => {
  console.log("Again!");
});
// ==============================================
// TASK 7 – MINI “REAL LIFE” EXAMPLE: FORMATTER
// ==============================================
//
//  A very common pattern:
// - You have data
// - You want to format it consistently
// - A function does that formatting
//
// STEP 21: Create a function named formatPrice that takes one parameter: priceNumber.
//          It should return a string like: "$10.00"
//          (Hint: use priceNumber.toFixed(2))
//
// STEP 22: Test it with console.log using 3 different numbers.

//

function formatPrice(priceNumber) {
  return `$${priceNumber.toFixed(2)}`;
}

console.log(formatPrice(10));
console.log(formatPrice(11.99));
console.log(formatPrice(12.999999999999999));

// ==============================================
// TASK 8 – QUICK PREVIEW: “FUNCTIONS POWER DOM”
// ==============================================
//
// We are NOT doing DOM yet.
// But you should understand this now:
//
// In DOM code you will see:
// button.addEventListener("click", () => { ... })
//
// That arrow function is a CALLBACK.
//
// STEP 23: Write a console.log message (just text) that explains in your own words:
//          "A callback is a function passed into another function."
//
