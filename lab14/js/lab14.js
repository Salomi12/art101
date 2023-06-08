
/** 
// index.js - Lab 14: Debugging
// Author: Salomi Galodamu
// Date: May 17 2023
**/

// Beginning of Anon Function 

 // Loop through numbers 1 to 200, start to end
 for (var i=1; i<=200; i++) {
    
  // If  a multiple of 3, print "Fizz!"
  if (i % 3 == 0) {
    console.log("Fizz");
    $("#output").append("<div>" + str + "Fizz")
  }
  // If a multiple of 5, print "Buzz!"
  if (i % 5 == 0) {
    console.log("Fuzz");
    $("#output").append("<div>" + str + "Buzz")
  }
  // If a multiple of 7, print "Boom!"
  if (i % 7 == 0) {
    console.log("Boom");
    $("#output").append("<div>" + str + "Boom")
  }
  // If multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. 
  if (str == '') {
    str += i;
  } else {
    str += "!";
  }
  debugger;
  $("#output").append("<p>" + str + "</p>")
}

fizzBuzz();








                
                







 
    


