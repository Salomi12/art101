
/** 
// index.js - Lab 16: JSON and APIs
// Author: Salomi Galodamu
// Date: June 6 2023
**/

// $.ajax() method
$.ajax({

  url: "https://xkcd.com/info.0.json",
  data: { 
          id:2786,
        },
  type: "GET",
  dataType : "json",
  success: function(comicObj) {

  //adding comicObj 
     console.log(data);
     var title= data.title
     var imgURL= data.imgage

     $("#output").html("<h2>" + comicObj.title);
     $("#output").append("<img src=" + imgURL + ">");

  
     
  }
})







                
                







 
    


