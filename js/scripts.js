// alert("Welcome to my portfolio website");
// console.log(thisVariableDoesntExist); // Will output undefined
var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

function menuToggle() {

  var x = document.getElementById('myNavtoggle');

  if (x.className === 'navtoggle') {
    
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
