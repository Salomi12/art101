
/** 
// index.js - Lab 9: Anon and Callbacks
// Author: Salomi Galodamu
// Date: May 17 2023
**/

// Beginning of Anon Function 

function sortUserName(userName) {
  // split the array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array and join with a string
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //  userName.toLower().split("").sort().join("")
  return nameSorted;
}

// button element
var buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

//change the text from Output to user's name
var userName=inputEl.value;

// Event listener to button
buttonEl.addEventListener('click', function () {
  console.log("username")
  var sortedName = sortUserName(inputEl);
  console.log("Results", sortedName);
  document.getElementById("output").innerHTML = sortedName;
  var userName=inputEl.value;
});









                
                







 
    


