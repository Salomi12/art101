
/** 
// index.js - Lab 9: Javascript for the Web
// Author: Salomi Galodamu
// Date: May 22 2023
**/

// Personal Script

window.onload = function () {

    // script included below

    // Implementing getElementById() to find your output <div> and assign it to a variable outputEl 
    var outputEl = document.getElementById("output");
    console.log("output:",output);

    // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
    var new1El = document.createElement("p");

    // Change the html attribute of new1El to say "something new.""
    new1El.innerHTML = "Shrimp Connosseur";
    new1El.id = "Shrimp Connosseur";

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var new2El = document.createElement("p");

    // Change the html attribute of new1El to say "something else.""
    new2El.innerHTML = "Boxing Day";
    new2El.id = "new-new";

    // Append both new elements one at a time using appendChild() (step 3)
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    // Change the css attributes of at least two elements of your page
    new1El.style.color = "green";
    new1El.style.fontsize = "80px";
    outputEl.style.border = "dotted 5px orange";

    outputEl.className = "changed";
}