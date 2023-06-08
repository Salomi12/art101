
/** 
// index.js - Lab 10: Javascript Event and Forms
// Author: Salomi Galodamu
// Date: June 2 2023
**/

//step 1 in using nameArraySort functions from lab 7 
function sortUserName(userName) {
  // split the array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //  userName.toLower().split("").sort().join("")
  return nameSorted;
}

// adding button
  var button = document.getElementById('my-button');
  button.addEventListener('click', function() {
  console.log("username.");

  //retrieving 'username' id value
  inputValue = document.getElementById('user-name').value;

  //create sorted username variable and print results
  var sortedName = sortUserName(inputValue);
  console.log("username", sortedName);
  document.getElementById("output").innerHTML = sortedName;
  })



// // lesson plan run through example

// var buttonEl = document.getElementByID("my-button");
// button.addEventListener("click", function(){
//   var inputEl = document.getElementById("my-input");
//   var value = inputEl.value;
//   console.log(value);
//   var newEL = document.createElement("div");
//   newEL.innerHTML = value;
//   document.getElementById("output").appendChild(newEL);
//   inputEl.value = "";
// })












                
                







 
    


