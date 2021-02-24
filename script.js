// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var passwordLength = parseInt(window.prompt("Enter a number between 8 and 128 to determine password length:"), 10);

    if (Number.isInteger(passwordLength) == false) {
        window.alert("Please enter an integer value for Password Length")
        return;
    }

    if (passwordLength<8 || passwordLength>128) {
        window.alert("Invalid Password Length")
        return;
    }
    console.log(passwordLength);

    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
