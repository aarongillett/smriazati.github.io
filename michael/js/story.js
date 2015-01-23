// grid resizer


function photoResizer() {

  var windowHeight = $(window).height();
  var windowCenter = windowHeight/2;

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

    // and we can place the note super perfectly
    var noteCenter = imageWidth/2; // center it
    var noteLeft = noteCenter - (imageWidth/1.5);
    var noteLeftPush = noteCenter - (imageWidth/1.25);
    var noteRight = noteCenter + (imageWidth/3.5);
    var noteRightPush = noteCenter + (imageWidth/2.5);


    $(".left").css("left", noteLeft);
    $(".left-push").css("left", noteLeftPush);
    $(".right").css("left", noteRight);
    $(".right-push").css("left", noteRightPush);


  } else { // on small screens

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

