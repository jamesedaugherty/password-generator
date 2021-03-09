// Assignment Code
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page 
*/ 

//Create variables 
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


//Create a function to determine password length
function determineLength(){
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  
      if (passwordLength<8){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else if (passwordLength>128){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else{
      alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
      }
      return passwordLength;
  }
  


//Create a function used to determine whether the user wants to include uppercase characters



//Create a function used to determine whether the user wants to include numbers in the password



//Create a function used to determine whether the user wants to include special characters in the password



 /*Create a function used to take all the input from the previous functions and generate a password using a random number generator and 
 the charAt method 
 */



// Write password to the #password input



// Add event listener to generate button
