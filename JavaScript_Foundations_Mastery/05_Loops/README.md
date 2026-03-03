# 05 -- Loops

Loops allow JavaScript to repeat actions automatically.

In real life, we repeat actions all the time:

- Do 10 squats.
- Send a message to each person in a group.
- Check every item in a to‑do list.

Instead of writing the same code many times, we use a loop so the
computer can:

> "Repeat this action until a rule says stop."

---

## 1. Why Loops Matter

You will use loops when:

- Rendering lists to the DOM
- Looping through API results
- Building dashboards
- Updating task lists
- Processing arrays before using `.map()` or `.filter()`

Loops are the **foundation** before array methods.

---

## 2. Loops in this lesson

We focus on two main loop types:

---

### `for` loop

Used when you **know** how many times you want to repeat something.

Structure:

```js
for (start; condition; change) {
  // code runs here
}
```

Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}
```

Breakdown:

- `let i = 1;` → starting point
- `i <= 5;` → keep going while this is true
- `i++` → increase by 1 each time

What is `i`?

`i` is just a variable name.\
It usually means **index** or **iteration**, but you could rename it:

```js
for (let step = 1; step <= 5; step++)
```

---

### `while` loop

Used when you **don't know exactly** how many times in advance.

Example:

```js
let count = 0;

while (count < 3) {
  console.log("Count is:", count);
  count = count + 1;
}
```

Important:

If we forget to update the variable inside the loop, the condition may
never become false → **infinite loop**.

---

## 3. Understanding the Symbols

Beginners often ask what these mean:

    ()  → loop rules and conditions
    {}  → code that repeats
    <=  → less than or equal to
    ++  → add 1 each loop

Example:

```js
for (let i = 0; i <= 3; i++)
```

- `i++` is shorthand for `i = i + 1`.

---

## 4. Real‑Life Analogy

Imagine a workout:

- "Do **10 push‑ups**."\
  → like a `for` loop (fixed amount)

- "Walk **until** you reach 8,000 steps."\
  → like a `while` loop (condition-based)

Loops repeat actions **without copy‑pasting code**.

---

## 5. Mini Homework -- Multiplication Table Generator

Goal: Use a loop to generate a multiplication table.

You will:

1.  Create a variable called `baseNumber` (example: 3, 5, or 7).
2.  Use a `for` loop from 1 to 10.
3.  Calculate:

```{=html}
<!-- -->
```

    result = baseNumber * currentMultiplier

4.  Log output like:

```{=html}
<!-- -->
```

    --- MULTIPLICATION TABLE ---
    5 x 1 = 5
    5 x 2 = 10
    ...
    5 x 10 = 50

Change `baseNumber` to practice different tables.

---

## 6. What Comes Next

Next units introduce:

- Array‑specific loops
- `.forEach()`
- `.map()`
- `.filter()`

These methods build directly on what you learned here.
