# password_generator

https://mmorrisonlk.github.io/password_generator/

![Deployed Site](https://github.com/mmorrisonlk/password_generator/blob/main/assets/passwordGenerator.png?raw=true "Deployed to the Web")

So my first thought is to get the prompts working. So my point of attack is going to involve establishing variables to store the user's choices in regards to their password requirements. Then I need to make the app able to use this information in a useful way.

Alright, first hurdle is over. I have the website prompting the user for their password requirements and then storing that information to be used. I have a few ideas as to how I might make the prompts more resiliant to poor options but I'm going to focus on random generation of a password without parameters first.

So I settled on snippets of code that will enable the program to randomly select a character from a set of predefined characters. Then it adds that random character to the password string. This process is repeated until the password reaches the desired length. I initially got this working building monotype passwords before trying to determine a way to build a password with all 4 character types.

Then my focus was on setting up an else if tree that will compare the user inputs to different boolean values to determine what function it needs to run. I settled on a kind of cheat solution to get a "random" password. By setting each path to a different multiple I'm ensuring that it will at least show up twice in any valid password length. So at worst with only 8 characters 4 and 8 are multiples of 4 and thus will be replaced with special characters. Because that option executes first it won't falsely flag the multiple of 2 condition and have a chance of completly ignoring special characters despite being desired by the user. The alternative solution I was considering was trying to weight the different options depending on some random desirability amount, checking for the presence of all desired attributes and then rerolling until you got a valid password. But I wasnt sure how it would manage a situation where it keeps looping since it's missing x character type but by rerolling it keeps removing y character type which flags another reroll and repeats.

So I wasn't sure of how to code it to be more random and just check for the presence of each desired character at least showing up once because I wasn't sure how best to resolve that missing character without changing password length or removing another desired character. So I have sacrificed some amount of randomness by forcing certain characters to occupy certain spots in the password such that I don't have to worry about the back checking the password for validity. So the password isn't as secure as it could be but the alternatives I could think of also sacrificed security with their solutions.

At this point its just ensuring that it handles a variety of inputs and doesn't break. It "should" be bug free for the purpose of the assignment but I recognize I have not fully proofed the inputs against nonsense responses. 
