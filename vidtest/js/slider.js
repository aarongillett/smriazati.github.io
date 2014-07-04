
        $(document).ready(function() {
            $('#slider').slider({ 
            min: 0, 
            max: 1, 
            step: 0.01, 
            value: .5,
            orientation: "horizontal",
                 slide: function(e,ui){
                         $('#box').css('opacity', ui.value)

                 }                
            })
        });
