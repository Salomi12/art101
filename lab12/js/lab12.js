
/** 
// index.js - Lab 9: Anon and Callbacks
// Author: Salomi Galodamu
// Date: May 17 2023
**/

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

//nameSort() functions from lab 7
function reorderUserName(word) {
  var wordArray = word.toLowerCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}
// return string in Title Case
// aid from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}







                
                







 
    


