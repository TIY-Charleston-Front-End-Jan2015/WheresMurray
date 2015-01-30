$(document).ready(function() {

// When mouse enters the logo img the instructions will fade in on the header
  $(".logo img").on("mouseenter", function(){
    console.log("instructions fadeIn");
    $(".logo p").fadeIn(1000);
  });

});
