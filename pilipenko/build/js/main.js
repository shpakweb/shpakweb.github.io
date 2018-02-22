//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);
$(window).on('scroll', function(){
	if ($(this).scrollTop() > 800) {
		$('.main_mnu_buttons i').css('color', '#1C808E');
		$('.scrollup').fadeIn('slow');
		} else {
		$('.main_mnu_buttons i').css('color', '#fff');
		$('.scrollup').fadeOut('slow');
	}});
$('.scrollup').click(function(){  
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
}); 
/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/
jQuery(document).ready(function() {
  jQuery("a.scroll-btn").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/


$(document).ready(function() {

	$(".main_mnu_buttons").on('click', function(event){
		event.preventDefault();
		$(".menu-header").slideToggle(300);
	});

	
	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".scrollup").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

});
