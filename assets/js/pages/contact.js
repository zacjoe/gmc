var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 4.21048,
				lng: 101.97577
			  });
			   var marker = map.addMarker({
		            lat: 4.21048,
					lng: 101.97577,
		            title: 'Techtual Consulting'
		        });
			});
        }

    };
}();