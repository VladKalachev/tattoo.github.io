$(document).ready(function() {


//Adapted from: http://codepen.io/davidhartley/pen/seEki?editors=0010




var width = window.innerWidth;
var height = "600";
var renderer = new PIXI.autoDetectRenderer(width, height);//Chooses either WebGL if supported or falls back to Canvas rendering
document.body.appendChild(renderer.view);//Add the render view object into the page

var stage = new PIXI.Container();//The stage is the root container that will hold everything in our scene

// smoke shader
var uniforms = {};
uniforms.resolution = { type: 'v2', value: { x: width, y: height}};
uniforms.alpha = { type: '1f', value: 1.0};
uniforms.shift = { type: '1f', value: 1.6};
uniforms.time = {type: '1f',value: 0};
uniforms.speed = {type: 'v2', value: {x: 0.7, y: 0.4}};


var shaderCode = document.getElementById( 'fragShader' ).innerHTML
var smokeShader = new PIXI.AbstractFilter('',shaderCode, uniforms);

var bg = PIXI.Sprite.fromImage("http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png");
bg.width = width;
bg.height = height;
bg.filters = [smokeShader]
stage.addChild(bg);

/*var logo = PIXI.Sprite.fromImage("http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png");
logo.x = width / 2;
logo.y = height / 2;
logo.anchor.set(0.5);
logo.blendMode = PIXI.BLEND_MODES.ADD;
stage.addChild(logo)*/

animate()


var count = 0

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    count+=0.01
    smokeShader.uniforms.time.value = count;

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}


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
