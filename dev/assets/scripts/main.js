const papp = {}

const googleApiKey = 'AIzaSyADQWtBBozt_p2XH0tYlJQ71GOqcI3XtEk';

papp.searchFor = function(searchString) {
    const response = $.ajax({
        url: 'https://proxy.hackeryou.com',
        dataType: 'json',
        method:'GET',
        data: {
            reqUrl: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
            params: {
                key: googleApiKey,
                input: searchString,
                types: 'geocode',
                language: 'en',
                components: 'country:us|country:ca',
            },
            xmlToJSON: false
        }
    });
    $.when(response)
    .done(function(responseInfo) {
        papp.displayAutoCompleteResults(responseInfo.predictions);
    })
    .fail(function(error) {
        console.error('ERROR: ', error);
    });
};

papp.searchField = $('#searchField');
papp.userSearchInputResult;

papp.displayAutoCompleteResults = (results) => {

    const autocompleteItemClass = 'autocompleteItem';
    const autocompleteList = [];
    
    if(results.length > 0) {
        results.forEach(function(result) {
            autocompleteList.push({ label: result.description, value: result.place_id });
        });

        papp.searchField.autocomplete({
            minLength:3,
            source: autocompleteList,
            autoFocus:true,
            select: function(event, ui) {
                event.preventDefault();
                $(this).val(ui.item.label);
                papp.userSearchInputResult = ui.item.value;
            },
            messages: {
                noResults: '',
                results: function() {}
            }
        });
    }
};

// papp.getPlaceDetails = function(placeId) {
//     const response = $.ajax({
//         url: 'https://proxy.hackeryou.com',
//         dataType: 'json',
//         method:'GET',
//         data: {
//             reqUrl: 'https://maps.googleapis.com/maps/api/place/details/json',
//             params: {
//                 key: app.apiKey,
//                 placeid: placeId,
//             },
//             xmlToJSON: false
//         }
//     });

//     $.when(response).done(function(placeDetails) {
//         if(placeDetails.status === 'OK') {
//             app.setUserLocation(placeDetails.result.geometry.location);
//             app.modals.modalWrapper.display(false);
//         }
//     });
// };

papp.events = function(){
    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        if(app.userSearchInputResult !== undefined) {
            app.getPlaceDetails(app.userSearchInputResult);
        }
    })
    papp.searchField.on('input', function(event) {
        papp.searchFor($(this).val());
    })
};


// var papp = {};
// papp.map;
// papp.initMap = function() {
// 	  papp.map = new google.maps.Map(document.getElementById('map'), {
// 	    center: {lat: 50.09024, lng: -95.712891},
// 	    zoom: 4
// 	  });

//   papp.infoWindow = new google.maps.InfoWindow({map: papp.map});

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

//     papp.infoWindow.setPosition(pos);
//     papp.infoWindow.setContent('Location found.');
//     papp.map.setCenter(pos);
//     papp.map.setZoom(16);
//     }, function() {
//       handleLocationError(true, papp.infoWindow, papp.map.getCenter());
//     });
//     } else {
//     // Browser doesn't support Geolocation
//       handleLocationError(false, papp.infoWindow, papp.map.getCenter());
//     }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// papp.infoWindow.setPosition(pos);
// papp.infoWindow.setContent(browserHasGeolocation ?
//                     'Error: The Geolocation service failed.' :
//                     'Error: Your browser doesn\'t support geolocation.');
// }

papp.init = function(){
	// papp.initMap();
    papp.events();
    papp.searchFor();
}

$(function(){
	papp.init();
});