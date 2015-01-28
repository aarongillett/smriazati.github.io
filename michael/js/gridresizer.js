var fadeSpeed = 600;

function gridResizer() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  var gridPercent = 0.7;

  var $panel = $(".panel");

  var $photogrid = $panel.find(".photogrid");
  var $photo = $photogrid.find(".photo");

  var gridHeight = gridPercent*windowHeight;
  var imageHeight = gridHeight/3; // image is 1/3 of grid height
  var imageWidth = (imageHeight*(.786)); // image width is proportional
  var gridWidth = imageWidth*3; // X% of window height


  $panel.css("height", windowHeight);
  $panel.css("width", windowWidth);


  $photo.css("height", imageHeight);
  $photo.css("width", imageWidth);

  var gridPadding = ((windowHeight-gridHeight))/2;
  $photogrid.css("padding-top", gridPadding);

  $photogrid.css("height", gridHeight);
  $photogrid.css("width", gridWidth);

};



$(document).ready(function() {
  var $panel = $(".panel");

  $panel.hide();

  gridResizer();

  $panel.fadeIn(fadeSpeed);
});


// update on window resize
$( window ).resize(function() {
  gridResizer();
});