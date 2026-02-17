# 02 -- Data Types

Data types tell JavaScript **what kind of information** we are working
with.

In real life, we handle different kinds of data:

- A name → text
- An age → number
- A yes/no answer → true/false
- Something empty on purpose → null
- Something not filled in yet → undefined

JavaScript needs to know the type so it can treat the value correctly.

---

## 1. What is a Primitive?

A **primitive** is a single simple value.

Examples:

    "Hello"
    42
    true
    null
    undefined

Primitives are NOT collections.\
Arrays and objects come later in their own lessons.

---

## 2. Main Data Types in this Lesson

Type Example Description

---

`string` `"John"` Text inside quotes
`number` `32`, `3.14` Any numeric value
`boolean` `true`, `false` Yes/No values
`undefined` `undefined` Exists but has no value yet
`null` `null` Intentionally empty

---

## 3. Understanding the Symbols

    "" or '' → strings (text)
    true/false → booleans
    null → intentionally empty
    undefined → not assigned yet

Example:

```js
let name = "Ana";
let didWorkout = true;
let eveningPlan = null;
```

---

## 4. The typeof Operator

JavaScript gives us a built-in tool to check data types:

```js
typeof "Hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (historical JavaScript bug)
```

You will use `typeof` often to inspect values.

---

## 5. Real-Life Analogy

Think of a spreadsheet with columns:

- Column A → Names (strings)
- Column B → Ages (numbers)
- Column C → Present? (boolean)
- Column D → Optional notes (null/undefined)

You wouldn't add `"Maria"` + `"Carlos"` like numbers --- JavaScript
needs to know the type first.

---

## 6. Why Data Types Matter

You will use data types when:

- Handling API responses
- Reading form inputs
- Tracking numbers in dashboards
- Using booleans in conditionals
- Preparing data for loops and arrays

Understanding types now makes later lessons MUCH easier.

---

## 7. Important Preview (Operators Come Next)

Sometimes types change how operators behave.

Example:

```js
"5" + 5; // "55"
```

Later in the Operators lesson you will learn why this happens.

---

## 8. Mini Homework -- Daily Stats Summary

Goal: Practice using different data types.

Create variables:

- `dayName` (string)
- `stepsWalked` (number)
- `waterCups` (number)
- `didWorkout` (boolean)
- `eveningPlan` (null)
- `favoriteSnack` (undefined at first)

Steps:

1.  Log a daily summary:

```{=html}
<!-- -->
```

    --- DAILY STATS ---
    Day: Monday
    Steps walked: 8423
    Water cups: 6
    Worked out today? true
    Evening plan: null
    Favorite snack: undefined

2.  Update `eveningPlan` to a string.
3.  Assign a value to `favoriteSnack`.
4.  Log the updated summary.

This lesson focuses on **values and types** --- no DOM yet.
