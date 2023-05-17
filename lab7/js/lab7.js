/** 
// index.js - Lab 7: Functions
// Author: Salomi Galodamu
// Date: May 16 2023
**/

// Define Variables

function sortStr(str) {
    var strArray = str.split("");
    var sortedArray = strArray.sort();
    var sortedStr = sortedArray.join ("");
    return sortedStr;

}
    
var str =  "Salomi Galodamu"

//call the function

var sortedStr = sortStr(str)

document.writeln("sorted string list"+ sortedStr);




