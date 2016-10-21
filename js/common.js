$(document).ready(function() {

     
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
    offset:160
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
