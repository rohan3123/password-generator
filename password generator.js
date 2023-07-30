"use strict";

// List of all possible strings
const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";
const numbers = "0123456789";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const possibleCharacters = [symbols, numbers, lowercaseLetters, uppercaseLetters];

// The Password Generation Function
function generatePassword(length) {
  let password = "";

  // For loop to generate a random string based on the arrays
  for (let i = 0; i < length; i++) {
    const randomCharacterSet = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    const randomCharacter = randomCharacterSet[Math.floor(Math.random() * randomCharacterSet.length)];
    password += randomCharacter;
  }

  return password;
}

function main() {
  // You can change the desired length of the password
  const passwordLength = 12;

  const generatedPassword = generatePassword(passwordLength);
  console.log("Generated Password:", generatedPassword);
}

main();