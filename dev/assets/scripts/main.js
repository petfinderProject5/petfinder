var papp = {};
papp.map;
papp.googleApiKey = 'AIzaSyADQWtBBozt_p2XH0tYlJQ71GOqcI3XtEk';
papp.petApiKey = '5643b4e4140ed1e99bc21e6bbbfb3fd6';
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

  // papp.infoWindow.setPosition(pos);
  // papp.infoWindow.setContent('Location found.');
  papp.map.setCenter(pos);
  papp.map.setZoom(16);
  papp.generateMapMarker(pos);
  console.log(pos);
  papp.reverseGeolocation(pos);
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

papp.generateMapMarker = function(place) {
    const marker = new google.maps.Marker({
        map: papp.map,
        position: place
    });
}

papp.reverseGeolocation = function(pos) {
	$.ajax({
		url: 'https://maps.googleapis.com/maps/api/geocode/json',
		dataType: 'json',
		method: 'GET',
		data: {
			key: papp.googleApiKey,
			// latlng: pos.lat + ',' + pos.lng
			latlng: 43.6448203 + ',' + -79.3978765
		}
	}).then(function(addressResult){
		
		if (addressResult.status !== "OK") {
			console.log("no results");
		} else {
			console.log(addressResult);
			var address = addressResult.results[0].address_components;
			var postalCodeObject = address.filter(function(component){
				return component.types[0] === "postal_code";
			});
			var postalCode = postalCodeObject[0].long_name;
		}

		if (postalCode.length < 5) {
			var cityObject = address.filter(function(component){
				return component.types[0] === "locality";
			});
			var provinceObject = address.filter(function(component){
				return component.types[0] === "administrative_area_level_1";
			});
			var city = cityObject[0].long_name;
			var province = provinceObject[0].long_name;
			var newCity = city + ', ' + province;
			var useCity = 1;
			console.log(newCity);
		}

		if (useCity === 1) {
			papp.getShelters(newCity);
		} else {
			papp.getShelters(postalCode);
		}
	});
}

papp.getShelters = function(location) {
	$.ajax({
		url: 'http://api.petfinder.com/pet.find',
		dataType: 'jsonp',
		method: 'GET',
		data: {
			key: papp.petApiKey,
			animal: 'bird',
			format: 'json',
			location: location
		}
	}).then(function(petfinderInfo){
		const petfinderArray = petfinderInfo.petfinder.pets.pet;
		console.log(petfinderArray);
		let shelterIdArray =[];
		for (var i=0; i < petfinderArray.length; i++) {
		shelterIdArray.push(petfinderArray[i].contact.address1.$t + ', ' + petfinderArray[i].contact.city.$t + ', ' + petfinderArray[i].contact.state.$t);
		}
		shelterIdArray = _.uniq(shelterIdArray);
		console.log(shelterIdArray);
	});
}
papp.getSheltersGeoCode = function(shelterAddresses) {

}

papp.getSheltersAddresses = function(shelterIds) {


}
papp.init = function(){
	papp.initMap();
}

$(function(){
	papp.init();
});