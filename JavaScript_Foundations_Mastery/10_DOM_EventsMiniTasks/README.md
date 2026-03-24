# 09 -- DOM + Events Mini Tasks (Clicks, Inputs, Live Updates)

In Unit 08 you learned how to **select elements** and change the DOM
manually.

Now we level up 🚀

Instead of changing the page only when _we_ run code in the console, the
page will update automatically when the **user interacts**.

This unit focuses on:

- Listening for user actions (clicks, typing)
- Updating the DOM in real time
- Combining DOM skills:
  - selectors
  - textContent
  - style / classes
  - event listeners

No localStorage yet.\
No APIs yet.\
Just **DOM + events**.

---

## 1. What is an Event?

An **event** is something that happens on the page:

- A button is clicked
- A key is pressed
- The mouse moves
- An input changes

We can "listen" for events and run code in response.

Real-life analogy:

> Someone rings a doorbell (event) → you hear it and open the door (your
> code).

---

## 2. Why Events Matter

You will use events when:

- Submitting forms
- Updating dashboards
- Filtering search results
- Controlling TuneShelf UI
- Reacting to clicks, typing, and selections

Events are how users "talk" to your app.

---

## 3. The Event Listener Pattern

Basic syntax:

```js
element.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

Pieces:

- `element` → what we are listening on
- `"click"` → the type of event
- `function () { ... }` → code that runs when the event happens

Modern note:

We use `addEventListener` because it is the modern standard and can
support multiple listeners on the same element.

---

### Input example

```js
input.addEventListener("input", function () {
  const currentValue = input.value;
  // use currentValue to update the page
});
```

---

## 4. Understanding the Symbols

    .addEventListener() → listens for a user action
    "click" → click event
    "input" → typing event
    .value → current text inside an input
    .classList.toggle() → add/remove a class automatically
    textContent → updates visible text on the page

---

## 5. Practice Tasks Overview

All practice happens on a pre-built HTML card with:

- A title
- A description
- A "Change Title" button
- A "Toggle Highlight" button
- A counter display + "+1" button
- A text input + live preview area

You will wire up events so that:

1.  Clicking **Change Title** updates the title text.
2.  Clicking **Toggle Highlight** adds/removes a highlight class.
3.  Clicking **+1** increases a counter and updates the number shown.
4.  Typing in the input updates a preview text in real time.

---

## 6. Mini Homework -- Live Profile Card

Goal: Build a profile card that updates live without reloading the page.

Requirements:

1.  Have inputs for:
    - name
    - favorite color
    - mood `<select>` (happy / focused / tired)
2.  Add event listeners so that:
    - Typing in name updates a heading
    - Typing favorite color updates a preview line or color display
    - Changing mood updates text: "Current mood: ..."
3.  Add a Reset button that:
    - Clears inputs
    - Resets displayed values to defaults

All updates happen instantly on the page using DOM + events.
