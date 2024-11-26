// Get DOM elements
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Define possible characters
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_-+=<>?";

// Function to generate password
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let characters = "";

  // Include selected characters
  if (uppercaseInput.checked) characters += uppercaseChars;
  if (lowercaseInput.checked) characters += lowercaseChars;
  if (numbersInput.checked) characters += numberChars;
  if (symbolsInput.checked) characters += symbolChars;

  // Generate random password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Display the password
  passwordInput.value = password;
}

// Function to copy password to clipboard
function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// Initial password generation
generatePassword();
