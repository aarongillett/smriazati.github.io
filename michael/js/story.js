



// grid resizer

// If the screen is smaller than the med-bp, 
// the photo percent is .5 and there is no bottom padding


function photoResizer() {

  var windowHeight = $(window).height();

  if ($(window).width() > 1000) {

    var photoPercent = 0.8; // percent of height of screen
    var imageHeight = photoPercent*windowHeight; // 
    var imageWidth = (imageHeight*(.8)); 


    // add image width, image height to photo element
    $(".photo img").css("height", imageHeight);
    $(".photo img").css("width", imageWidth);

    var noteWidth = imageWidth/1.5; // note is proportional to image 
    $(".note img").css("width", noteWidth);

    // now for some padding
    var postPadding = ((1-photoPercent)/2)*windowHeight;
    $(".post").css("padding-bottom", postPadding);

  } else {

    var photoPercent = 0.55; // percent of height of screen
    var imageHeight = photoPercent*windowHeight; // 
    var imageWidth = (imageHeight*(.8)); 


    // add image width, image height to photo element
    $(".photo img").css("height", imageHeight);
    $(".photo img").css("width", imageWidth);


    var noteWidth = imageWidth/(1.25); // note is proportional to image 
    $(".note img").css("width", noteWidth);

    // no padding
    $(".post").css("padding-bottom", "0");

  }





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

