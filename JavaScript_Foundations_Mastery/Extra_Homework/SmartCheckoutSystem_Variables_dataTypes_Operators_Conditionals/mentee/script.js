// ✅ SMART CHECKOUT SYSTEM
// Goal: Calculate discount + shipping + final total based on inputs.
// Logic rules must use ONLY: variables, data types, operators, conditionals.
// We ARE allowed to use DOM + event listeners because this is the Realistic UI version.

// Step 1: Get references to the DOM elements we need using document.getElementById()
// Store references for:
// - cart total input        → id="cartTotal"
// - membership dropdown     → id="membership"
// - coupon dropdown         → id="coupon"
// - calculate button        → id="calcBtn"
// - message paragraph       → id="message"
// - subtotal display        → id="subtotalText"
// - discount display        → id="discountText"
// - shipping display        → id="shippingText"
// - final total display     → id="finalTotalText"

// Step 2: Add a click event listener to the Calculate button
// When the button is clicked, run the checkout calculation function

// Step 3: Inside the click function, read the user inputs
// - cartTotal should become a NUMBER (not a string)
// - membership will be a STRING
// - coupon value will be a STRING ("yes" or "no")
// Then convert coupon into a BOOLEAN:
//    hasCoupon = true if coupon === "yes", otherwise false

// Step 4: Validation check using a conditional
// If cartTotal is empty OR cartTotal <= 0:
// - set message text to a warning
// - STOP the function early (return)

// Step 5: Create checkout calculation variables
// - subtotal
// - discountAmount
// - shippingCost
// - totalAfterDiscount
// - finalTotal

// Step 6: Determine membership discount using conditionals
// Rules:
// - If membership is "premium" → 15% off subtotal
// - Else if membership is "vip" → 25% off subtotal
// - Else (standard) → 0% discount

// Step 7: Apply coupon using conditionals
// If hasCoupon is true:
// - add EXTRA 10% discount of subtotal

// Step 8: Calculate the total AFTER discount (before shipping)
// totalAfterDiscount = subtotal - discountAmount

// Step 9: Determine shipping using conditionals
// Rules:
// - If totalAfterDiscount >= 150 → shippingCost = 0 (free shipping)
// - Else → shippingCost = 9.99

// Step 10: Calculate final total using operators
// finalTotal = totalAfterDiscount + shippingCost

// Step 11: Update the UI (the receipt values) using textContent
// - subtotalText shows subtotal as money
// - discountText shows discountAmount as money
// - shippingText shows shippingCost as money
// - finalTotalText shows finalTotal as money

// Step 12: Update the message text using conditionals
// If shippingCost is 0 → show "Free shipping unlocked"
// Else → show "Add $X more to unlock free shipping"
// (You can calculate X = 150 - totalAfterDiscount)
