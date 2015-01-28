var windowHeight = $(window).height();
var windowWidth = $(window).width();

var fadeSpeed = 800;
var fadeOutSpeed = fadeSpeed*0.5;
var maxWindowHeight = windowHeight*4;

var currentScroll = $(window).scrollTop();

var scrollDestination = 0;

// var currentScroll;



function backToTop() {
  currentPanelIdx = 0;
  $('html, body').animate({
    scrollTop: 0
  }, 1);
  currentScroll = 0;

  $(".up").addClass('inactive');

};


function showNext() {
  $grid = $("#grid");

var currentScroll = $(window).scrollTop();

  function changeScrollDown() {
    scrollDestination = windowHeight + currentScroll;

    scrollPosition = scrollDestination;
    if (scrollDestination < maxWindowHeight) {
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
     }
     currentPanelIdx++;
    currentScroll = scrollDestination;
hideArrow();
  };


  if (currentScroll != (maxWindowHeight-windowHeight)) {
    $grid.fadeOut(fadeOutSpeed, changeScrollDown);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition); 
  } else {
    $grid.fadeOut(fadeOutSpeed, backToTop);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition); 
  }

}

function hideArrow() {
  if (currentPanelIdx === 0) {
    $(".up").addClass('inactive');
  } else {
    $(".up").removeClass('inactive');
  }
}

hideArrow();

function showPrev() {
  $grid = $("#grid");
  $up = $(".up");

  currentScroll = $(window).scrollTop();

  function changeScrollUp() {
    scrollDestination = currentScroll - windowHeight;
    scrollPosition = scrollDestination;
    if (scrollDestination < maxWindowHeight) {
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
    } 
    currentPanelIdx--;
    currentScroll = scrollDestination;
    hideArrow();

  };

  if (currentScroll > 0) {
    $grid.fadeOut(fadeOutSpeed, changeScrollUp);
    $grid.fadeIn(fadeSpeed, resetMouseWheelTransition);   
  } else {
    currentPanelIdx = 0;
    resetMouseWheelTransition();
  }
}

var currentPanelIdx = 0;
var toTop;


// set current panel to correct index on entry
function setCurrentPanelIdx() {
   
toTop = $(window).scrollTop();

  if (toTop = 0) 
    currentPanelIdx = 0;
  else if (toTop > 0 && toTop >= windowHeight)
    currentPanelIdx = 1;
  else if (toTop > windowHeight && toTop >= windowHeight*2)
    currentPanelIdx = 2;
  else if (toTop > windowHeight*2 && toTop >= windowHeight*3)
    currentPanelIdx = 3;
}

setCurrentPanelIdx();




function findIndex(gridId) {
  var idx = 0;
  $(".panel").each(function(index) {
    if($(this).attr('id') = gridId) {
      idx = index;
    }
  });

  return idx;
}

function gotoPanel(index) {
  var newScrollPos = index * windowHeight;
  if (newScrollPos < maxWindowHeight) {
    $('html, body').animate({
        scrollTop: newScrollPos
    }, 1);
  }

}

$( window ).resize(function() {
  windowHeight = $(window).height();
  gotoPanel(currentPanelIdx);
});



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






//On touch scroll
document.addEventListener("touchmove", handleMove, false);
document.addEventListener("touchend", handleEnd, false);
 
var bTouchScrolling = false;
var scrollingStartY;
function handleMove(event) {
  //start of scroll event for iOS
  event.preventDefault();
  var touches = event.changedTouches;
   if (!bTouchScrolling){
    bTouchScrolling = true;
    scrollingStartY = touches[0].pageY;
  }
}
 
function handleEnd(event) {
  //start of scroll event for iOS
  var touches = event.changedTouches;
  if (bTouchScrolling){
    bTouchScrolling = false;
    if (touches[0].pageY > scrollingStartY)
      showPrev();
    else
      showNext();
  }
}

