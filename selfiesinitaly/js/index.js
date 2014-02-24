// lightbox js is imported https://s3-us-west-2.amazonaws.com/s.cdpn.io/95495/lightbox.js

// import masonry https://s3-us-west-2.amazonaws.com/s.cdpn.io/95495/jquery.masonry.min.js

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top +300
        }, 1000);
        return false;
      }
    }
  });
});


  $(function(){
    function masonry() {
      var $container = $('#photos');

      $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : 'li', 
            "gutter" : 100
          });
      });
    };

    masonry();

  window.onresize = function(event) {     
        masonry();
  };

   });
