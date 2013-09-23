var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 3.1708333,
				lng: 101.6538889
			  });
			   var marker = map.addMarker({
		            lat: 3.1708333,
					lng: 101.6538889,
		            title: 'Techtual Consulting'
		        });
			});
        }

    };
}();
