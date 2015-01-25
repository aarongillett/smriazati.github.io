// grid resizer
function photoResizer() {
    
    var photoPercent, imageHeight, imageWidth;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var windowCenter = windowHeight/2;


    // OVERLAY
    $(".overlay").css("height", windowHeight);
    $(".overlay").css("width", windowWidth);

    // padding
    var gridPercent = 0.7; // matches home grid padding 
    var gridPadding = ((1-gridPercent)/2)*windowHeight;
    $(".post").css("padding-top", gridPadding);
    $(".note").css("padding-top", gridPadding);

    function imageHeightCalculator(percentage) {
        var photoPercent = percentage; // percent of height of screen
        var imageHeight = photoPercent*windowHeight; // 
        var imageWidth = (imageHeight*(.8)); 

        // update post width to image width
        $(".post").css("width", imageWidth);

        // add image width, image height to photo element
        $(".photo img").css("height", imageHeight);
        $(".photo img").css("width", imageWidth);


        if ($(window).width() > 1000) {
            // set note width
            var noteWidth = imageWidth/1.5; // note is proportional to image 
            $(".note img").css("width", noteWidth);

            // note overlap options
            var noteCenter = imageWidth/2; // center it
            var noteLeft = noteCenter - (imageWidth/1.5);
            var noteLeftPush = noteCenter - (imageWidth/1.25);
            var noteRight = noteCenter + (imageWidth/3.5);
            var noteRightPush = noteCenter + (imageWidth/2.5);

            $(".left").css("left", noteLeft);
            $(".left-push").css("left", noteLeftPush);
            $(".right").css("left", noteRight);
            $(".right-push").css("left", noteRightPush);
        } else {
            // set note noteWidth
            var noteWidth = imageWidth; 
            $(".note img").css("width", noteWidth);
        }

        function closeButtonPos() {
            var closeOffset = imageWidth; // its the width of the image ;)
            $(".close").css("left", closeOffset);
        };

        closeButtonPos();
        
    }; 



  if ($(window).width() > 1000) {
    imageHeightCalculator(0.75);

  } else { // on small screens
    imageHeightCalculator(0.55);
    $(".note").css("padding-top", "0");// remove padding in case of resize
  }
};




$(document).ready(function() {
  photoResizer();
  $(".post").hide().fadeIn(400);
});


// update on window resize
$( window ).resize(function() {
  photoResizer();
});

