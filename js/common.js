$(document).ready(function() {

/*popup*/

	$('.mypopup-close').click(function(){
		console.log(111);
		$('.mypopup').css('display','none');
		
	});


	/*height page1*/
	

	var he1 = $(window).height(),
	    he2 = he1 - 200,
	    he3 = he1/2 - 220,
	    he4 = he1/2 - 180,
	    he5 = he1/2 - 100,
	    w1 = $(window).width()
	    w2 = w1/2;
//console.log(w2);

	$('.header1').css('height', he1);
	$('.left_inf_bl').css('height', he1);
	$('.left_inf_bl1').css('height', he1);
	$('.bottomBtn').css('top', he2);
	$('.logo').css('top', he3);
	$('.header_name').css('top', he4);
	$('.header_name2').css('top', he5);

	if (w1 < 1500) {
		$('.crt-parallaxvideo video').css('height', he1);

	}
	
     
	if ($(window).scrollTop() >= 0 ) {
		$('.top').addClass('mPS2id-highlight');
	};

	if ($(window).scrollTop() >= 620) {
	$('.top').removeClass('mPS2id-highlight');
	}

	if (w1 < 700) {
		$('.header_name').css('left', w2-140);

	}





$(window).scroll(function(){ 

	if ($(window).scrollTop() >= 0 ) {
		$('.top').addClass('mPS2id-highlight');
		$('.bottomBtn').removeClass('mPS2id-highlight');
	};

	if ($(window).scrollTop() >= 620) {
		$('.top').removeClass('mPS2id-highlight');
	$('.bottomBtn').addClass('mPS2id-highlight');
	}


});


/*scrolle */

$('.navbar-nav a, .top, .bottomBtn').mPageScroll2id({
    offset: 80
});

/*VK*/



/*carousel*/
$(".carousel").owlCarousel({
		loop : true,
		responsive:{
        0:{
            items:1,
            nav:true
        }
    },
// удаляет надпись стрелок вперед-назад
    navText : "",
		

	});


	/*gallery*/

$('.popupImg').magnificPopup({
  type: 'image'
  // other options
});

	/*nav bar*/

/*	$('.header-fix').click(function(){
 
  if ($('#navbar-main').hasClass('affix-top')){
  	 console.log('Вы нажали на элемент "foo"');
  	 $('#navbar-main').removeClass('affix');
  	} else


  	 if ($('#navbar-main').hasClass('affix')) {

  	 	console.log(111);
  		$('#navbar-main').removeClass('affix');
  		$('#navbar-main').addClass('affix-top');
  	}

});*/


var affixElement = '#navbar-main';

$(affixElement).affix({
  offset: {
    // Distance of between element and top page
    top: function() { return 40; }
    
  }
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	/*анимация*/

	

});


$(window).load(function() {
/*анимация*/

	$(".tattooLogo, .logo, .header_name, .header_name2").animated("zoomInRight", "fadeOut");
	$(".titleWork").animated("zoomIn", "fadeOut");
	$('.master1, .master2, .master3').animated("bounceIn", "fadeOut");

	$('.top_high, .address_map').animated("flipInY", "fadeOut");
	$('.form-group, .call_order button').animated("zoomInRight", "fadeOut");

	
	/*$('.master_block').css('opacity','')
	$('.master_block').removeClass('animated bounceIn' )*/

});
