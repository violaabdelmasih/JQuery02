"use strict"; 

$(document).ready(function(){
    $("button").click(function(){
      $("h1, p").toggleClass("main");
    });
  }); 
  
  $('.carousel').carousel({
        interval: 1800
      })
      

  $('#myCarousel').on('slide.bs.carousel', function () {
    $("p").toggleClass("hide");
    });
