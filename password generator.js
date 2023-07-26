"use strict";

const readline = require('readline');

console.log("Hello, World! This is a password generator.");

let options = {
  includeSymbols: false,
  includeNumbers: false,
  includeLowercase: false,
  includeUppercase: false
};

//display menu 
function displayMenu() {
  console.log(`1. [${options.includeSymbols ? 'X' : ' '}] Include Symbols`);
  console.log(`2. [${options.includeNumbers ? 'X' : ' '}] Include Numbers`);
  console.log(`3. [${options.includeLowercase ? 'X' : ' '}] Include Lowercase Characters`);
  console.log(`4. [${options.includeUppercase ? 'X' : ' '}] Include Uppercase Characters`);
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function updateMenu(choice) {
  switch (choice) {
    case '1':
      options.includeSymbols = !options.includeSymbols;
      break;
    case '2':
      options.includeNumbers = !options.includeNumbers;
      break;
    case '3':
      options.includeLowercase = !options.includeLowercase;
      break;
    case '4':
      options.includeUppercase = !options.includeUppercase;
      break;
    default:
      console.log("Invalid choice. Please enter a valid number (1-4).");
      break;
  }
  displayMenu();
  rl.question("Enter your choice (1-4) or press 'q' to quit: ", (input) => {
    if (input.toLowerCase() === 'q') {
      console.log("Exiting the password generator.");
      rl.close();
    } else {
      updateMenu(input);
    }
  });
}

//display menu at the start and get users choice
displayMenu();
rl.question("Enter your choice (1-4) or press 'q' to quit: ", (input) => {
  if (input.toLowerCase() === 'q') {
    console.log("Exiting the password generator.");
    rl.close();
  } else {
    updateMenu(input);
  }
});