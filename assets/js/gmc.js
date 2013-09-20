

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
			$('.logo img').width(100);
			$('.logo img').css('top', '5px');
		} else {
			$('.logo img').width("auto");
			$('.logo img').css('top', '-25px');
		}
}