# 🛡️ Login Threat Detector

This mini project simulates a **security system** that evaluates login attempts and returns a risk decision.

## What it evaluates

- Failed login attempts (number)
- Unusual location (yes/no)
- Recognized device (yes/no)

## Output decisions

- ✅ LOGIN APPROVED
- ⚠️ SUSPICIOUS
- ⛔ ACCOUNT LOCKED

## Decision rules (order matters)

1. If **failedAttempts >= 5** → **ACCOUNT LOCKED**
2. Else if **unusual location = true** AND **recognized device = false** → **SUSPICIOUS**
3. Else if **failedAttempts >= 3** AND **unusual location = true** → **SUSPICIOUS**
4. Else → **LOGIN APPROVED**

## Learning constraint

The _decision logic_ uses only:

- Variables
- Data types (number/string/boolean)
- Operators
- Conditionals

✅ DOM + event listeners are used only to make the UI interactive.

### How to test

1. Open `index.html` in your browser.
2. Open DevTools → Console to see logs.
3. Implement step-by-step until your scan works.
