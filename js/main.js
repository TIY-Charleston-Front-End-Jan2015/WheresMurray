var murrayFacts = {

  init: function() {
    murrayFacts.initStyling();
    murrayFacts.initEvents();
  },

  initStyling: function() {
    murrayFacts.renderAllFacts(myObject);
  },

  initEvents: function() {

  },

  renderFact: function(myFact, index, array) {
    myFact.idx = index;
    var factText = _.template(templates.murrayFacts);
    console.log(factText, myFact);
    // Will need to replace .fa
    $('i[data-index="'+ index +'"]').after(factText(myFact));
  },

  renderAllFacts: function(myFacts) {
    _.each(myFacts, murrayFacts.renderFact);
  }
};


$(document).ready(function() {

  murrayFacts.init();

// When mouse enters the logo img the instructions will fade in on the header
  $(".logo img").on("mouseenter", function(){
    console.log("instructions fadeIn");
    $(".logo p").fadeIn(1000);
  });

//////// CLICK EVENTS DO NOT WORK YET ///////////


// Double click on BICYCLE shows fact
$(".fa-bicycle").on("dblclick", function(){
  console.log("bicycle event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-bicycle").siblings().removeClass("slide-down");
});

// Click on BICYCLE hides fact
$(".fa-bicycle").on("click", function(){
  console.log("bicycle event");

  var index = $(this).attr("data-index");
  console.log(index);
  
  $(".fa-bicycle").siblings().addClass("slide-down");
});

// Double click on BUILDING shows fact
$(".fa-building").on("dblclick", function(){
  console.log("building event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-building").siblings().removeClass("slide-down");
});

// Click on BUILDING hides fact
$(".fa-building").on("click", function(){
  console.log("building event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-building").siblings().addClass("slide-down");
});

// Double click on TICKET shows fact
$(".fa-ticket").on("dblclick", function(){
  console.log("ticket event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-ticket").siblings().removeClass("slide-down");
});

// Click on TICKET hides fact
$(".fa-ticket").on("click", function(){
  console.log("ticket event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-ticket").siblings().addClass("slide-down");
});

// Double click on BUS shows fact
$(".fa-bus").on("dblclick", function(){
  console.log("bus event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-bus").siblings().removeClass("slide-down");
});

// Click on BUS hides fact
$(".fa-bus").on("click", function(){
  console.log("bus event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-bus").siblings().addClass("slide-down");
});

// Double click on COFFEE shows fact
$(".fa-coffee").on("dblclick", function(){
  console.log("coffee event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-coffee").siblings().removeClass("slide-down");
});

// Click on COFFEE hides fact
$(".fa-coffee").on("click", function(){
  console.log("coffee event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-coffee").siblings().addClass("slide-down");
});

// Double click on CAMERA shows fact
$(".fa-camera").on("dblclick", function(){
  console.log("camera event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-camera").siblings().removeClass("slide-down");
});

// Click on CAMERA hides fact
$(".fa-camera").on("click", function(){
  console.log("camera event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-camera").siblings().addClass("slide-down");
});

// Double click on PLANE shows fact
$(".fa-plane").on("dblclick", function(){
  console.log("plane event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-plane").siblings().removeClass("slide-down");
});

// Click on PLANE hides fact
$(".fa-plane").on("click", function(){
  console.log("plane event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-plane").siblings().addClass("slide-down");
});

// Double click on BED shows fact
$(".fa-bed").on("dblclick", function(){
  console.log("bed event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-bed").siblings().removeClass("slide-down");
});

// Click on BED hides fact
$(".fa-bed").on("click", function(){
  console.log("bed event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-bed").siblings().addClass("slide-down");
});

// Double click on BEER shows fact
$(".fa-beer").on("dblclick", function(){
  console.log("beer event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-beer").siblings().removeClass("slide-down");
});

// Click on BEER hides fact
$(".fa-beer").on("click", function(){
  console.log("beer event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-beer").siblings().addClass("slide-down");
});

// Double click on CUTLERY shows Bill Murray
$(".fa-cutlery").on("dblclick", function(){
  console.log("cutlery event");
  $(".fa-cutlery").siblings().removeClass("foundbill");
});

// Click on CUTLERY hides fact
$(".fa-cutlery").on("click", function(){
  console.log("cutlery event");

  $(".fa-cutlery").siblings().addClass("foundbill");
});

// Double click on HOSPITAL-O shows fact
$(".fa-hospital-o").on("dblclick", function(){
  console.log("hospital-o event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-hospital-o").siblings().removeClass("slide-down");
});

// Click on HOSPITAL-O hides fact
$(".fa-hospital-o").on("click", function(){
  console.log("hospital-o event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-hospital-o").siblings().addClass("slide-down");
});

// Double click on SHIP shows fact
$(".fa-ship").on("dblclick", function(){
  console.log("ship event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-ship").siblings().removeClass("slide-down");
});

// Click on SHIP hides fact
$(".fa-ship").on("click", function(){
  console.log("ship event");

  var index = $(this).attr("data-index");
  console.log(index);
  $(".fa-ship").siblings().addClass("slide-down");
});


});
