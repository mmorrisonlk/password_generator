// Assignment Code
var generateBtn = document.querySelector("#generate");

// This should give the program a variety of characters to pull from randomly to generate the password
// const passKeys = {
// 	lowercase: 'abcdefghijklmnopqrstuvwxyz',
// 	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 	number: '0123456789',
// 	symbol: '*;<>()[]{}#$?!^|'
// };

var passwordFinal = "";

// Write password to the #password input
function writePassword() {
    // This piece of code prompts the user to enter a value for how long of a password they want to generate. It then does 2 sanity checks to test if the number converts to an integer so the can't enter things like "eight" to potentially confuse it let alone nonsense answers and if the number supplied is within the bounds of 8 to 128.
    var passwordLength = parseInt(window.prompt("Enter a number between 8 and 128 to determine password length:"), 10);
    // The goal of the following code is to establish the set of characters that the program can use to randomly generate the password from. One fun thing that I remembered is I had to use \ to except the standard usage of ", ', and \ so they didn't break the symbol string.
    var userLower = window.prompt("Do you need a password that includes at least one Lower case leter?");

    var userUpper = window.prompt("Do you need a password that includes at least one Upper case leter?");

    var userNumeric = window.prompt("Do you need a password that includes at least one Numeric Character?");
    
    var userSpecial = window.prompt("Do you need a password that includes at least one Special Character?");

    var passwordLower = userLower.includes("y");
    var passwordUpper = userUpper.includes("y");
    var passwordNumeric = userNumeric.includes("y");
    var passwordSpecial = userSpecial.includes("y");

    var globalCount = 0;
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbol = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    
    if (Number.isInteger(passwordLength) == false) {
        window.alert("Please enter an integer value for Password Length");
        return;
    }

    if (passwordLength<8 || passwordLength>128) {
        window.alert("Invalid Password Length");
        return;
    }

    function buildPassword(){
        if (globalCount < passwordLength) {
            globalCount++
            // addingLowercase();
            // addingUppercase();
            // addingNumber();
            // addingSymbol();
        }
        else {
            console.log(passwordFinal)
            passwordFinal = "";
        }
    }
    // Each of the following functions adds a selected character type to the passwordFinal variable which is what I have decided to use to store the growing password throughout the iterations. 
    function addingLowercase() {
        passwordFinal += lowercase[Math.floor(Math.random() * lowercase.length)];
        buildPassword();
    }

    function addingUppercase() {
        passwordFinal += uppercase[Math.floor(Math.random() * uppercase.length)];
        buildPassword();
    }
    
    function addingNumber() {
        passwordFinal += number[Math.floor(Math.random() * number.length)];
        buildPassword();
    }

    function addingSymbol() {
        passwordFinal += symbol[Math.floor(Math.random() * symbol.length)];
        buildPassword();
    }

    buildPassword();

    // console.log(passwordLength);

    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
