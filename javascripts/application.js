$(document).ready(function(){
  
  $("#random_letter").html(randomLetter());
  
});

function randomLetter() {
  var charCodeForLowerA = 97;
  var charCodeForLowerZ = 122;
  var randomCharCode = charCodeForLowerA + Math.floor(Math.random() * ((charCodeForLowerZ - charCodeForLowerA) + 1));
 
  return String.fromCharCode(randomCharCode);
}