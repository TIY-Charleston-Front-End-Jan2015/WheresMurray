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
    $('i[data-index="'+ index +'"]').append(factText(myFact));
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


// Click on BICYCLE slides fact down
$(".fa-bicycle").on("click", function(){
  console.log("bicycle event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);

});

// Click on BUILDING??? What do we want it to do?
$(".fa-building").on("click", function(){
  console.log("building event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on TICKET slides fact down
$(".fa-ticket").on("click", function(){
  console.log("ticket event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on BUS slides fact down
$(".fa-bus").on("click", function(){
  console.log("bus event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on COFFEE slides fact down
$(".fa-coffee").on("click", function(){
  console.log("coffee event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on CAMERA slides fact down
$(".fa-camera").on("click", function(){
  console.log("camera event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on PLANE slides fact down
$(".fa-plane").on("click", function(){
  console.log("plane event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on BED slides fact down
$(".fa-bed").on("click", function(){
  console.log("bed event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on BEER slides fact down
$(".fa-beer").on("click", function(){
  console.log("beer event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on CUTLERY??? What do we want it to do?
$(".fa-cutlery").on("click", function(){
  console.log("cutlery event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on HOSPITAL-O slides fact down
$(".fa-hospital-o").on("click", function(){
  console.log("hospital-o event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});

// Click on SHIP slides fact down
$(".fa-ship").on("click", function(){
  console.log("ship event");

  var index = $(this).attr("data-index");
  console.log(index);
  $("data-index").slideDown(1000);
});


});
