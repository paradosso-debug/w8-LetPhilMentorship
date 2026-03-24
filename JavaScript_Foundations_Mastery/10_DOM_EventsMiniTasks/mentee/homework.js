// 09 – DOM + EVENTS MINI TASKS
// ----------------------------------------------

// After writing your code, open index.html in the browser and
// interact with the page (click buttons, type in the input).
//
// ==============================================
// TASK 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - The main card (id "eventCard")
//         - The title (id "cardTitle")
//         - The description (id "cardDescription")
//         - The "Change Title" button (id "changeTitleBtn")
//         - The "Toggle Highlight" button (id "toggleHighlightBtn")
//         - The counter span (id "counterValue")
//         - The "+1" button (id "incrementBtn")
//         - The text input (id "previewInput")
//         - The preview span (id "previewText")
//
// STEP 2: (Optional) console.log some of these variables to make
//         sure you selected them correctly.

// ==============================================
// TASK 2 – CLICK EVENT: CHANGE TITLE TEXT
// ==============================================
//
// STEP 3: Add a "click" event listener to the "Change Title" button.
//         Inside the event listener function:
//         - Change the textContent of the title to something new,
//           for example "Wave 7 – Events in Action".
//         - (Optional) Also update the description to mention that
//           the title was changed by clicking the button.

// ==============================================
// TASK 3 – CLICK EVENT: TOGGLE HIGHLIGHT CLASS
// ==============================================
//
// STEP 4: Add a "click" event listener to the "Toggle Highlight" button.
//         Inside the event listener function:
//         - Use classList.toggle("event-card-highlight") on the main card.
//           This should add/remove the highlight effect each time you click.

// ==============================================
// TASK 4 – CLICK EVENT: COUNTER +1
// ==============================================
//
// STEP 5: Create a variable (for example, counterValue) and set it
//         equal to the starting value of the counter (0).
//
// STEP 6: Add a "click" event listener to the "+1" button.
//         Inside the event listener function:
//         - Increase the counter variable by 1.
//         - Update the textContent of the counter span in the page
//           so it always shows the current count.

// ==============================================
// TASK 5 – INPUT EVENT: LIVE PREVIEW
// ==============================================
//
// STEP 7: Add an "input" event listener to the text input.
//
// STEP 8: Inside the event listener function:
//         - Read the current value from the input (using .value).
//         - If the value is an empty string, set the preview text
//           to "Nothing typed yet.".
//         - Otherwise, set the preview text to exactly what the user typed.
