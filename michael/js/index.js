var windowHeight = $(window).height();
var windowWidth = $(window).width();

var fadeSpeed = 800;
var fadeOutSpeed = fadeSpeed*0.5;
var maxWindowHeight = windowHeight*4;

var currentScroll;

function backToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 1)
};




function showNext() {
  $grid = $("#grid");

  var currentScroll = $(window).scrollTop();

  function changeScrollDown() {
    // $(this).hide();
    var scrollDestination = windowHeight + currentScroll;
    scrollPosition = scrollDestination;
    if (scrollDestination < maxWindowHeight) {
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
     }
     console.log("changeScrollDown function");
  };


  if (currentScroll != (maxWindowHeight-windowHeight)) {
    $grid.fadeOut(fadeOutSpeed, changeScrollDown);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition); 
  } else {
    $grid.fadeOut(fadeOutSpeed, backToTop);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition); 
  }
}


function showPrev() {
  $grid = $("#grid");

  var currentScroll = $(window).scrollTop();

  function changeScrollUp() {
    var scrollDestination = currentScroll - windowHeight;
    scrollPosition = scrollDestination;
    if (scrollDestination < maxWindowHeight) {
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
    } 
  };

  if (currentScroll != 0) {
    $grid.fadeOut(fadeOutSpeed, changeScrollUp);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition);   
  }
}

var windowHeight_old = 0;
var scrollPosition = 0;

function windowResize() {
  var windowHeight_new = $(window).height();

  var s = windowHeight_new / windowHeight_old;

  var newScrollPos = scrollPosition * s;

  // scrollToPos(newScrollPos);
  if (newScrollPos < maxWindowHeight) {
    $('html, body').animate({
        scrollTop: newScrollPos
    }, 1);
  }

  windowHeight_old = windowHeight_new;
}


// update on window resize
$( window ).resize(function() {
  windowResize();
});


// function windowResetter() {
//   // window resetter
//   // to lock panel to top of panel if window is resized

//   // calculate panel tops
//   // each panel's top is window height * 1, 2, 3, 4
//   var panelATop = 0;
//   var panelBTop = windowHeight*1;
//   var panelCTop = windowHeight*2;
//   var panelDTop = windowHeight*3;

//   // get scroll position
//   var currentScroll = $(window).scrollTop();
//   console.log(currentScroll);

//   // if scroll position is in certain range
//   // set it to the top

//   if (currentScroll > panelATop && currentScroll < panelBTop) {
//       $('html, body').animate({
//           scrollTop: panelATop
//       }, 1);
//       console.log("reset A");
//   } else if (currentScroll > panelBTop && currentScroll < panelCTop) {
//       $('html, body').animate({
//           scrollTop: panelBTop
//       }, 1);
//       console.log("reset B");
//   } else if (currentScroll > panelCTop && currentScroll < panelDTop) {
//       $('html, body').animate({
//           scrollTop: panelCTop
//       }, 1);
//       console.log("reset c");
//   } else if (currentScroll > panelDTop) {
//       $('html, body').animate({
//           scrollTop: panelDTop
//       }, 1);
//       console.log("reset D");
//   }

// }



// $(document).ready(function() {
//   windowResetter();
// });




// add other events
// key press
jQuery(function () {
  $(document).keydown(function (evt) {
    if (evt.keyCode == 40 || evt.keyCode == 34 || evt.keyCode == 39 ) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      showNext(); // scroll to the next new heading instead
    }

    if (evt.keyCode == 38 || evt.keyCode == 33 || evt.keyCode == 37){
      evt.preventDefault(); // prevents the usual scrolling behaviour
      showPrev(); // scroll to the next new heading instead
    }
  });
});


// mouse wheel

var mouseWheelTransition = false; 

//On mousewheel
if (document.addEventListener) {
  // IE9, Chrome, Safari, Opera
  document.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  document.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else document.attachEvent("onmousewheel", MouseWheelHandler);

var mouseWheelTimeOut; 
function MouseWheelHandler(e) {
  e.preventDefault(); 

  if(mouseWheelTransition)
    return;

  // cross-browser wheel delta
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  // window.clearTimeout(mouseWheelTimeOut);
  // mouseWheelTimeOut = window.setTimeout(resetMouseWheelTransition, 2-0); 


  if (!mouseWheelTransition){
    if (delta == -1)
      showNext(); 
    if (delta == 1)
      showPrev(); 
  }
    
  mouseWheelTransition = true; 

}

function resetMouseWheelTransition(){
  mouseWheelTransition = false; 
}

