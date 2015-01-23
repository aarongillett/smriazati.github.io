

/*smooth scroll*/

    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// grid resizer
// still need to set max points here!!!


function gridResizer() {
  var windowHeight = $(window).height();
  var gridPercent = 0.7;
  var gridWidth = gridPercent*windowHeight; // The photogrid height is 90% of the current browser window. 
  var imageHeight = gridWidth/3; // The height of each image div is one third of the photogrid height. 
  var imageWidth = (imageHeight*(.786)); // The width of each image div is .786 of the height. 

  // padding
  var gridPadding = ((1-gridPercent)/2)*windowHeight;

  // add grid width, image width, image height to each element
  $(".photogrid").css("width", gridWidth);
  $(".photo").css("height", imageHeight);
  $(".photo").css("width", imageWidth);

  $(".photogrid").css("padding", gridPadding + "0");


  // console.log("grid width " + gridWidth);
  // console.log("width " + imageWidth);
  // console.log("height " +  imageHeight);
};

$(document).ready(function() {
  gridResizer();
});


// update on window resize
$( window ).resize(function() {
  gridResizer();
});




var fadeTime = 1100;

// fade in on load
$(document).ready(function() {
  $(".photogrid").hide().fadeIn(fadeTime*0.5);
});


// each grid fades so u don't see the scrolls

// fade on clicks
$('.down').click(function(){
    $(".photogrid").hide().fadeIn(fadeTime);
});

$('.up').click(function(){
    $(".photogrid").hide().fadeIn(fadeTime);
});

// fade on arrow keys
$(window).keydown(function(e) {
    if (e.keyCode == 40) {
      $(".photogrid").hide().fadeIn(fadeTime);
    }
    else if (e.keyCode == 38) {
      $(".photogrid").hide().fadeIn(fadeTime);
    }
});


// mouse wheel plugin
$('.photogrid').on('mousewheel', function(event) {
      $(".photogrid").hide().fadeIn(500);
});


