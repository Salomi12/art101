/** 
// index.js - Lab 8: Anon and Callbacks
// Author: Salomi Galodamu
// Date: May 17 2023
**/

// Beginning of Anon Function 

function isEven(x) {
    return (x % 2 ==0);
}

// test function
console.log("Is 3 even?", isEven(3));
console.log("Is 24 even?", isEven(24));

array=[17,24,98,72,63,85]
console.log("Array above",array);

var result = array.map(isEven)
console.log("Test my arrays evenness", result);

var a = [17,24,98,72,63,85];

function mapPlay(x) {
  return Math.sqrt(x);

}

var results=a.map(mapPlay);

console.log(results);







                
                







 
    


