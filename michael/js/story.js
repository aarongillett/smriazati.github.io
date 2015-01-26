
// grid resizer
function photoResizer() {
    
    var photoPercent, imageHeight, imageWidth;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var $post = $(".post");
    var $note = $post.find(".note");
    var $photo = $post.find(".photo img")
    var $overlay = $(".overlay");

    // OVERLAY
    // $overlay.css("height", windowHeight);
    // $overlay.css("width", windowWidth);

    // add some padding
    var gridWidth = 0.7*windowHeight; // X% of window height
    var imagePaddingOffset = 30;
    var gridPadding = ((windowHeight-gridWidth)-imagePaddingOffset)/2;
    $post.css("padding-top", gridPadding);
    $note.css("padding-top", gridPadding);

    function imageHeightCalculator(percentage) {
        
        var photoPercent = percentage; // percent of height of screen
        var imageHeight = photoPercent*windowHeight; // 
        var imageWidth = (imageHeight*(.8)); 

        // update post width to image width
        $post.css("width", imageWidth);

        // add image width, image height to photo element
        $photo.css("height", imageHeight);
        $photo.css("width", imageWidth);


        if ($(window).width() > 1000) {

            var noteWidth = imageWidth/1.5; // note is proportional to image 
            $note.find("img").css("width", noteWidth);

            var noteCenter = imageWidth/2; // center it
            var noteLeft = noteCenter - (imageWidth/1.5);
            var noteLeftPush = noteCenter - (imageWidth/1.25);
            var noteRight = noteCenter + (imageWidth/3.5);
            var noteRightPush = noteCenter + (imageWidth/2.5);

            $post.find(".left").css("left", noteLeft);
            $post.find(".left-push").css("left", noteLeftPush);
            $post.find(".right").css("left", noteRight);
            $post.find(".right-push").css("left", noteRightPush);

        } else {
            // set note noteWidth
            var noteWidth = imageWidth; 
            $note.find("img").css("width", noteWidth);
        }

        function closeButtonPos() {
            var closeOffset = imageWidth; 
            $post.find(".close").css("left", closeOffset);
        };

        closeButtonPos();
        
    }; 



  if ($(window).width() > 1000) {
    imageHeightCalculator(0.75);

  } else { // on small screens
    imageHeightCalculator(0.55);
    $note.css("padding-top", "0");// remove padding in case of resize
  }
};



$(function() {
  photoResizer();
  $(".post").hide().fadeIn(400);
});




// update on window resize
$( window ).resize(function() {
  photoResizer();
});

