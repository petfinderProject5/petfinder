var papp = {};

papp.map;

papp.googleApiKey = 'AIzaSyAIE6FNON09T5VbnCh_HfoADsz1prORR68';

papp.petApiKey = '5643b4e4140ed1e99bc21e6bbbfb3fd6';

papp.elements = {
    $petDetails: $('#petDetails'),
    $petGallery: $('#petGallery'),
    $petInfo: $('#petInfo'),
    $petName: $('.petName'),
    $petBreed: $('.petBreed'),
    $petGender: $('.petGender'),
    $petAge: $('.petAge'),
    $petDescription: $('.petDescription'),
    $petAddress: $('.petAddress')
};

papp.petData;
papp.markers = [];
papp.userMarker;
papp.selectedShelterInfo = [];
papp.userMarkerImage = 'assets/images/user_marker.png';
papp.birdMarkerImage = 'assets/images/bird_marker.png';

papp.displayPetMedia = function(media) {
    papp.elements.$petGallery.empty();
    const $imageCarousel = $('<div>')
    .addClass('mainCarousel')
    .appendTo(papp.elements.$petGallery);

    if(media.photos !== undefined) {
        media.photos.photo.forEach(function(photo){
            // Only show the largest version of the photo
            if(photo['@size'] === 'x') {

                // Build carousel and it's items
                $('<img/>')
                .addClass('petImage carouselItem')
                .attr('src', photo.$t)
                .appendTo($imageCarousel);
            }
        }); 
    }
    else {
        $('<img/>')
        .addClass('petImage carouselItem')
        .attr('src', 'assets/images/no_images_found.jpg')
        .appendTo($imageCarousel);
    }

    $('.mainCarousel').flickity({
        contain: true,
        groupCells: true,
        groupCells: 1,
        setGallerySize: false,
        imagesLoaded: true
    });
};

papp.dePopulateDisplayContainer = function() {


}

papp.populateBirdDisplayContainer = function() {
    // $('#petName').html(papp.selectedShelterInfo['name.$t']);
        const name = papp.selectedShelterInfo[0].name.$t;
        const age = papp.selectedShelterInfo[0].age.$t;
        const gender = papp.selectedShelterInfo[0].sex.$t;
        const media = papp.selectedShelterInfo[0].media;
        const streetAddress = papp.selectedShelterInfo[0].contact.address1.$t; 

        let description = 'No description availible for this pet.'
        if(papp.petData[0].description.$t !== undefined) {
            description = papp.petData[0].description.$t;
        }
        papp.displayPetMedia(media);
   
        // ('.petCard').removeClass('petCard');
        papp.elements.$petName.html("<span>Name:</span> " + name);
        papp.elements.$petGender.html("<span>Gender:</span> " + gender);
        papp.elements.$petAge.html("<span>Age:</span> " + age);
        papp.elements.$petDescription.html("<span>About Me:</span> " + description);
        papp.elements.$petAddress.html("<span>Shelter Address:</span> " + address);

}

// papp.displayPetInfo = function(petIndex) {
//     const name = papp.selectedShelterInfo[petIndex].name.$t;
//     const age = papp.selectedShelterInfo[petIndex].age.$t;
//     const gender = papp.selectedShelterInfo[petIndex].sex.$t;
//     const media = papp.selectedShelterInfo[petIndex].media;
//     const streetAddress = papp.selectedShelterInfo[petIndex].contact.address1.$t;
//     const city = papp.selectedShelterInfo[petIndex].contact.city.$t;
//     const state = papp.selectedShelterInfo[petIndex].contact.state.$t;
//     const zip = papp.selectedShelterInfo[petIndex].contact.zip.$t;
//     const email = papp.selectedShelterInfo[petIndex].contact.email.$t;
//     const address = `${streetAddress}, ${city}, ${state}, ${zip}, ${email}`;

//     papp.displayPetMedia(media);


    // papp.elements.$petName.html("<span>Name:</span> " + name);
    // papp.elements.$petGender.html("<span>Gender:</span> " + gender);
    // papp.elements.$petAge.html("<span>Age:</span> " + age);
    // papp.elements.$petDescription.html("<span>About Me:</span> " + description);
    // papp.elements.$petAddress.html("<span>Shelter Address:</span> " + address);

    // let description = 'No description availible for this pet.'
    // if(papp.petData[petIndex].description.$t !== undefined) {
    //     description = papp.petData[petIndex].description.$t;
    // }
//     
// };

papp.initMap = function() {
    papp.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.09024, lng: -95.712891},
        zoom: 4
    });

    papp.infoWindow = new google.maps.InfoWindow({map: null});
}

papp.locateUser = function () {
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
            papp.generateUserMarker(pos);
            papp.reverseGeolocation(pos);
        }, 
    function() {
        papp.handleLocationError(true, papp.infoWindow, papp.map.getCenter());
    });

    } 
    else {
        // Browser doesn't support Geolocation
        papp.handleLocationError(false, papp.infoWindow, papp.map.getCenter());
    }
}

papp.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
    papp.infoWindow.setPosition(pos);
    papp.infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

papp.generateMapMarker = function(places) {
    const marker = new google.maps.Marker({
        map: papp.map,
        position: places
    });
    return marker;
}

papp.displayPetCard = function(petInfo) {
   $('<div>')
   .addClass('petCard')
   .appendTo('.petsDisplay');
    // create a const to hold the petCard dom object, add petCard class, 
    // and store the pet's id as petId in the object
    const petCard = $('<div>')
    .addClass('petCard')
    .data('petId', petInfo.id.$t);

    // Check if there are any photos available, if not use no_images_found image
    if(petInfo.media.photos !== undefined) {
        // Build carousel and it's items
        petCard.append($('<img/>')
        .addClass('cardImg')
        .attr('src', petInfo.media.photos.photo[2].$t));
    }
    else {
         petCard.append($('<img/>')
        .addClass('cardImg')
        .attr('src', 'assets/images/no_images_found.jpg'));
    }

    // Add the pet's name and breen to the card
    petCard.append(
        $('<div>')
        .addClass('cardDetail')
        .append(
            $('<div>')
            .addClass('cardName')
            .text(petInfo.name.$t)
        )
        .append(
            $('<div>')
            .addClass('cardBreed')
            .text(petInfo.breeds.breed.$t)
        )
    );

    // Append the pet card(with all it's data) to the page
    petCard.appendTo('.petsDisplay');
}

// Display Pet Container
// $('.petsDisplay').on('click', function(){
//     console.log('petsDisplay being clicked');
//     papp.populateBirdDisplayContainer();
//     $('displayContainer').hide();
// })

papp.generateUserMarker = function(pos) {
    papp.userMarker = papp.generateMapMarker(pos);
    papp.userMarker.setIcon(papp.userMarkerImage);
}

papp.assignInfoWindow = function(marker, contentInfo) {
    google.maps.event.addListener(marker, 'click', function() {
        const content= `<div class="infoBox"><h3>${contentInfo.name}</h3> <br> <button class="viewDetails" value=${contentInfo.shelterId}>View Birds</button></div>`;
        papp.infoWindow.setContent(content);
        papp.infoWindow.open(papp.map, this);
        $('.viewDetails').on('click', function(){
            papp.selectedShelterInfo = papp.petData.filter(function(pet){
                return pet.shelterId.$t === contentInfo.shelterId;
            });

            $('.resultTitle').text(contentInfo.name);

            $('html, body').animate({
         scrollTop: $(".resultTitle").offset().top
     }, 2000);
            papp.displayPetCard(papp.selectedShelterInfo[0]);
            // for (i=0; i < papp.selectedShelterInfo.length; i++) {
            //     papp.displayPetCard(papp.selectedShelterInfo[i]);
            // }
                scrollTop: $(".wrapper").offset().top
            }, 2000);

            // Clear existing petCards
            $('.petsDisplay').empty();

            // Generate new petCards
            papp.selectedShelterInfo.forEach(function(shelter){
                papp.displayPetCard(shelter);
            });

            // Bind Event to newly created petCards
            $('.petCard').on('click', function(event) {
                console.log('card clicked');
                console.log($(this).data('petId'));
                // TODO: Take this pet id and filter papp.petData for it, and return that pets's data.
                //       Then display all of that pet's details
            });

        });
    });
}

//-------------------------------------------PLACES API SEARCH ----------------------------

papp.searchFor = function(searchString) {
    const response = $.ajax({
        url: 'https://proxy.hackeryou.com',
        dataType: 'json',
        method:'GET',
        data: {
            reqUrl: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
            params: {
                key: papp.googleApiKey,
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
        if(responseInfo.status === "OK") {
            papp.displayAutoCompleteResults(responseInfo.predictions);
        }
        else {
            console.log(responseInfo);
        }
    })
    .fail(function(error) {
        console.error('ERROR: ', error);
    });
};

papp.searchField = $('#searchField');
papp.userSearchInputResult;

// ================================================AUTOCOMPLETE FUNCTION=============

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
            select: function(event, ui) {
                event.preventDefault();
                $(this).val(ui.item.label);
                papp.userSearchInputResult = ui.item.value;
            },
            focus: function(event, ui) {
                event.preventDefault(); // or return false;
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

papp.placeToPos = function(placeId) {
    const results = $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        dataType: 'json',
        method: 'GET',
        data: {
            key: papp.googleApiKey,
            place_id: placeId
        }
    });
    $.when(results)
    .done(function (result) {
        papp.userLocation = result.results[0].geometry.location;
        papp.reverseGeolocation(papp.userLocation);
        papp.generateUserMarker(papp.userLocation);
        papp.map.setCenter(papp.userLocation);
        papp.map.setZoom(16);
        papp.getAddress(result);
    });
}

papp.reverseGeolocation = function(pos) {

    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        dataType: 'json',
        method: 'GET',
        data: {
            key: papp.googleApiKey,
            latlng: pos.lat + ',' + pos.lng
        }
    }).then(function(addressResult) {
        papp.getAddress(addressResult);
    });
}

papp.getAddress = function(addressResult) {
    if (addressResult.status === "OK") {
        let useCity = false;
        let addressToSearch = '';

        const addressComponents = addressResult.results[0].address_components;

        const postalCodeComponent = addressComponents.filter(function(component){
            return component.types[0] === "postal_code";
        });

        if(postalCodeComponent !== undefined) {
            const cityComponent = addressComponents.filter(function(component){
                return component.types[0] === "locality";
            });

            const provinceComponent = addressComponents.filter(function(component){
                return component.types[0] === "administrative_area_level_1";
            });

            const city = cityComponent[0].long_name;
            const province = provinceComponent[0].long_name;

            addressToSearch = city + ', ' + province;
            useCity = true;
        } 
        else {
            addressToSearch = postalCodeComponent[0].long_name;
        }

        papp.getShelters(addressToSearch);
    } 
    else {
        console.log("no results");
    }

};

papp.getShelters = function(location) {
    $.ajax({
        url: 'https://api.petfinder.com/pet.find',
        dataType: 'jsonp',
        method: 'GET',
        data: {
            key: papp.petApiKey,
            animal: 'bird',
            format: 'json',
            location: location
        }
     }).then(function(petfinderInfo){
         papp.petData = petfinderInfo.petfinder.pets.pet;
         let shelterAddressesArray =[];
         let shelterIdsArray =[];
         let address = '';
         for (var i=0; i < papp.petData.length; i++) {
            if(papp.petData[i].contact.address1.$t !== undefined) {
                address = `${papp.petData[i].contact.address1.$t}, `;
            }
            shelterAddressesArray.push(address + papp.petData[i].contact.city.$t + ', ' + papp.petData[i].contact.state.$t);
            shelterIdsArray.push(papp.petData[i].shelterId.$t);
        }
        shelterAddressesArray = _.uniq(shelterAddressesArray);
        shelterIdsArray = _.uniq(shelterIdsArray);
        papp.getShelterInfo(shelterAddressesArray, shelterIdsArray);
    });
}

papp.getShelterInfo = function(shelterAddressesArray, shelterIdsArray) {
    const shelterInfoArray = shelterIdsArray.map(function(shelter){
        return $.ajax({
            url: 'https://api.petfinder.com/shelter.get',
            dataType: 'jsonp',
            method: 'GET',
            data: {
                key: papp.petApiKey,
                format: 'json',
                id: shelter
            }
        });
    });
    $.when.apply(null, shelterInfoArray)
        .then(function() {
            let shelters = Array.prototype.slice.call(arguments);
            shelters = shelters.map(function(shelter) {
                return {name: shelter[0].petfinder.shelter.name.$t, shelterId: shelter[0].petfinder.shelter.id.$t};
            });

            papp.getSheltersGeoCode(shelterAddressesArray, shelters);
        });
}

papp.getSheltersGeoCode = function(shelterAddresses, shelterNames) {
    const shelterGeoArray = shelterAddresses.map(function(shelter){
        return $.ajax({
            url:'https://maps.googleapis.com/maps/api/geocode/json',
            dataType: 'json',
            method: 'GET',
            data: {
                key: papp.googleApiKey,
                address: shelter
            }
        })
    });
    $.when.apply(null, shelterGeoArray)
        .then(function() {
            let sheltersGeo = Array.prototype.slice.call(arguments);
            if(sheltersGeo.length > 0) {
                sheltersGeo = sheltersGeo.map(function(shelter) {
                    return shelter[0].results[0].geometry.location;
                });

                // reset neardby markers
                papp.markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                papp.markers = [];
                // end of reset

                for (var x = 0; x < sheltersGeo.length; x++){
                    papp.markers.push(papp.generateMapMarker(sheltersGeo[x]));
                }
                for (var y = 0; y < shelterNames.length; y++) {
                    papp.markers[y].setIcon(papp.birdMarkerImage);
                    papp.assignInfoWindow(papp.markers[y], shelterNames[y]);
                }
                papp.setMapBounds(papp.markers);
            }
            else {
                console.log('No shelters nearby');
            }
            
        });
}

papp.setMapBounds = function(markers) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
     bounds.extend(markers[i].getPosition());
    }

    papp.map.fitBounds(bounds);
}

// Was bored, added a "World's Largest Rubber Duck" easter egg in Lake Ontario. -Brian
papp.spawnTheDuck = function() {
    // The Duck's location
    const pos = {lat: 43.6389166, lng: -79.3653652};

    // The Duck's marker
    const marker = new google.maps.Marker({
        map: papp.map,
        position: pos,
        icon: 'assets/images/wlrd_marker.png',
        visible: false
    });

    // When the Duck is clicked, it's home page is opened in a new tab
    google.maps.event.addListener(marker, 'click', function() {
        const win = window.open('https://www.thebigduck.us/', '_blank');
        if (win) {
            win.focus();
        } 
    });

    // The Duck marker is only visible when the user zooms in to 17 or higher
    papp.map.addListener('zoom_changed', function() {
        console.log(papp.map.getZoom());
        if(papp.map.getZoom() >= 17) {
            console.log('show Duck', marker);
            marker.setVisible(true);
        }
        else {
            marker.setVisible(false);
       }
    });

}


papp.events = function() {
    $('button').on('click', function() {
        const buttonClicked = $(this);
        // if(buttonClicked.val() === 'pet1') {
        //     papp.displayPetInfo(0);
        // }
        // else if(buttonClicked.val() === 'pet2') {
        //     papp.displayPetInfo(1);
        // }
        // else if(buttonClicked.val() === 'pet3') {
        //     papp.displayPetInfo(2);
        // }
        // else if(buttonClicked.val() === 'pet4') {
        //     papp.displayPetInfo(15);
        // }
    });

    $('#searchForm').on('submit', function(event) {
        event.preventDefault();

        console.log('form submitted')
        if(papp.userSearchInputResult !== undefined) {
            papp.placeToPos(papp.userSearchInputResult);
        }

        $('.searchOverlay').addClass('searchOverlayTop');
    });

    papp.searchField.on('input', function(event) {
        papp.searchFor($(this).val());
    });

    $('#autolocate').on('click', function (event){
        event.preventDefault;
        papp.locateUser();
    })
};

papp.init = function(){
    papp.initMap();
    papp.events();
    papp.spawnTheDuck();
}

$(function(){
    papp.init();
});