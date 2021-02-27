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
    // The following pieces of code prompt the user to enter some responses to determine what characters the user needs for their password. This would probably be better as a set of check boxes but prompts are what I know how to do right now so I made it work.
    var userLower = window.prompt("Do you need a password that includes at least one lower case character? Respond Y or N");

    var userUpper = window.prompt("Do you need a password that includes at least one upper case character? Respond Y or N");

    var userNumeric = window.prompt("Do you need a password that includes at least one numeric character? Respond Y or N");
    
    var userSpecial = window.prompt("Do you need a password that includes at least one special character? Respond Y or N");
    // This code is used to simplify the responses into boolean values so that I can do easier comparisons later on when I am running the code. Its a bit of short cut but I chose to just have the program scan for the letter "y" both capital and lowercase as a shorthand for confirmation. It's not perfect but should work in most situations for catching most variations of yes and setting that value to true.
    var passwordLower = userLower.includes("y") || userLower.includes("Y");
    var passwordUpper = userUpper.includes("y") || userUpper.includes("Y");
    var passwordNumeric = userNumeric.includes("y") || userNumeric.includes ("Y");
    var passwordSpecial = userSpecial.includes("y") || userSpecial.includes ("Y");
    // Another quick sanity check to prompt the user to start over if they don't specify any characters to be used in the password.
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
    // Th bulk of the code. So I've unified it in to one function with a number of branching if statements. The key opening is that the function is declared as buildPassword and then it uses global count which immediately before this was set to 0. It then continues to loop the password building process until the global count is equivalent to the length of the password and thus the password has the desired number of characters
    function buildPassword(){
        if (globalCount < passwordLength) {
            globalCount++
            //First it always increments the global count so it will eventually break out of the if statement and display the password regardless of the path it takes throughout the decision tree. Next it will help to explain my organizational logic. Using what felt intuitively correct I prioritized the values in order of lower case > numbers > upper case > special characters. So this is how I organized all the decision trees
                if (passwordLower === false && passwordNumeric === true){
                    //I'm only going to explain one of these failsafe trees since it's more of the same. Since I assumed lower case was going to be the most common choice I placed it as the all else fails option at the very bottom and built exceptions off that. So failing anything else it will just go straight the bottom passwordlength number of times and assign a random lower case letter to the growing password string. Each of these decision trees are made in case lower isn't desired but one of the 3 others will instead form the base for the password. Thinking about it some of these are probably redundant but I don't want to go through the combinatorix to figure out which are extrenuous so I reproduced it for all options and know it (hopefully) won't break at one forgotten combination.
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
                // This is where the bulk of the statments will end up. This is kind of a cheat solution to get a "random" password. By setting each path to a different multiple I'm ensuring that it will at least show up twice in any valid password length. So at worst with only 8 characters 4 and 8 are multiples of 4 and thus will be replaced with special characters. Because that option executes first it won't falsely flag the multiple of 2 condition and have a chance of completly ignoring special characters despite being desired by the user. The alternative solution I was considering was trying to weight the different options depending on some random desirability amount, checking for the presence of all desired attributes and then rerolling until you got a valid password. Especially since I'm not sure how it would manage a situation where it keeps looping since it's missing x character type but by rerolling it keeps removing y character type which flags another reroll and repeats.
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
        // Once the password has reached the desired length it stops looping through and logs the complete password and then resets the password to an empty string so a new password isn't affected by left over code.
        else {
            console.log(passwordFinal)
            passwordText.value = passwordFinal;
            passwordFinal = "";
        }
    }
    // Each of the following functions adds a selected character type randomly to the passwordFinal variable which is what I have decided to use to store the growing password throughout the iterations. By building these as functions I'm at least removing some repetative code because once I've decided which code to execute in the main statement it pops it over to one of these functions before sending it back into the buildPassword function to determine what character to concatenate next. 
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
