
function centerNav() {
  var imgWidth = $('.project-slideshow div img').width();
  var ulWidth = $('ul.slick-dots').width();
  var ulOffset = (imgWidth / 2) - (ulWidth / 2);
  $('ul.slick-dots').css('margin-left', ulOffset);  
}




/// Inits

$(document).ready(function() {
  centerNav();
});

$( window ).resize(function() {
  centerNav();
});