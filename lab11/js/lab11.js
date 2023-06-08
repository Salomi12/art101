/** 
// index.js - Lab 11: Libraries and jQuery
// Author: Salomi Galodamu
// Date: May 17 2023
**/

//adding buttons using jQuery to each section: challenge,problems and results 
// $(".challenge").append("<button id='my-button'>press me!</button>")
// $(".problems").append("<button id='my-button'>press me!</button>")
// $(".results").append("<button id='my-button'>press me!</button>")


// added buttons to sections above with highlight element
$(".sectionbox").append("<button class='highlight-button'>press me</button>");

//click handler to each section of the page
$(".highlight-button").click(function(){
  $(this).parent().toggleClass("special");
})







                
                







 
    


