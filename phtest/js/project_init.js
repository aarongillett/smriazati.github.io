

  $(document).ready(function() {

// add in page loader 
$(".project-wrapper").append('<div id="pageloader"><img src="../imgs/loading.gif" /> </div>')



    $('.project-slideshow').slick({
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true

    });
               
  });

