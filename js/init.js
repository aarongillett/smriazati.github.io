
$(document).ready(function(){

    $("#back").remove();
    $("#container").remove();
    $(".container").append('<div id="more"><h1>More Work</h1><div id="grid"></div>');    
    $("#grid").load("grid.html #container");
});



// <!-- google analytics -->
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-17411693-8']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

