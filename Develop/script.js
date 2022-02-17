// Generate Password Button to Trigger Prompts

var generateBtn = document.querySelector("#generate");

// Global Scope Variables - Password Keys
var passwordNums = "0123456789";
var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLower = "abcdefghijklmnopqrstuvwxyz";
var passwordSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

let promptLength = "";

function getLength() {
  var localLength = window.prompt(
    "Enter a password length range between 8 and 128 characters."
  );
  return parseInt(localLength);
}

// Password Criterion
function generatePassword() {
  debugger;
  var password = "";
  var passwordChar = "";

  // Password Length Criteria Start

  // Enter the conditional for promptLength response - cannot be blank/null, at LEAST 8 characters and no more than 128 characters.
  promptLength = getLength();
  if (
    !isNaN(promptLength) ||
    !promptLength ||
    promptLength < 8 ||
    promptLength > 128
  ) {
    // If invalid response is entered - trigger a warning and ask for re-entry.

    if (
      isNaN(promptLength) ||
      !promptLength ||
      promptLength < 8 ||
      promptLength > 128
    ) {
      window.alert(
        "You need to provide a password length range between 8 and 128 characters - please try again!"
      );
      generatePassword();
    }
  }

  // Password Length Validation Start

  var confirmLength = window.confirm(
    "Confirm your selection of " + promptLength + " characters."
  );

  // Password Length Validation Ends

  // Password Length Criteria Ends

  // Password Character Type Start

  // Need to find way to trigger questions being asked again/forcing at least one yes for the generator.

  // Question #1 - Lowercase Characters Start

  var confirmLower = window.confirm(
    "Do you want lowercase characters in your password?"
  );

  // If yes, grant lowercase letter confirmation
  if (confirmLower) {
    passwordChar += passwordLower;
    window.alert("You selected lowercase characters for your password.");
  }
  // If no, alert denial of lowercase letter confirmation
  if (!confirmLower) {
    window.alert("You did not select lowercase characters for your password.");
  }
  // Question #1 - Lowercase Characters End

  // Question #2 - Uppercase Characters Start
  var confirmUpper = window.confirm(
    "Do you want uppercase characters in your password?"
  );
  // If yes, grant uppercase letter confirmation
  if (confirmUpper) {
    passwordChar += passwordUpper;
    window.alert("You selected uppercase characters in your password.");
  }
  // If no, alert denial of lowercase letter confirmation
  if (!confirmUpper) {
    window.alert("You did not select uppercase characters in your password.");
  }

  // Question #2 - Uppercase Characters End

  // Question #3 - Numbers Start
  var confirmNumbers = window.confirm("Do you want numbers in your password?");

  // If yes, grant number letter confirmation
  if (confirmNumbers) {
    passwordChar += passwordNums;
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
    passwordChar += passwordSpecial;
    window.alert("You selected special characters in your password.");
  }

  // If no, alert denial of special character confirmation
  if (!confirmCharacters) {
    window.alert("You did not select special characters in your password.");

    // Check Answers Function to inform user they need to select at least one criteria.
  }

  if (
    checkAnswers(confirmUpper, confirmLower, confirmNumbers, confirmCharacters)
  ) {
    window.alert("You must choose at least one criteria for your password.");
    generatePassword();
  }

  // Randomizer for Password
  for (var i = 0; i < promptLength; i++) {
    password =
      password + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  console.log(password);
  return password;
}

function checkAnswers(confirmUp, confirmLow, confirmNum, confirmChar) {
  return !confirmUp && !confirmLow && !confirmNum && !confirmChar;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
