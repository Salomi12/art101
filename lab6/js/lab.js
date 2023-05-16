
/** 
// index.js - Lab 6: Objects and Arrays
// Author: Salomi Galodamu
// Date: May 14 2023
**/

// Define Varialbes
myTransport = ["bicyle", "car" , "bus" , "ferry" , "amtrak" ];

// Create an Object for my main ride
myMainRide = {
  make: "Volkswagen",
  model: "Polo",
  color:"white",
  year: 2009, 
  age: function () {
    return 2023 - this.year;
  }
}

// Script Output 

console.log(myTransport);
console.log(myMainRide);

//Calculate 
age= 2023 - 2009;

    
document.writeln(" Types of transportation I use: " ,  myTransport , "</br>");
document.writeln("My Main Ride: <pre>" ,
    JSON.stringify(myMainRide, null, '\t'), "</pre");



                
                







 
    

// Functions


