// Generate Password Button to Trigger Prompts

function generatePassword() {
  // Password Criterion
  var passwordNums = "0123456789";

  var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLower = "abcdefghijklmnopqrstuvwxyz";

  var passwordSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

  // Password Length Criteria Start
  var promptLength = 0;

  // Enter the conditional for promptLength response - cannot be blank/null, at LEAST 8 characters and no more than 128 characters.
  while (!promptLength || promptLength < 8 || promptLength > 128) {
    // Convert string responses to integers
    promptLength = parseInt(
      // Ask user to input password length
      window.prompt(
        "Enter a password length range between 8 and 128 characters"
      )
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
  while (!promptType) {
    // Ask user to select character types

    // Question #1 - Lowercase Characters Start
    var confirmLower = window.confirm(
      "Do you want lowercase characters in your password?"
    );

    // If yes, grant lowercase letter confirmation
    if (confirmLower) {
      window.alert("You selected lowercase characters for your password. ");
    }
    // If no, alert denial of lowercase letter confirmation
    if (!confirmLower) {
      window.alert(
        "You did not select lowercase characters for your password."
      );
    }
    // Question #1 - Lowercase Characters End

    // Question #2 - Uppercase Characters Start
    var confirmUpper = window.confirm(
      "Do you want uppercase characters in your password?"
    );
    // If yes, grant uppercase letter confirmation
    if (confirmUpper) {
      window.alert("You selected uppercase characters in your password.");
    }
    // If no, alert denial of lowercase letter confirmation
    if (!confirmUpper) {
      window.alert("You did not select uppercase characters in your password.");
    }

    // Question #2 - Uppercase Characters End

    // Question #3 - Numbers Start
    var confirmNumbers = window.confirm(
      "Do you want numbers in your password?"
    );

    // If yes, grant number letter confirmation
    if (confirmNumbers) {
      window.alert("You selected numbers in your password.");
    }

    // If no, alert denial of number confirmation
    if (!confirmNumbers) {
      window.alert("You did not select numbers in your password.");
    }

    // Question #3 - Numbers End

    // Question #4 - Special Characters Start

    var confirmCharacters = window.confirm(
      "Do you want special characters in your password?"
    );

    // If yes, grant special character confirmation
    if (confirmCharacters) {
      window.alert("You selected special characters in your password.");
    }

    // If no, alert denial of special character confirmation
    if (!confirmCharacters) {
      window.alert("You did not select special characters in your password.");
    }
    break;
  }

  // Password Character Type Validation End

  // Generate Password Based on User Input

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
  /*
  copyBtn.addEventListener("click", copyPassword); */
}
