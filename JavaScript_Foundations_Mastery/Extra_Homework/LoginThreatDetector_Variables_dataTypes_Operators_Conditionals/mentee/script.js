// ✅ LOGIN THREAT DETECTOR
// Goal: Decide if a login attempt is safe, suspicious, or should be locked.
// Decision rules must use ONLY: variables, data types, operators, conditionals.
// DOM + event listeners are allowed for UI interaction.

// Step 1: Get references to the DOM elements using document.getElementById()
// Store references for:
// - failed attempts input        → id="failedAttempts"
// - unusual location dropdown    → id="unusualLocation"
// - recognized device dropdown   → id="recognizedDevice"
// - scan button                  → id="scanBtn"
// - message paragraph            → id="message"
// - status text output           → id="statusText"
// - status details output        → id="statusDetails"
// - attempts output              → id="attemptsOut"
// - location output              → id="locationOut"
// - device output                → id="deviceOut"

const failedAttempts = document.getElementById("failedAttempts");
const unusualLocation = document.getElementById("unusualLocation");
const recognizedDevice = document.getElementById("recognizedDevice");
const statusText = document.getElementById("statusText");
const statusDetails = document.getElementById("statusDetails");
const scanBtn = document.getElementById("scanBtn");
const message = document.getElementById("message");
const attemptsOut = document.getElementById("attemptsOut");
const locationOut = document.getElementById("locationOut");
const deviceOut = document.getElementById("deviceOut");

// Step 2: Add a click event listener to the Scan button
// When clicked, run your security decision logic

// Step 3: Read user inputs inside the click function
// - failedAttempts should become a NUMBER (not a string)
// - unusualLocation will be a STRING ("yes" or "no")
// - recognizedDevice will be a STRING ("yes" or "no")
// Convert unusualLocation into a BOOLEAN:
//    unusual = true if unusualLocation === "yes"
// Convert recognizedDevice into a BOOLEAN:
//    recognized = true if recognizedDevice === "yes"

// Step 4: Validation using conditionals
// If failedAttempts is empty OR failedAttempts < 0:
// - show a warning message
// - stop the function early (return)

scanBtn.addEventListener("click", function () {
  const failedAttemptsValue = Number(failedAttempts.value);
  const unusualLocationValue = unusualLocation.value;
  const recognizedDeviceInput = recognizedDevice.value;

  const unusual = unusualLocationValue === "yes";

  const recognized = recognizedDeviceInput === "yes";

  if (!failedAttempts.value || failedAttemptsValue < 0) {
    message.textContent =
      "Please enter a vlaid number, or failed attempts (like 0, 1,2,3)";
    message.className = "message danger";
    return;
  }
  attemptsOut.textContent = String(failedAttemptsValue);
  locationOut.textContent = unusual ? "Yes" : "No";
  deviceOut.textContent = recognized ? "Yes" : "No";

  let status = "";
  let details = "";

  if (failedAttemptsValue >= 5) {
    status = "ACCOUNT LOCKED";
  } else if (unusual === true && recognized === false) {
    status = "SUSPICIOUS";
  } else if (failedAttemptsValue >= 3 && unusual === true) {
    status = "SUSPICIOUS";
  } else {
    status = "LOGIN APPROVED";
  }

  if (status === "ACCOUNT LOCKED") {
    details = "Too many failed attempts. Please reset your password.";
  } else if (status === "SUSPICIOUS") {
    details = "Unusual sign-in detected. Verify identity.";
  } else {
    details = "No major risk indicators detected.";
  }

  statusText.textContent = status;
  statusDetails.textContent = details;

  statusText.classList.remove("safe", "warn", "danger");

  if (status === "ACCOUNT LOCKED") {
    statusText.classList.add("danger");
  } else if (status === "SUSPICIOUS") {
    statusText.classList.add("warn");
  } else {
    statusText.classList.add("safe");
  }

  if (status === "ACCOUNT LOCKED") {
    message.textContent = "Tip: Keep your device recognized for faster logins.";
    message.classList.add("message danger");
  } else if (status === "SUSPICIOUS") {
    message.textContent = "Tip: Turn on 2FA.";
    message.classList.add("message warn");
  } else {
    message.textContent = "Tip: Use 'Forgot Password' to recover account.";
    message.classList.add("message safe");
  }
});

// Step 5: Update the “what you selected” outputs
// - attemptsOut textContent should show the number
// - locationOut should show "Yes" or "No"
// - deviceOut should show "Yes" or "No"

// Step 6: Create variables for your final decision
// - status (string)
// - details (string)

// Step 7: Use conditionals to decide the threat result (REALISTIC RULES)
// Use these rules (in this order):
// A) If failedAttempts >= 5 → status = "ACCOUNT LOCKED"
// B) Else if unusual is true AND recognized is false → status = "SUSPICIOUS"
// C) Else if failedAttempts >= 3 AND unusual is true → status = "SUSPICIOUS"
// D) Else → status = "LOGIN APPROVED"

// Step 8: Use conditionals to create a helpful details message
// Examples:
// - Locked: "Too many failed attempts. Please reset your password."
// - Suspicious: "Unusual sign-in detected. Verify identity.";
// - Approved: "No major risk indicators detected."

// Step 9: Update the UI with the decision
// - statusText.textContent = status
// - statusDetails.textContent = details
// Also update color by adding ONE class to statusText:
// - safe (green), warn (yellow), danger (red)
// TIP: Remove the other classes first so colors don’t stack.

// Step 10: Update the message paragraph with guidance
// Examples:
// - If suspicious: "Tip: Turn on 2FA."
// - If locked: "Tip: Use 'Forgot Password' to recover account."
// - If approved: "Tip: Keep your device recognized for faster logins."
