
/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/

/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/

$(window).on('scroll', function(){
	var logo = 'images/logo.png';
	var logoScroll = 'images/logo2.png';

	if ($(this).scrollTop() > 800) {
		$('.scrollup').fadeIn('slow');
		jQuery('#home').addClass('shadow');
	  	jQuery('#home').css('opacity','1');
	  	jQuery('.logotip img').attr('src',logoScroll);
	  	$('#home').css('background', '#c5c5c5');
	} else {
		$('.scrollup').fadeOut('slow');
		jQuery('#home').removeClass('shadow'); 
	  	jQuery('.logotip img').attr('src',logo);
	  	$('#home').css('background','none');
	}
	});
$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
}); 

/*<!-- =============================================== -->
<!-- ==========burger ========== -->
<!-- =============================================== -->*/



$(document).ready(function() {

	$(".main_mnu_buttons").click(function(){
		$(".main_mnu ul").slideToggle();

	}	)
	/*change logotip */
	
	

	/*owlCarousel */
	$(document).ready(function() {

		$(".gallery_carousel").owlCarousel({

			/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],

			pagination : true,
			paginationNumbers: false,


			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window

		});

		$(".single_gallery").owlCarousel({

			/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
			items :1,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			pagination : true,
			paginationNumbers: false,
			singleItem:true,
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window
		});
	}); 

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
$(document).ready(function() {
	$('.iphone').animated('fadeInLeft');
	$('.home-titile').animated('zoomIn');
	$('.all-colum').animated('fadeInLeft');
	$('.two-colum').animated('fadeInRight');
	$('.pic_iphone_3').animated('zoomInLeft');
	$('.iphone-4 ').animated('fadeInLeft');
	$('.iphone-5').animated('zoomInRight');
	$('.all-seen').animated('rotateIn');
	$('.soc-buttons').animated('zoomInLeft');
	$('second-container').animated('fadeInRight');
});

//<!-- =============================================== -->
//<!-- ========== Navbar change logotip========== -->
//<!-- =============================================== -->
 

/*
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('home').style.backgroundColor= scrolled==0?"red":"blue";
}   */




