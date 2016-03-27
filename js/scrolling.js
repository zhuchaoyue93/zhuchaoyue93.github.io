/*function loadScript(){
	var timer,
		divScroll = document.getElementById( "container" )
				.getElementsByTagName( "div" )[0];
		divImgs = divScroll.getElementsByTagName( "div" )[0],
		divClone = divScroll.getElementsByTagName( "div" )[1];
		
				
	divClone.innerHTML = divImgs.innerHTML;
	
	function scrollImg(){
		timer = setInterval( function(){
			var ml =( divScroll.style.marginLeft );
                          alert(ml);
			divScroll.style.marginLeft = --ml + "px";
			if( ml <= -878 ){
				divScroll.style.marginLeft = 0;	
			}
		}, 10 );
	};
	
	scrollImg();
	
	divScroll.onmouseover = function(){
		clearInterval( timer );
	};
	
	divScroll.onmouseout = function(){
		scrollImg();
	}
	
}

window.onload = loadScript;*/


$(document).ready(function(e) {
    var timer;
    //$( ".clone-imgs" ).html( $( ".imgs" ).html() );

    $(".clone-imgs").append($(".imgs img").clone());

    function scrollImg() {
        timer = setInterval(function() {
            var ml = parseInt($(".scroll").css("margin-left"));

            $(".scroll").css({
                "margin-left": --ml
            });

            if (ml <= -878) {
                $(".scroll").css({
                    "margin-left": 0
                });
            }
        }, 10);
    };

    scrollImg();

    $(".scroll").mouseover(function() {
        clearInterval(timer);
    });
    $(".scroll").mouseout(function() {
        scrollImg();
    });
});