function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imageHover() {

  var $projectthumbs = $('#project-thumbs li img');
  var $projects = $('.projects');

  // size & position the images
  $projectthumbs.each(function(i, el) {

    $this = $(this);

    img_height = $this.height;
    img_width = $this.width;
    window_height = $(window).height();
    window_width = $(window).width();


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


    // resize height if image is too tall
    if (img_height > window_height) {
      $this.css({
        'height' : window_height,
        'width' : 'auto',
        // 'height' : 'auto'
      });
    } 
    // resize based on window & links width
    var linksWidth = $projects.find('.accordion-wrapper').innerWidth();
    var thumbsMaxWidth = window_width - linksWidth;
    
    var $thumbs = $projects.find('.thumbnails-wrapper');
    $thumbs.css("width", thumbsMaxWidth);


    // randomWidth = getRandomInt(50,90) + '%';
    // $this.find('img').css('max-width', randomWidth);

    $this.hide().css({
      'position' : 'fixed',
      'top' : getRandomArbitrary(0,1) * window_height/4,
      'right' : getRandomArbitrary(0,1) * window_width/3
    });

  });


  $projectthumbs.each(function() {
    var layer = 0;
    var randomWidth;
    $('#project-links ul li a').hover(function() {
      id = $(this).attr('class');
      // console.log(id);
      layer++;
      // console.log(layer);
      var img = $('li.' + id +' img');
      // console.log(img);
      img.show().css('z-index', layer);
    });

  });

}


(function($) {

  imageHover();


// accordion
  $('#project-links > dt').click(function() {
    $(this).toggleClass('open closed');
  });

// toggle news panel
  var $twitter = $('.twitter-widget').hide();
  $('.news h2').click(function() {
    $twitter.toggle();
  }); 

})(jQuery);



$( window ).resize(function() {
  imageHover();
});




// twitter

var config1 = {
  "id": '577594630809755649',
  "domId": 'twitter_feed',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": false
};

twitterFetcher.fetch(config1);
