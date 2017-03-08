var papp = {};
papp.map;
papp.initMap = function() {
	  papp.map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 50.09024, lng: -95.712891},
	    zoom: 4
	  });

papp.infoWindow = new google.maps.InfoWindow({map: papp.map});

// Try HTML5 geolocation.
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  papp.infoWindow.setPosition(pos);
  papp.infoWindow.setContent('Location found.');
  papp.map.setCenter(pos);
  papp.map.setZoom(16);
}, function() {
  handleLocationError(true, papp.infoWindow, papp.map.getCenter());
});
} else {
// Browser doesn't support Geolocation
handleLocationError(false, papp.infoWindow, papp.map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
papp.infoWindow.setPosition(pos);
papp.infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
}

papp.init = function(){
	papp.initMap();
}
$(function(){
	papp.init();
});