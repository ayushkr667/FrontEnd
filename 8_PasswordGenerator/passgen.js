var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var small = "abcdefghijklmnopqrstuvwxyz";
var digit = "0123456789";
var special = "!@#$%^&*";

var keylist = caps + small + digit + special;

var temp = " ";
function generatePassword(passLength) {
  temp = " ";
  for (let i = 0; i < passLength; i++) {
    temp += keylist.charAt(Math.floor(Math.random() * keylist.length));
  }
  return temp;
}

function populateForm(enterLength) {
  document.passGen.output.value = generatePassword(enterLength);
}

// console.log(Math.floor(Math.random() * 5));
