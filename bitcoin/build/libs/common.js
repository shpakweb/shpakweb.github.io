$(document).ready(function() {
/*counter*/
	new FlipDown(1523867200, 'flipdown').start();
/*scroll to bottom*/
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	    		scrollTop: $("#About-us").offset().top
	  	}, 1000)
	});
/*burger menu functions*/
	$(".main-mnu-button").click(function(){
		$(".main-mnu-button").toggleClass("opened");
		if($(".main-mnu ul").hasClass("opened")){
			$(".main-mnu ul").removeClass('fadeInRight').addClass('fadeOutRight');
		}
		else{
			$(".main-mnu ul").removeClass('fadeOutRight').addClass('animated fadeInRight');
		}
		$(".main-mnu ul").toggleClass("opened");

	});
})

