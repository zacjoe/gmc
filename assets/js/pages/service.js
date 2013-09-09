

$(function() {
	
	//accordion active toggle
	//when show, add active
	$('.accordion-body').on('show', function(){
		$(this.previousElementSibling.firstElementChild).addClass("active");
	})
	//when hide, remove active
	$('.accordion-body').on('hide', function(){
		$(this.previousElementSibling.firstElementChild).closest('a').removeClass("active");
	})

	//detect hashchange
	$(window).hashchange(function(){
		var anchor = window.location.hash.replace("#", "").replace("_H", "");
    	// $(".accordion-body").collapse('hide');
    	$(".accordion-body").each(function() {
    		if ($(this).hasClass('in')) {
    			$(this).collapse('hide');
    		}
    	})
    	$("#" + anchor).collapse('show');
	})

	$(window).hashchange();

	
});
