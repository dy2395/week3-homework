// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define password generating function
function generatePassword(){

  var charSet = "";
  var password = "";

  // Ask the user to choose a length of password and validate the answer:
  var passwordlength = window.prompt("Choose a length of password? Enter a number between 8 and 128:");
  passwordlength = Number (passwordlength);
  if (isNaN(passwordlength)|| passwordlength < 8 || passwordlength > 128) {
    window.alert('Must enter a number between 8 and 128.'); 
    return generatePassword();
  }

  // Ask the user to include lowercase letters or not and validate the answer:
  var lowercase = window.prompt('Do you want to include lowercase letters? Enter "yes" or "no":');
  lowercase = lowercase.toLowerCase();
  if (lowercase == "yes") {
      charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  else if (lowercase != "no"){
    window.alert('Must enter "yes" or "no".');
    return generatePassword();
  }

  // Ask the user to include uppercase letters or not and validate the answer:
  var uppercase = window.prompt('Do you want to include uppercase letters? Enter "yes" or "no":');
  uppercase = uppercase.toLowerCase();
  if (uppercase == "yes") {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (uppercase != "no"){
    window.alert('Must enter "yes" or "no".');
    return generatePassword();
  }

  // Ask the user to include numeric characters or not and validate the answer:
  var numeric = window.prompt('Do you want to include numbers? Enter "yes" or "no":');
  numeric = numeric.toLowerCase();
  if (numeric == "yes") {
    charSet += "0123456789";
  }
  else if (numeric !="no"){
    window.alert('Must enter "yes" or "no".');
    return generatePassword();
  }

  // Ask the user to include special characters or not and validate the answer:
  var special = window.prompt('Do you want to include special characters? Enter "yes" or "no":')
  special = special.toLowerCase();
  if (special == "yes") {
        charSet += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      }
  else if (special !="no"){
    window.alert('Must enter "yes" or "no".');
    return generatePassword();
  }
  
  // To check if at least one character type is selected:
  if (lowercase == "no" && uppercase == "no" && numeric == "no" && special == "no"){
    window.alert('At least one character type should be selected.');
    return generatePassword();
  }
  // Generate the password: 
  else {
    for(var i=0;i<passwordlength;i++){
      var randomNumber = Math.floor(Math.random()*charSet.length);
      password += charSet.substring(randomNumber,randomNumber+1);
    }
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
