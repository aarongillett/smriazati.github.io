function gridResizer() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var gridPercent = 0.7;

  var $photogrid = $(".photogrid");
  var $photo = $photogrid.find(".photo");

      var gridWidth = gridPercent*windowHeight; // X% of window height
      var imageHeight = gridWidth/3; // image is 1/3 of grid height
      var imageWidth = (imageHeight*(.786)); // image width is proportional


      // add width to grid, add image dimensions
      $photogrid.css("width", (gridWidth));
      $photo.css("height", imageHeight);
      $photo.css("width", imageWidth);

      // add some padding
      var gridPadding = ((windowHeight-gridWidth))/2;
      $photogrid.css("padding-top", gridPadding);

      // add height for scrolling function
      $photogrid.css("height", windowHeight);

      // center fixed grids
      $photogrid.css("padding-left", (windowWidth-gridWidth)/2)
};





$(document).ready(function() {
  $(".photogrid").hide();
  gridResizer();
  $(".photogrid").fadeIn(500);
});


// update on window resize
$( window ).resize(function() {
  gridResizer();
});