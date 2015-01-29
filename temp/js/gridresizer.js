var fadeSpeed = 600;

function gridResizer() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  var $panel = $(".panel");
  $panel.css("display", "none");


  $panel.css("height", windowHeight);
  $panel.css("width", windowWidth);

  var gridPercent = 0.7;
  var $photogrid = $panel.find(".photogrid");
  var $photo = $photogrid.find(".photo");

  var gridHeight = gridPercent*windowHeight;
  var imageHeight = gridHeight/3; 
  var imageWidth = (imageHeight*(.786)); 

  var extraCushion = 10;
  var gridWidth = (imageWidth*3)+extraCushion; 

  $photo.css("height", imageHeight);
  $photo.css("width", imageWidth);

  var gridPadding = ((windowHeight-gridHeight))/2;
  $photogrid.css("padding-top", gridPadding);

  $photogrid.css("height", gridHeight);
  $photogrid.css("width", gridWidth);

  // $panel.css("display", "block");
  $panel.fadeIn(fadeSpeed);

};



$(document).ready(function() {
  gridResizer();
});


// update on window resize
$( window ).resize(function() {
  gridResizer();
});