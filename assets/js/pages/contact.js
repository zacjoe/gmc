var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			var map_us;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 3.1708333,
				lng: 101.6538889
			  });

			  map_us = new GMaps({
			  	div: '#map_us',
			  	lat: 32.90385,
			  	lng: -117.118597,
			  	zoom: 11
			  });

			   var marker = map.addMarker({
		            lat: 3.1708333,
					lng: 101.6538889,
		            title: 'Techtual Consulting Malaysia'
		        });

			   var marker_us = map_us.addMarker({
		            lat: 32.90385,
					lng: -117.118597,
		            title: 'Techtual Consulting U.S.A'
		        });
			});
        }

    };
}();
