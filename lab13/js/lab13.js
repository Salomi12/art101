
/** 
// index.js - Lab 13: Loops
// Author: Salomi Galodamu
// Date: June 2 2023
**/

//  "FizzBuzz" function 
function fizzBuzz() {
  // console.log("Yes, my function is running.");
  // Loop through numbers 1 to 200
  for (var i=1; i<=200; i++) {
    // declare string
    var str = '';
    // number is a multiple of 3, print "Fizz!" (+= appends to the end of the sring)
    if (i % 3 == 0) {
      str += "Fizz";
    }
    // number is a multiple of 5,  print "Buzz!"
    if (i % 5 == 0) {
      str += "Buzz";
    }
    // is a multiple of 7, print "Boom!"
    if (i % 7 == 0) {
      str += "Boom";
    }
    // If the number is a multiple of more than one 3, 5 or 7,  print "FizzBuzz!" and so on.
    if (str == '') {
      str += i;
    } 
  
    $("#output").append("<p>" + str + "</p>")
  }
}
fizzBuzz();