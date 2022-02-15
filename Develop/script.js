// Generate Password Button to Trigger Prompts

function generatePassword() {
  // Password Criterion
  var passwordNums = "0123456789";

  var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLower = "abcdefghijklmnopqrstuvwxyz";

  var passwordSpecial = "#@!%&()/";
}

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

  // Password Character Type Validation Start
  switch (promptType) {
    case 1:
      window.confirm("Do you want lowercase characters in your password?");
      window.alert("You've selected lowercase characters for your password.");
      break;
    case 2:
      window.confirm("Do you want uppercase characters in your password?");
      window.alert("You've selected uppercase characters for your password.");
      break;
    case 3:
      window.confirm("Do you want numbers in your password?");
      window.alert("You've selected numbers for your password.");
      break;
    case 4:
      window.confirm("Do you want special characters in your password?");
      window.alert("You've selected special characters for your password.");
  }
}

// Password Character Type Validation End

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

// Added Copy Button for easier user interface/experience.
copyBtn.addEventListener("click", copyPassword);
