// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // This piece of code prompts the user to enter a value for how long of a password they want to generate. It then does 2 sanity checks to test if the number converts to an integer so the can't enter things like "eight" to potentially confuse it let alone nonsense answers and if the number supplied is within the bounds of 8 to 128.
    var passwordLength = parseInt(window.prompt("Enter a number between 8 and 128 to determine password length:"), 10);

    if (Number.isInteger(passwordLength) == false) {
        window.alert("Please enter an integer value for Password Length");
        return;
    }

    if (passwordLength<8 || passwordLength>128) {
        window.alert("Invalid Password Length");
        return;
    }

    var userLower = window.prompt("Do you need a password that includes at least one Lower case leter?");

    var passwordLower = userLower.includes("y");
    console.log(passwordLower);

    var userUpper = window.prompt("Do you need a password that includes at least one Upper case leter?");

    var passwordUpper = userUpper.includes("y");
    console.log(passwordUpper);

    var userNumeric = window.prompt("Do you need a password that includes at least one Numeric Character?");
    
    var passwordNumeric = userNumeric.includes("y");
    console.log(passwordNumeric);

    var userSpecial = window.prompt("Do you need a password that includes at least one Special Character?");

    var passwordSpecial = userSpecial.includes("y");
    console.log(passwordSpecial);

    console.log(passwordLength);

    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
