

$( document ).ready(function() {



	$(window).resize(function() {
		resizeLogo();
	});


	
});

window.onload = function(){
    resizeLogo();
}

function resizeLogo() {
		
		if ($(window).width() < 420) {
			$('.logo img').width(150);
			$('.logo img').css('top', '15px');
			$('.logo h6').css('font-size', "8px");
		} else {
			$('.logo img').width(220);
			$('.logo img').css('top', '-25px');
			$('.logo h6').css('font-size', "10px");
		}
}