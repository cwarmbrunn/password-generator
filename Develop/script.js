// Generate Password Button to Trigger Prompts
var generateBtn = document.querySelector("#generate");

// Global Scope Variables - Password Character Options
var passwordLower = "abcdefghijklmnopqrstuvwxyz";
var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordNums = "0123456789";
var passwordSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

let length = "";

// Function to prompt user to input password character length

// Password Generation Begin
function generatePassword() {
  var password = "";
  var passwordChar = "";

  // Password Length Prompt Starts

  var length = parseInt(
    prompt(
      "How many characters would you like your password to have? Please pick between 8 and 128 characters."
    )
  );

  // Conditional statement for password length - will check if it's a number

  if (Number.isNaN(length)) {
    window.alert("Please provide a number for your password length.");
    return null;
  }

  if (length < 8) {
    alert("Please provide a password length greater than 8 characters.");
    return null;
  }

  if (length > 128) {
    window.alert("Please provide a password length less than 128 characters.");
    return null;
  }

  // Password Length Validation Start

  var confirmLength = window.confirm(
    "Confirm your selection of " + length + " characters."
  );

  // Password Length Validation Ends

  // Password Length Criteria Ends

  // Password Character Type Start

  // Question #1 - Lowercase Characters Start

  var confirmLower = window.confirm(
    "Do you want lowercase characters in your password?"
  );

  // If yes, grant lowercase letter confirmation
  if (confirmLower) {
    passwordChar += passwordLower;
  }

  // Question #1 - Lowercase Characters End

  // Question #2 - Uppercase Characters Start
  var confirmUpper = window.confirm(
    "Do you want uppercase characters in your password?"
  );
  // If yes, grant uppercase letter confirmation
  if (confirmUpper) {
    passwordChar += passwordUpper;
  } else {
  }

  // Question #2 - Uppercase Characters End

  // Question #3 - Numbers Start
  var confirmNumbers = window.confirm("Do you want numbers in your password?");

  // If yes, grant number letter confirmation
  if (confirmNumbers) {
    passwordChar += passwordNums;
  } else {
  }

  // Question #3 - Numbers End

  // Question #4 - Special Characters Start

  var confirmCharacters = window.confirm(
    "Do you want special characters in your password?"
  );

  // If yes, grant special character confirmation
  if (confirmCharacters) {
    passwordChar += passwordSpecial;
  } else {
  }

  if (
    confirmUpper === false &&
    confirmCharacters === false &&
    confirmLower === false &&
    confirmCharacters === false
  ) {
    window.alert(
      "You must choose at least one password character type for your password."
    );

    return null;
  }

  // Randomizer for Password
  for (var i = 0; i < length; i++) {
    password =
      password + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  console.log(password);
  return password;
}

// Function to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* TEST  Copy Function 
// Function to copy generated password to clipboard

function copy() {
  //Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();

  // For Mobile Devices
  copyText.setSelectionRange(0, 99999);

  // Copy the text inside the text field

  navigator.clipboard.writeText(copyText.value);

  // Alert the Copied Text

  alert("Copied the password to clipboard!");
}
*/