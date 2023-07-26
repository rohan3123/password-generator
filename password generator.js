"use strict";

const readline = require('readline');

console.log("Hello, World! This is a password generator.");

let options = {
  includeSymbols: false,
  includeNumbers: false,
  includeLowercase: false,
  includeUppercase: false
};

function displayMenu() {
  console.log(`1. [${options.includeSymbols ? 'X' : ' '}] Include Symbols`);
  console.log(`2. [${options.includeNumbers ? 'X' : ' '}] Include Numbers`);
  console.log(`3. [${options.includeLowercase ? 'X' : ' '}] Include Lowercase Characters`);
  console.log(`4. [${options.includeUppercase ? 'X' : ' '}] Include Uppercase Characters`);
}

displayMenu();