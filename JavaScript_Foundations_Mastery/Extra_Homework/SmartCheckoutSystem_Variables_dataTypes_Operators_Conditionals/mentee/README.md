# 🛒 Smart Checkout System

This mini project simulates a **real e-commerce checkout**.

## What it calculates

- Subtotal (your cart total)
- Discount (based on membership + coupon)
- Shipping (free shipping threshold)
- Final Total (after discount + shipping)

## Rules (the checkout logic)

- **Premium** gets **15% off**
- **VIP** gets **25% off**
- **Valid coupon** adds **10% extra discount**
- Orders **>= $150** get **free shipping**
- Otherwise shipping is **$9.99**

## Concept rules for this lesson

Your _business logic_ should use only:

- Variables
- Data types (number / string / boolean)
- Operators
- Conditionals (if / else if / else)

✅ DOM + event listeners are used only to make the UI interactive (Realistic UI version).

### How to test

1. Open `index.html` in your browser.
2. Open DevTools → Console to see logs and errors.
3. Fix one step at a time until everything works.
