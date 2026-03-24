# 10 — localStorage Mini Tasks

## (Saving Small Pieces of State)

In Unit 09 you made the page react to user actions using **events**.

Now we introduce **persistent state** — information that stays even after a page refresh.

This unit focuses on:

- What `localStorage` is
- Saving small pieces of data
- Loading saved values on refresh
- Clearing stored data safely

No arrays of objects yet.  
No complex applications yet.  
Just **small pieces of state**.

---

# 1. Why Do We Need localStorage?

Normally, JavaScript variables disappear when the page refreshes.

Example mental model:

```text
User types → variable stores value
Page refresh → variable is gone
```

This means the app **forgets everything.**

`localStorage` solves this problem by allowing the browser to **remember information.**

Now the flow becomes:

```text
User action → save to localStorage
Page refresh → read from localStorage → restore UI
```

This makes the app feel more real and persistent.

---

# 2. What is localStorage?

`localStorage` is a built-in browser feature that saves data **inside the user's browser** as key/value pairs.

Key ideas:

- Data stays after refresh
- Data stays after closing the tab
- Data is saved per website (origin)
- Everything is stored as **strings**

Analogy:

Think of localStorage like a **tiny personal locker 🔐 inside the browser.**

- The label on the locker = **key**
- The item stored inside = **value**

Example:

```js
localStorage.setItem("favoriteColor", "purple");

const color = localStorage.getItem("favoriteColor");

localStorage.removeItem("favoriteColor");
```

---

# 3. When Do Real Apps Use localStorage?

You will use localStorage for things like:

- Saving theme preferences
- Remembering usernames
- Tracking visit counters
- Restoring UI state on reload
- Preparing for larger applications later

localStorage makes your application feel **persistent instead of temporary.**

---

# 4. Important Beginner Rules

- localStorage stores only **strings**
- Numbers, booleans, arrays, and objects are automatically converted into strings when saved
- localStorage is meant for **small pieces of data**, not large databases
- Data is saved **per website**

Later you will learn how to use **JSON** to store more complex data.

---

# 5. Understanding the Symbols

```text
localStorage → browser storage object
.setItem(key, value) → save data
.getItem(key) → read saved data
.removeItem(key) → delete one saved item
.clear() → delete ALL saved data for this website (use carefully)
```

Example:

```js
localStorage.setItem("username", "Ana");
```

---

# 6. Practice Tasks Overview

Practice happens on a pre-built HTML card that includes:

- Name input with Save / Load / Clear buttons
- Visit counter display
- Theme toggle button

You will practice:

1. Saving a name using a key like `"savedName"`
2. Loading the name and showing it on the page
3. Clearing the saved name and updating the UI
4. Creating a visit counter:
   - Read `"visitCount"`
   - Increase it on each page load
   - Display the updated number
5. Saving a theme preference (`"cardTheme"`) and applying it on load

Everything is visible and survives refresh.

This helps you understand the **state restoration pattern** used in real apps.

---

# 7. Mini Homework — Favorite Quote Saver

Goal: Save a small piece of text using localStorage.

Requirements:

1. Create a `<textarea>` for entering a quote
2. Add a **Save Quote** button that:
   - saves the textarea value using key `"favoriteQuote"`
   - updates a display area
3. On page load:
   - if a quote exists, show it in both the textarea and display area
4. Add a **Clear Quote** button that:
   - removes the saved quote
   - clears the UI

All data is stored as simple strings — no JSON yet.

This homework reinforces the full persistence flow:

```text
type → save → refresh → load → display
```

Once this feels natural, you will be ready to store **arrays and objects using JSON** in the next level.
