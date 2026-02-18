// 02 – DATA TYPES

// ==============================================
// TASK 1 – CREATE ONE VARIABLE PER TYPE
// ==============================================

// STEP 1: Create a variable called userName as a string.
//         Example idea: "Jane"

// STEP 2: Create a variable called userAge as a number.
//         Example idea: 32

// STEP 3: Create a variable called isStudent as a boolean (true or false).

// STEP 4: Create a variable called favoriteColor as a string,
//         but DO NOT assign a value yet. (It will be undefined.)

// STEP 5: Create a variable called chosenPet and set it to null
//         (this means "no pet chosen yet" on purpose).

// STEP 6: Use console.log to print each variable and its type using typeof.
//         Example idea (you will write something similar):
//         console.log("userName:", userName, "type:", typeof userName);

const userName = "Edgar";

let userAge = 32;

const isStudent = true;

let favoriteColor;

let chosenPet = null;

console.log("userName:", userName, "type:", typeof userName);
console.log("userAge:", userAge, "type: ", typeof userAge);
console.log("Are you a student?", isStudent, "type: ", typeof isStudent);
console.log("favoriteColor:", favoriteColor, "type.", typeof favoriteColor);
console.log("chosenPet:", chosenPet, "type: ", typeof chosenPet);

// ==============================================
// TASK 2 – STRING VS NUMBER
// ==============================================

// STEP 7: Create a variable called textFive as a string with the value "5".

// STEP 8: Create a variable called numberFive as a number with the value 5.

// STEP 9: Use console.log to show what happens when you add them as strings:
//         textFive + textFive

// STEP 10: Use console.log to show what happens when you add numbers:
//          numberFive + numberFive

// STEP 11: Use console.log to show what happens with "5" - 2.
//          (This will show how JavaScript sometimes converts strings to numbers.)

// STEP 12: For each result, also log typeof to see the type of the final value.

let textFive = "5";

let numberFive = 5;

let textString = textFive + textFive;
console.log(textString);

let numberResult = numberFive + numberFive;
console.log(numberResult);

let stringPlusNum = "5" - 2;
console.log(stringPlusNum);

console.log("Type of textString", typeof textString);
console.log("Type of numberResult: ", typeof numberResult);
console.log("Type of stringPlusNum:", typeof stringPlusNum);

// ==============================================
// TASK 3 – BOOLEANS IN CONTEXT
// ==============================================

// STEP 13: Create a variable called hasCoffee with a boolean value
//          that represents if you have had coffee today (true or false).

// STEP 14: Create a variable called isOnline with a boolean value
//          that represents if you are currently online.

// STEP 15: Use console.log to print friendly messages using these values.
//          Example idea:
//          "Has coffee today? true"
//          "Is online right now? false"

// STEP 16: Create one more boolean called isTired
//          and log a message with it as well.

let hadCoffee = true;
console.log("Did you have coffee?", hadCoffee);

const isOnline = true;
console.log("Are you online right now?", isOnline);

let isTired = false;
console.log("Are you tired?", isTired);

// ==============================================
// TASK 4 – typeof QUIRKS
// ==============================================

// STEP 17: Create a variable called emptyString and set it to "" (empty string).

// STEP 18: Use console.log to show typeof emptyString.

// STEP 19: Use console.log to show typeof null.

// STEP 20: Use console.log to show typeof undefined.

let emptyString = "";

console.log("typeof emptyString:", typeof emptyString);

emptyString;
console.log("emptyString not empty:", typeof emptyString);

console.log("typeof null:", typeof null);

console.log("typeof undefined:", typeof undefined);
