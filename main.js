(function(func) {
    var scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true));
    };
    document.body.appendChild(scr);
})(function($) {
    $('img')
        .attr('src', 'https://bit.ly/3gWFv6g')
        .hover(function(){
            var rand = Math.floor( Math.random()*2);
            for (var i = 0; i<=rand; i++) {
                $('body').after('<img src="https://bit.ly/3zWboTR" class="mouse" style="position: absolute; width:70px; top: -50px; left:-50px; z-index: 99999;">');
            }

            var offset = $(this).offset();
            var height = $(this).height();
            var width = $(this).width();

            $('.mouse').each(function(i, elm){
                var top = offset.top + Math.floor( Math.random()*height);
                var left = offset.left + Math.floor( Math.random()*width);
                $(elm).animate({top: top, left: left}, Math.random()*800+200, 'swing');
            })
        });
});

