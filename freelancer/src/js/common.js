$(document).ready(function() {

	$(".main_mnu_button").click(function(){
		$(".main_mnu_button").toggleClass("opened");
		if($(".main_mnu").hasClass("opened")){
			$(".main_mnu").removeClass('fadeInRight').addClass('fadeOutRight');
		}
		else{
			$(".main_mnu").removeClass('fadeOutRight').addClass('animated fadeInRight');
		}
		$(".main_mnu").toggleClass("opened")
	
	})

	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Кнопка "Наверх"
	//Документация:

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	window.onscroll = function() {
	  if(window.pageYOffset > 750 ) {
	  	$(".heading").addClass('colored_mnu');
	  }
	  else {
	  	$(".heading").removeClass('colored_mnu');
	  }
	}
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