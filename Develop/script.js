// Assignment code here

// Password Length Criteria //
var promptLength = 0;
window.prompt(" Enter a password length range between 8 and 128 characters.");

while (!promptLength || length < 8 || promptLength > 128) {
  promptLength = parseInt(promptLength);

  if (!length || length < 8 || length > 128) {
    window.alert("You need to provide a valid input! Please try again!");
  }
}

// Password Length Validation //

var confirmLength = window.confirm(
  "Confirm your selection of " + promptLength + " characters."
);

// Password Length Criteria Ends //

// Password Character Length Criteria //

// Might need to use checkbox? //

// Password Character Length Criteria Ends //

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
