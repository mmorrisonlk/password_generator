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

    if (Number.isInteger(passwordLength) == false) {
        window.alert("Please enter an integer value for password length");
        return;
    }

    if (passwordLength<8 || passwordLength>128) {
        window.alert("Invalid password length");
        return;
    }

    var userLower = window.prompt("Do you need a password that includes at least one lower case character? Respond Y or N");

    var userUpper = window.prompt("Do you need a password that includes at least one upper case character? Respond Y or N");

    var userNumeric = window.prompt("Do you need a password that includes at least one numeric character? Respond Y or N");
    
    var userSpecial = window.prompt("Do you need a password that includes at least one special character? Respond Y or N");

    var passwordLower = userLower.includes("y") || userLower.includes("Y");
    var passwordUpper = userUpper.includes("y") || userUpper.includes("Y");
    var passwordNumeric = userNumeric.includes("y") || userNumeric.includes ("Y");
    var passwordSpecial = userSpecial.includes("y") || userSpecial.includes ("Y");

    if (passwordLower === false && passwordUpper === false && passwordNumeric === false && passwordSpecial === false) {
        window.alert("No valid characters to create a password with please select 1 or more character types")
        return;
    }

    var passwordText = document.querySelector("#password");

    var globalCount = 0;
    // The goal of the following code is to establish the set of characters that the program can use to randomly generate the password from. One fun thing that I remembered is I had to use \ to except the standard usage of ", ', and \ so they didn't break the symbol string.
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbol = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

    function buildPassword(){
        if (globalCount < passwordLength) {
            globalCount++
                if (passwordLower === false && passwordNumeric === true){
                    if ((globalCount % 3) === 0 && passwordSpecial === true){
                        addingSpecial();
                    }
                    else if ((globalCount % 2) === 0 && passwordUpper === true){
                        addingUppercase();
                    }
                    else {
                        addingNumeric();
                    }
                }
                else if (passwordLower === false && passwordSpecial === true) {
                    if ((globalCount % 3) === 0 && passwordUpper === true){
                        addingUppercase();
                    }
                    else if ((globalCount % 2) === 0 && passwordNumeric === true){
                        addingNumeric();
                    }
                    else {
                        addingSpecial();
                    }
                }
                else if (passwordLower === false && passwordUpper === true) {
                    if ((globalCount % 3) === 0 && passwordSpecial === true){
                        addingSpecial();
                    }
                    else if ((globalCount % 2) === 0 && passwordNumeric === true){
                        addingNumeric();
                    }
                    else {
                        addingUppercase();
                    }
                }
                else if ((globalCount % 4) === 0 && passwordSpecial === true){
                addingSpecial();
                }
                else if ((globalCount % 3) === 0 && passwordUpper === true){
                addingUppercase();
                }
                else if ((globalCount % 2) === 0 && passwordNumeric === true){
                addingNumeric();
                }
                else {
                addingLowercase();
                }
        }
        else {
            console.log(passwordFinal)
            passwordText.value = passwordFinal;
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
    
    function addingNumeric() {
        passwordFinal += number[Math.floor(Math.random() * number.length)];
        buildPassword();
    }

    function addingSpecial() {
        passwordFinal += symbol[Math.floor(Math.random() * symbol.length)];
        buildPassword();
    }

    buildPassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
