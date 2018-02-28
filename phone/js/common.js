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
	$(".main_mnu a").click(function(){
		$("section").removeClass("blured");
		$(".otstup_mnu").removeClass('slideInDown').addClass('fadeOutRight').removeClass("opened");
	});
	$(".main_mnu_buttons").click(function(){
		if($(".otstup_mnu").hasClass("opened")){
			$(".otstup_mnu").removeClass('slideInDown').addClass('fadeOutRight');
		}
		else{
			$(".otstup_mnu").removeClass('fadeOutRight').addClass('animated slideInDown');
		}
		$(".otstup_mnu").toggleClass("opened");
		$("section").toggleClass("blured");
	});
	if ($(this).scrollTop() > 750) {
		$('.scrollup').fadeIn();
		$('.navbar-fixed-top').css('background', 'rgba(215, 215, 215, 1)');
	}
	else {

	}
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	$('.scroll_btn').click(function(){
		$("html, body").animate({ scrollTop: 950 }, 1000);
		return false;
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

	}); 


/* scrolling functions */
$(window).on('scroll', function(){
	var logo = 'images/logo.png';

	if ($(this).scrollTop() > 750) {
		$('.scrollup').fadeIn('slow');
		$('.navbar-fixed-top').css('background', 'rgba(215, 215, 215, 1)');
	} else {
		$('.scrollup').fadeOut('slow');
		$('.navbar-fixed-top').css('background', 'none');
	  	$('#home').css('background','none');
	}
	});




	// //Таймер обратного отсчета
	// //Документация: http://keith-wood.name/countdown.html
	// //<div class="countdown" date-time="2015-01-07"></div>
	// var austDay = new Date($(".countdown").attr("date-time"));
	// $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	// //Попап менеджер FancyBox
	// //Документация: http://fancybox.net/howto
	// //<a class="fancybox"><img src="image.jpg" /></a>
	// //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	// //Навигация по Landing Page
	// //$(".main_mnu") - это верхняя панель со ссылками.
	// //Ссылки вида <a href="#contacts">Контакты</a>
	// $(".main_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
//});




