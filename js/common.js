$(document).ready(function() {

/*popup*/

	$('.mypopup-close').click(function(){
		console.log(111);
		$('.mypopup').css('display','none');
		
	});

/*	var $body = $('body'),
	    $btn = $('#fadePopup');

	$body.addClass('popup-active'); // DEMO ONLY - add popup active onload

	(function($body, $btn) {

	    var $popup = $('.mypopup'),
	        $popupClose = $popup.find('.mypopup-close'),
	        $overlay = $popup.find('.mypopup-overlay');

	    $btn.add($popupClose).add($overlay).click(function() {
	        togglePopup();
	    });

	    var togglePopup = function() {
	        $body.toggleClass('popup-active');
	        $popup.toggleClass('active');
	    };

	})($body, $btn);*/

	/*height page1*/
	

	var he1 = $(window).height(),
	    he2 = he1 - 200,
	    he3 = he1/2 - 300,
	    he4 = he1/2 - 240,
	    w1 = $(window).width();


	$('.header1').css('height', he1);
	$('.bottomBtn').css('top', he2);
	$('.logo').css('top', he3);
	$('.header_name').css('top', he4);

	if (w1 < 1500) {
		$('.crt-parallaxvideo video').css('height', he1);

	}
	
     
	if ($(window).scrollTop() >= 0 ) {
		$('.top').addClass('mPS2id-highlight');
	};

	if ($(window).scrollTop() >= 620) {
	$('.top').removeClass('mPS2id-highlight');
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

});
