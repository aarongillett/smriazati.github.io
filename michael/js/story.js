



// grid resizer
// still need to set max points here!!!


function photoResizer() {

  var windowHeight = $(window).height();
  var photoPercent = 0.8; // percent of height of screen
  var imageHeight = photoPercent*windowHeight; // 
  var imageWidth = (imageHeight*(.786)); 


  // add image width, image height to photo element
  $(".photo img").css("height", imageHeight);
  $(".photo img").css("width", imageWidth);

  var noteWidth = imageWidth/1.5; // note is proportional to image 
  $(".note img").css("width", noteWidth);

  // now for some padding
  var postPadding = ((1-photoPercent)/2)*windowHeight;
  $(".post").css("padding-bottom", postPadding);

  // horizontally center it


  // console.log("width " + imageWidth);
  // console.log("height " +  imageHeight);
};

$(document).ready(function() {
  photoResizer();
});


// update on window resize
$( window ).resize(function() {
  photoResizer();
});



// fade in 
$(document).ready(function() {
  $(".post").hide().fadeIn(1000);
});

