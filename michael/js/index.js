$(function() {
  String.prototype.decodeHTML = function() {
    return $("<div>", {html: "" + this}).html();
  };

  var $main = $("main"),
  
  init = function() {
        $main.fadeIn(1000);
        console.log("fade in!");
  },
  
  ajaxLoad = function(html) {
    document.title = html
      .match(/<title>(.*?)<\/title>/)[1]
      .trim()
      .decodeHTML();

    init();
  },
  
  loadPage = function(href) {
    $main.load(href + " main>*", ajaxLoad);
  };
  
  init();
  
  $(window).on("popstate", function(e) {
    if (e.originalEvent.state !== null) {
      loadPage(location.href);
    }
  });

  $(document).on("click", "a, area", function() {
    var href = $(this).attr("href");

    console.log(document.domain);

    if (href.indexOf(document.domain) > -1
      || href.indexOf(':') === -1)
    {
      history.pushState({}, '', href);
      loadPage(href);
      return false;
    }
  });
});



/// og 


var currentSection, homeSection; 
var mouseWheelTransition = false; 
var panelTransition = false; 

//  cache arrows
var $down = $("nav.interslide .down");
var $up = $("nav.interslide .up");

//Constants
var fadeTime = 1000; 

var sectionId;

$(function() {
  //Initialize section vars
  homeSection = $('.panel').eq(0); 
  currentSection = homeSection; 

  sectionId = currentSection.attr("id");


  // Stop default behaviours for links
  var a = document.getElementsByTagName('a');
  for(i=0 ; i<a.length ; i++){
      a[i].addEventListener('click', function(e) {
          if (this.href === window.location.href) {
              e.preventDefault();
          }
      });
  }
});


// key press 4 down
function scrollToNext () {
  if (!panelTransition){
    $('.panel').each(function(i, div){ // loop through article headings
      if ($(div).attr("class") == currentSection.attr("class")){
        if (i < $('.panel').length -1){
          panelTransition = true; 
          var nextSection = $('.panel').eq(i+1);
          nextSection.css("visibility", "visible");
          nextSection.animate({
          opacity: 1.0
          }, fadeTime);

          $(div).animate({
            opacity: 0.0
          }, fadeTime, function(){
            currentSection.css("visibility", "hidden"); 
            currentSection = nextSection; 
            panelTransition = false; 

            if (currentSection.attr("id") === "grid4") {
              $down.addClass("inactive");
            } else if (currentSection.attr("id") === "grid2") {
              $up.removeClass("inactive");
            }


            sectionId = currentSection.attr("id");
            // // console.log("current section id is " + sectionId);
            // history.pushState({id: sectionId}, '', 'index.html#' + sectionId);

            location.hash = '#' + sectionId;

          });
        }
      }
    });
  }
}


function scrollToPrevious () {
  if (!panelTransition){
    $('.panel').each(function(i, div){ // loop through article headings
      if ($(div).attr("class") == currentSection.attr("class")){
        if (i > 0){
          panelTransition = true; 
          var nextSection = $('.panel').eq(i-1);
          nextSection.css("visibility", "visible");
          nextSection.animate({
          opacity: 1.0
          }, fadeTime);

          $(div).animate({
            opacity: 0.0
          }, fadeTime, function(){
            currentSection.css("visibility", "hidden"); 
            currentSection = nextSection; 
            panelTransition = false; 
          
            if (currentSection.attr("id") === "grid3") {
              $down.removeClass("inactive");
            } else if (currentSection.attr("id") === "grid1") {
              $up.addClass("inactive");
            }

            sectionId = currentSection.attr("id");
            // console.log("current section id is " + sectionId);
            // history.pushState({id: sectionId}, '', 'index.html#' + sectionId);
            location.hash = '#' + sectionId;

          });
        }
      }
    });
  }


}

// On keys
jQuery(function () {
  $(document).keydown(function (evt) {
    if (evt.keyCode == 40 || evt.keyCode == 34 || evt.keyCode == 39 ) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNext(); // scroll to the next new heading instead
    }

    if (evt.keyCode == 38 || evt.keyCode == 33 || evt.keyCode == 37){
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToPrevious(); // scroll to the next new heading instead
    }
  });
});

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
  // cross-browser wheel delta
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  window.clearTimeout(mouseWheelTimeOut);
  mouseWheelTimeOut = window.setTimeout(resetMouseWheelTransition, 2-0); 

  if (!mouseWheelTransition){
    if (delta == -1)
      scrollToNext(); 
    if (delta == 1)
      scrollToPrevious(); 
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
      scrollToPrevious();
    else
      scrollToNext();
  }
}


//Hash navigation 
function getLocationHash(){
  return window.location.hash.substring(1);
}

function setLocationHash(str){
  window.location.hash = str;
}


window.onhashchange = function(e) {
  panelTransition = false; 
}


window.onhashchange = function(e) {
    if (panelTransition)
        panelTransition = false; 
    else {
        setCurrentPanelFromHash(); 
    }
}




// function setCurrentPanelFromHash(){
//   if (getLocationHash() === "grid2"){
    
//     console.log("you are in grid 2");
//     setLocationHash("grid2");

//     $(".a").css("opacity", "0.0"); 
//     $(".b").css("opacity", "1.0"); 

//   } else if (getLocationHash() === "grid3"){
//     console.log("you are in grid 3");

//     $(".a").css("opacity", "0.0"); 
//     $(".c").css("opacity", "1.0"); 

//   } else if (getLocationHash() === "grid4"){
//     console.log("you are in grid 4");

//     $(".a").css("opacity", "0.0"); 
//     $(".d").css("opacity", "1.0"); 

//   }
// }










