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
  $("p").slideDown(1000);
});

// Click on TICKET slides fact down
$(".fa-ticket").eq(1).on("click", function(){
  console.log("ticket event");
  $("p").slideDown(1000);
});

// Click on BUS slides fact down
$(".fa-bus").eq(5).on("click", function(){
  console.log("bus event");
  $("p").slideDown(1000);
});

// Click on COFFEE slides fact down
$(".fa-coffee").eq(7).on("click", function(){
  console.log("coffee event");
  $("p").slideDown(1000);
});

// Click on CAMERA slides fact down
$(".fa-camera").eq(8).on("click", function(){
  console.log("camera event");
  $("p").slideDown(1000);
});

// Click on PLANE slides fact down
$(".fa-plane").eq(3).on("click", function(){
  console.log("plane event");
  $("p").slideDown(1000);
});

// Click on BED slides fact down
$(".fa-bed").eq(6).on("click", function(){
  console.log("bed event");
  $("p").slideDown(1000);
});

// Click on BEER slides fact down
$(".fa-beer").eq(4).on("click", function(){
  console.log("beer event");
  $("p").slideDown(1000);
});

// Click on CUTLERY??? What do we want it to do?
$(".fa-cutlery").eq().on("click", function(){
  console.log("cutlery event");
  $("p").slideDown(1000);
});

// Click on HOSPITAL-O slides fact down
$(".fa-hospital-o").eq(9).on("click", function(){
  console.log("hospital-o event");
  $("p").slideDown(1000);
});

// Click on SHIP slides fact down
$(".fa-ship").eq(0).on("click", function(){
  console.log("ship event");
  $("p").slideDown(1000);
});


});
