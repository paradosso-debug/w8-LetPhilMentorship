// CONDITIONALS HOMEWORK – ACCESS CHECKER
// -----------------------------------------------------
// GOAL: Use conditionals to decide if a user can access an event based
//       on age, ticket, and membership.

// STEP 1: Create a variable called userAge (number)
//         with the age of the user.

// STEP 2: Create a variable called hasTicket (boolean)
//         that is true if the user has a ticket, false otherwise.

// STEP 3: Create a variable called isMember (boolean)
//         that is true if the user has a membership, false otherwise.

// STEP 4: Use an if / else statement to check if userAge is
//         greater than or equal to 18.
//         - If true, console.log("Age check passed.")
//         - Else, console.log("Age check failed.")

// STEP 5: Use another conditional to check if the user has a ticket
//         OR is a member.
//         (hasTicket === true || isMember === true)
//         - If true, console.log("Entry permitted based on ticket or membership.")
//         - Else, console.log("No ticket or membership, entry denied.")

// STEP 6: Now combine both ideas:
//         Use an if / else statement that checks:
//         - userAge >= 18
//         - AND (hasTicket === true || isMember === true)
//         all together using && and ||.

// STEP 7: If both conditions are true, log:
//         "Access granted. Enjoy the event!"

// STEP 8: Otherwise, log:
//         "Access denied. Please check age and ticket/membership."

// STEP 9: Try changing the values of userAge, hasTicket, and isMember
//         to see how the messages change in the console.
