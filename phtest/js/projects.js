
function centerNav() {
  // get width of image
  var imgWidth = $('.project-slideshow div img').width();
  // console.log(imgWidth);

  // get width of UL object
  var ulWidth = $('ul.slick-dots').width();
  // console.log(ulWidth);

  // calculate offset
  var ulOffset = (imgWidth / 2) - (ulWidth / 2);
  // console.log(ulOffset);

  // apply left margin
  $('ul.slick-dots').css('margin-left', ulOffset);  
}




/// Inits

$(document).ready(function() {
  $('.project-slideshow').on('init', function(event, slick){
    centerNav();
  });

             
});


$( window ).resize(function() {
  centerNav();
});