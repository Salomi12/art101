
/** 
// index.js - Lab 12: Conditionals
// Author: Salomi Galodamu
// Date: June 2 2023
**/

//returning houses: Hufflepuff, Gryffindor, Ravenclaw, Slytherin
function sortingHat(str){
    len= str.length;
    mod= len % 4;
    if (mod==0) {
      return "Hufflepuffer"
    }
    else if (mod==1) {
      return "GryffinDori"
    }
    else if (mod=2) {
      return "Ravenclawrette"
    }
    else if (mod=3)
      return "Slytherinsss"
  }

//attach link listener and results to sortingHat(name)
  $("#button").click(function(){
    var name =document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p> Sorting Hat Says " + house + "<p>";
    document.getElementById("output").innerHTML = newText;
  })











                
                







 
    


