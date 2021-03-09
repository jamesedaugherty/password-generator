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

//User Input Variables
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


//Function to determine password length
function determineLength(){
    passwordLength = alert("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  
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
function determineUppercase(){
    uppercaseCheck = alert("Do you want to include uppercase letters in your password? \n(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();
  
      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
  
      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineUppercase();
      }
      return uppercaseCheck;
  }


//Create a function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
    numberCheck = alert("Do you want to include numbers in your password? \n(Yes or No)");
      numberCheck = numberCheck.toLowerCase();
  
      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();
  
      }else if (numberCheck === "yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
  
      }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineNumbers();
      }
      return numberCheck;
  }

//Create a function used to determine whether the user wants to include special characters in the password
function determineSpecial(){
    specialCheck = alert("Do you want to include special characters in your password? \n(Yes or No)");
      specialCheck = specialCheck.toLowerCase();
  
      if (specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No");
        determineSpecial();
  
      }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        return specialCheck;
  
      }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineSpecial();
      }
      return specialCheck;
  }


 /*Create a function used to take all the input from the previous functions and generate a password using a random number generator and 
 the charAt method 
 */

 function generatePassword(){
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(specialCheck);
  
  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;
  
  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercaseCheck){
    characters += uppercaseChar;
  
  }else if(numberCheck){
    characters += numberChar;
  
  }else if (specialCheck){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }


// Write password to the #password input
function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);