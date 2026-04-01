# 11 — API Mini Tasks (fetch + JSON)

In Unit 10 you saved small pieces of data using **localStorage**.

Now we level up again 🚀

Your app will begin talking to **external servers** using APIs.

This lesson focuses on:

- What an API is (plain language)
- How `fetch()` sends a request
- How JSON works
- How to safely read API responses
- How to update the DOM with API data
- How to handle errors clearly
- How loading states improve the user experience

No Axios yet.  
No authentication logic.  
No advanced query systems.

Just **small, real API calls and careful thinking**.

---

## 🧠 Mental Model of This Unit

Before:

User clicks → JavaScript runs → Console output

Now:

User clicks
→ JavaScript sends request
→ Server responds with data
→ JavaScript reads JSON
→ JavaScript updates page
→ User sees real information

This is the moment JavaScript becomes **connected to the world**.

---

## 1. What is an API?

API = Application Programming Interface.

Friendly definition:

An API is a **public door** a server opens so your website can ask for information.

Your JavaScript sends a request → the server sends data back.

### Real-life analogy 🍽️

- Menu → API options
- Waiter → API URL
- Order → your request
- Kitchen → server
- Food → the response data
- Table → your JavaScript code

You do NOT control the kitchen.  
You only **ask and receive**.

Example:

fetch("https://api.adviceslip.com/advice");

---

## 2. Why APIs Matter

You will use APIs when:

- Showing live data in dashboards
- Loading playlists or media
- Displaying weather, quotes, or advice
- Building TuneShelf search features
- Creating real dynamic applications

APIs are what make apps feel **alive instead of static**.

---

## 3. What is JSON?

Most APIs return JSON.

JSON = JavaScript Object Notation.

It looks like JavaScript objects, but it is really **structured data text**.

Example:

{
  "slip": {
    "id": 42,
    "advice": "Be kind to yourself."
  }
}

Important:

- JSON is data, not executable code
- JavaScript reads JSON and converts it into usable objects and arrays
- You must inspect the structure before trying to use it

---

## 4. The fetch → JSON → data Flow (VERY IMPORTANT)

Every API request follows the same pattern.

STEP A — Make the request

fetch("some-api-url");

Important:

`fetch()` sends a request to a URL and returns a **Promise**.

A Promise means:

“The result will arrive later.”

STEP B — Convert the response into usable data

.then(function (response) {
  return response.json();
})

Here:

- `.then()` runs when the previous Promise succeeds
- `response` is the raw response object from the server
- `.json()` reads the response body and converts JSON text into usable JavaScript data

STEP C — Use the data

.then(function (data) {
  console.log(data);
.data.slip.advice

})

Always inspect the data first.

STEP D — Handle errors

.catch(function (error) {
  console.log("Something went wrong:", error);
});

---

## 5. Understanding the Symbols

- `fetch()` → sends a request to a URL and returns a Promise
- `.then()` → runs after the previous Promise succeeds
- .then()
- `.json()` → converts JSON response text into usable JavaScript data
- `.catch()` → handles errors
- `data` → the parsed API result

---

## 6. How to Read an API Response (Most Important Skill)

Always start with:

console.log(data);

Ask:

- Is it an object or an array?
- What keys exist?
- Where is the useful value?

Example:

data.slip.advice;

---

## 7. Loading States (Real App Thinking)

APIs take time to respond.

Good apps show feedback like:

- Loading...
- temporary text
- spinner animation

Flow:

User clicks → Show loading → Data arrives → Update UI

---

## 8. Practice Tasks Overview

Each widget flow:

1. User clicks
2. Show loading
3. Fetch data
4. Read JSON
5. Inspect structure
6. Update DOM

TASK 1 — Random Advice  
API: https://api.adviceslip.com/advice  
Key path: data.slip.advice;

TASK 2 — Random Cat Fact  
API: https://catfact.ninja/fact  
Key path: data.fact;

TASK 3 — NASA APOD  
API: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1  

Returns ARRAY:

const apod = data[0];

Check:

if (apod.media_type === "video") { }

---

## 9. Mini Homework — Country Info Viewer

API:

https://restcountries.com/v3.1/name/COUNTRY_NAME?fields=name,capital,region,population

Returns ARRAY:

const countryData = data[0];

Access:

countryData.name.common;
countryData.capital[0];

Handle:

- empty input
- not found
- network errors

---

## 10. Final Mindset

APIs give raw data.

Your job:

- inspect carefully
- identify arrays vs objects
- trace paths like:

data[0].name.common;

If you can read JSON calmly, you understand APIs.
