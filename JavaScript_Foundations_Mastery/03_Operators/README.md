# 03 -- Operators

Operators tell JavaScript **what to do with values**.

In real life, we constantly change numbers:

- Add money to a wallet
- Subtract time from a timer
- Multiply a price by quantity
- Divide a bill between friends

JavaScript uses operators to perform these actions.

---

## 1. What is an Expression?

An **expression** is any piece of code that produces a value.

Examples:

```js
5 + 3; // returns 8
wallet - 60; // returns a number
"Hi " + "Ana"; // returns a string
```

Operators are used inside expressions to calculate results.

---

## 2. Operators in this Lesson

We focus on arithmetic and assignment operators:

Operator Name Example Description

---

`+` addition `5 + 3` Add numbers OR join strings
`-` subtraction `10 - 4` Subtract numbers
`*` multiplication `6 * 2` Multiply numbers
`/` division `20 / 5` Divide numbers
`%` remainder `7 % 3` Remainder after division
`+=` plus equals `x += 2` Same as `x = x + 2`
`-=` minus equals `x -= 1` Same as `x = x - 1`

---

## 3. Understanding the Symbols

    +   add values
    -   subtract values
    *   multiply values
    /   divide values
    %   remainder after division
    +=  add and reassign
    -=  subtract and reassign

Example:

```js
wallet += 200;
```

This means:

```js
wallet = wallet + 200;
```

---

## 4. IMPORTANT -- The + Operator Has Two Jobs

`+` can do math **and** combine text.

Numbers:

```js
5 + 3; // 8
```

Strings:

```js
"Hello " + "Ana"; // "Hello Ana"
```

JavaScript decides what to do based on the value types.

---

## 5. Real-Life Analogy

Imagine tracking money in a wallet:

```js
let wallet = 500;
wallet += 200; // salary
wallet -= 60; // coffee
```

Operators let JavaScript update values step by step.

---

## 6. Why Operators Matter

You will use operators when:

- Updating dashboard stats
- Calculating totals in shopping carts
- Tracking counters in loops
- Processing API values
- Managing budgets and scores

Operators are the foundation for conditionals, loops, and data logic.

---

## 7. Mini Homework -- Simple Budget Calculator

Goal: Calculate how much money remains after expenses.

Variables:

- `monthlyIncome`
- `rentCost`
- `foodCost`
- `transportCost`
- `funBudget`

Steps:

1.  Calculate `totalExpenses` using `+`.
2.  Calculate `moneyLeft` using `-`.
3.  Log a clear summary:

```{=html}
<!-- -->
```

    --- SIMPLE BUDGET ---
    Monthly income: 12000
    Total expenses: 8500
    Money left: 3500

4.  Update one expense using `+=`.
5.  Recalculate totals and log the updated result.

This lesson focuses only on **math with variables** --- no conditionals
or loops yet.
