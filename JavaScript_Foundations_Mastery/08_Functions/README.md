# 08 — Functions (Foundations Pack)

Welcome to the **Functions Module** 🎯  
This section is one of the most important transitions in your JavaScript journey.

Up until now, you have learned:

- Variables
- Data Types
- Operators
- Conditionals
- Loops
- Arrays & Objects
- Array Methods

Now we learn **FUNCTIONS**, which combine everything you already know into reusable logic.

---

# 🧠 Why Functions Matter

Think of a function like a **machine**:

👉 You give it inputs  
👉 It does work  
👉 It gives you an output

Example:

```js
function greet(name) {
  console.log("Hello " + name);
}
```

---

# 📚 Types of Functions You Will Learn

## 1️⃣ Function Declaration

```js
function sayHello() {
  console.log("Hello!");
}
```

## 2️⃣ Function Expression

```js
const sayBye = function () {
  console.log("Bye!");
};
```

## 3️⃣ Arrow Function

```js
const add = (a, b) => a + b;
```

## 4️⃣ Callback Function

```js
runTwice(() => console.log("Hi"));
```

---

# 📊 When Do We Use Each Type? (Clean Chart)

| Function Type        | When You Use It                            | Real-Life Example                                  |
| -------------------- | ------------------------------------------ | -------------------------------------------------- |
| Function Declaration | Main reusable program logic                | calculateTotal(), formatName(), validateInput()    |
| Function Expression  | When order of execution must be controlled | Preventing hoisting issues in larger applications  |
| Arrow Function       | Small, modern logic blocks                 | Array methods, event listeners, short calculations |
| Callback Function    | When something happens later               | Button clicks, timers, API responses               |
| Async Function       | Working with data from servers             | Fetching API data                                  |
| Method (Object)      | Behavior attached to objects               | user.login(), cart.addItem()                       |

calculateTotal()

function greet(){

}

## (Async functions will be covered later in the API module.)

# 🌎 Real Life Situations (Why Functions Exist)

## 🧾 Formatting Data

Instead of repeating formatting logic:

```js
formatPrice(10);
formatPrice(5.5);
```

One function handles everything.

---

## 🖱️ DOM Events (Next Module)

```js
button.addEventListener("click", () => {});
```

That arrow function is a **callback**.

Understanding functions makes DOM much easier.

---

## 🌐 API Requests (Later Modules)

```js
async function loadData() {}
```

Functions allow us to control:

- Loading
- Errors
- Server responses

---

# 🧱 Skills You Are Building

After finishing this pack you should be able to:

✅ Write reusable logic  
✅ Understand parameters vs arguments  
✅ Use return correctly  
✅ Use arrow functions confidently  
✅ Understand callbacks before DOM

---

# 🚀 Why This Comes BEFORE DOM

DOM is simply:

👉 Functions reacting to user actions

If you understand functions, DOM will feel natural instead of confusing.

---

# ❤️ Final Tip

Functions are the moment JavaScript becomes structured and powerful.

Take your time with this section.
