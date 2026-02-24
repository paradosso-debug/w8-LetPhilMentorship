# 04 -- Conditionals

Conditionals allow JavaScript to make decisions.

In real life, we constantly decide:

- If it's raining → take an umbrella.
- If you're hungry → make food.
- Otherwise → keep working.

In JavaScript we write rules that decide **which code runs**.

```js
if (condition) {
  // runs when true
} else {
  // runs when false
}
```

---

## 1. What is a "condition"?

A **condition** is anything that becomes **true** or **false**.

Examples:

```js
score >= 80; // true or false
age < 18; // true or false
isMember === true;
```

JavaScript checks the result and decides which block runs.

---

## 2. Pieces that Work Together

Conditionals combine three main parts:

### 1️⃣ Values / Variables

Examples:

- `score`
- `age`
- `hasTicket`

### 2️⃣ Comparison Operators

These compare values and return a boolean:

    >   greater than
    <   less than
    >=  greater than or equal
    <=  less than or equal
    === strictly equal
    !== not equal

IMPORTANT:

    ===  strict equality (recommended)
    ==   loose equality (avoid for beginners)

We prefer **===** because it avoids hidden type
issues.

### 3️⃣ Decision Blocks

```js
if (...) {

} else if (...) {

} else {

}
```

Only ONE block runs.

---

## 3. Example Breakdown

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Keep practicing!");
}
```

Flow:

- JS checks first condition
- If false → checks next
- If none match → runs `else`

---

## 4. Understanding the Symbols

Beginners often ask what these mean:

    ()   → condition check
    {}   → block of code
    >=   → greater than or equal
    &&   → AND (both must be true)
    ||   → OR (one must be true)

Example:

```js
if (age >= 18 && hasTicket === true)
```

---

## 5. Real-Life Analogy

Imagine a club bouncer:

- Checks your age (condition)
- If age ≥ 18 → enter
- Else → denied

The rule is the condition.\
The decision is the conditional block.

---

## 6. Why Conditionals Matter

You will use conditionals when:

- Showing or hiding UI elements
- Validating forms
- Checking API results
- Controlling dashboard behavior
- Handling user permissions

Conditionals make apps **react to situations**.

---

## 7. Practice Tasks Overview

You have four small console-based tasks:

1.  Basic boolean check (`isRaining`).
2.  Age check (`>= 18`).
3.  Score grading with `if / else if / else`.
4.  Multiple conditions using `&&` and `||`.

No DOM yet --- just logic practice.

---

## 8. Mini Homework -- Access Checker

Goal: Decide if a user can access something.

Variables:

- `userAge`
- `hasTicket`
- `isMember`

Steps:

1.  Check if user is old enough.
2.  Check ticket OR membership.
3.  Combine logic:

```{=html}
<!-- -->
```

    Age passes AND (ticket OR membership)

Example output:

    Access granted. Enjoy the event!

Everything prints with `console.log`.
