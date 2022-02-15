// Assignment code here

// Password Length Criteria Start
var promptLength = 0;

// Enter the conditional for promptLength response - cannot be blank/null, at LEAST 8 characters and no more than 128 characters.
while (!promptLength || promptLength < 8 || promptLength > 128) {
  // Convert string responses to integers
  promptLength = parseInt(
    // Ask user to input password length
    window.prompt("Enter a password length range between 8 and 128 characters")
  );

  // If invalid response is entered - trigger a warning and ask for re-entry.
  if (!promptLength || promptLength < 8 || promptLength > 128) {
    window.alert(
      "You need to provide a password length range between 8 and 128 characters - please try again!"
    );
  }
}

// Password Length Validation Start

var confirmLength = window.confirm(
  "Confirm your selection of " + promptLength + " characters."
);

// Password Length Validation Ends

// Password Length Criteria Ends

// Password Character Type Start

var promptType = 0;

// Enter the conditional for promptType response - cannot be blank or null, options are lowercase, uppercase, numeric, and/or special characters
while (!promptType || promptType < 1 || promptType > 4) {
  promptType = parseInt(
    // Ask user to select character types
    window.prompt(
      "Select character types to include in the password. 1 is for lowercase, 2 is for uppercase, 3 is for numeric, and 4 is for special characters."
    )
  );

  // If invalid response is entered - trigger a warning and ask for re-entry.
  if (!promptType || promptType < 1 || promptType > 4) {
    window.alert(
      "You need to provide a numeric selection between 1 and 4 - please try again!"
    );
  }
}

// Password Character Type Validation Start
var confirm = window.confirm("Confirm your selection of ");

// Need to figure out way to generate log of selection (e.g. Confirm your selection of 'special characters'.)

// Password Character Type Validation End

// Need to figure out how to call Generate Button

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password using the following letters/selections - not sure if this is on the right track.
var passwordNums = "0123456789";

var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var passwordLower = "abcdefghijklmnopqrstuvwxyz";

var passwordSpecial = "#@!%&()/";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function copyPassword() {
  //Function Content to Copy Password Here
  var password = copyPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
