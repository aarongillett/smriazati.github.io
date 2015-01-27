var windowHeight = $(window).height();
var windowWidth = $(window).width();

var fadeSpeed = 800;
var fadeOutSpeed = fadeSpeed*0.5;


function showNext() {
  // cache whole grid
  $grid = $("#grid");

  // get current scroll location
  var currentScroll = $(window).scrollTop();

  function changeScrollDown() {
    // calculate scroll destination using window height
    var scrollDestination = windowHeight + currentScroll;
    // if scrollDestination > windowHeight * 4
    if (scrollDestination < windowHeight*4) {
      // change scroll position to scroll destination
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
    } else { // but if its at the bottom, go back to top
      $('html, body').animate({
          scrollTop: 0
      }, 1);
    }
  };

  // fade out grids & change scroll position down
  $grid.fadeOut(fadeOutSpeed, changeScrollDown);
  $grid.fadeIn(fadeSpeed);

}


function showPrev() {
  // cache whole grid
  $grid = $("#grid");

  // current scroll location
  var currentScroll = $(window).scrollTop();

  function changeScrollUp() {
    // calculate scroll destination using window height
    var scrollDestination = currentScroll - windowHeight;
    // if scrollDestination > windowHeight * 4
    if (scrollDestination < windowHeight*4) {
      // change scroll position to scroll destination
      $('html, body').animate({
          scrollTop: scrollDestination
      }, 1);
    } 
  };

  // fade out grids & change scroll position up
  // but if its at the top then do nothing
  if (currentScroll != 0) {
    $grid.fadeOut(fadeOutSpeed, changeScrollUp);
    $grid.fadeIn(fadeSpeed);   
  }
}



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


// // update on window resize
// $( window ).resize(function() {
//   windowResetter();
// });


// // add other events
// // key press
// jQuery(function () {
//   $(document).keydown(function (evt) {
//     if (evt.keyCode == 40 || evt.keyCode == 34 || evt.keyCode == 39 ) { // down arrow
//       evt.preventDefault(); // prevents the usual scrolling behaviour
//       showNext(); // scroll to the next new heading instead
//     }

//     if (evt.keyCode == 38 || evt.keyCode == 33 || evt.keyCode == 37){
//       evt.preventDefault(); // prevents the usual scrolling behaviour
//       showPrev(); // scroll to the next new heading instead
//     }
//   });
// });



// mouse wheel

// var mouseWheelTransition = false; 


// //On mousewheel
// if (document.addEventListener) {
//   // IE9, Chrome, Safari, Opera
//   document.addEventListener("mousewheel", MouseWheelHandler, false);
//   // Firefox
//   document.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// }
// // IE 6/7/8
// else document.attachEvent("onmousewheel", MouseWheelHandler);

// var mouseWheelTimeOut; 
// function MouseWheelHandler(e) {
//   e.preventDefault(); 
//   // cross-browser wheel delta
//   var e = window.event || e; // old IE support
//   var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

//   window.clearTimeout(mouseWheelTimeOut);
//   mouseWheelTimeOut = window.setTimeout(resetMouseWheelTransition, 2-0); 

//   if (!mouseWheelTransition){
//     if (delta == -1)
//       showNext(); 
//     if (delta == 1)
//       showPrev(); 
//   }
    
//   mouseWheelTransition = true; 

// }

// function resetMouseWheelTransition(){
//   mouseWheelTransition = false; 
// }

