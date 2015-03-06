

// set slide show width to respond

function setSlideDimensions() {

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  // cache variables
  var $info = $('.project-info');
  var $slideshow = $('.project-slideshow');
  $slideshowImg = $slideshow.find('div img');


  // grab width of text area
  var infoWidth = $info.width();

  // grab width of images
  var imgWidth = $slideshowImg.width();

  // top & bottom margins
  var offset = 100; // 50px x 2

  // set height of image
  var slideshowHeight = windowHeight - offset;
  $slideshowImg.css('height', slideshowHeight);

  // set max-width of image based on images width
  $slideshow.css('max-width', imgWidth);

}



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
    setSlideDimensions();
    centerNav();
  });

  $('.project-slideshow').slick({
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    arrows: false,
    fade: true,

  });
             
});


// $( window ).resize(function() {
//   setSlideDimensions();
//   centerNav();

// });