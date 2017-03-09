var papp = {};

papp.map;

papp.googleApiKey = 'AIzaSyADQWtBBozt_p2XH0tYlJQ71GOqcI3XtEk';

papp.petApiKey = '5643b4e4140ed1e99bc21e6bbbfb3fd6';

papp.elements = {
    $petDetails: $('#petDetails'),
    $petGallery: $('#petGallery'),
    $petInfo: $('#petInfo'),
    $petName: $('#petName'),
    $petBreed: $('#petBreed'),
    $petGender: $('#petGender'),
    $petAge: $('#petAge'),
    $petDescription: $('#petDescription'),
    $petAddress: $('#petAddress')
};

papp.petData;

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

papp.displayPetInfo = function(petIndex) {

    const name = papp.petData[petIndex].name.$t;
    const age = papp.petData[petIndex].age.$t;
    const gender = papp.petData[petIndex].sex.$t;
    const media = papp.petData[petIndex].media;
    const streetAddress = papp.petData[petIndex].contact.address1.$t;
    const city = papp.petData[petIndex].contact.city.$t;
    const state = papp.petData[petIndex].contact.state.$t;
    const zip = papp.petData[petIndex].contact.zip.$t;
    const email = papp.petData[petIndex].contact.email.$t;
    const address = `${streetAddress}, ${city}, ${state}, ${zip}, ${email}`;

    papp.displayPetMedia(media);

    let description = 'No description availible for this pet.'
    if(papp.petData[petIndex].description.$t !== undefined) {
        description = papp.petData[petIndex].description.$t;
    }

    papp.elements.$petName.html(name);
    papp.elements.$petGender.html(gender);
    papp.elements.$petAge.html(age);
    papp.elements.$petDescription.html(description);
    papp.elements.$petAddress.html(address);

    // papp.elements.$petDetails
    // papp.elements.$petInfo
    // papp.elements.$petBreed
};


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
        papp.generateMapMarker(pos);
        console.log(pos);
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
        console.log(papp.petData);
        let shelterIdArray =[];
        for (var i=0; i < papp.petData.length; i++) {
        shelterIdArray.push(papp.petData[i].contact.address1.$t + ', ' + papp.petData[i].contact.city.$t + ', ' + papp.petData[i].contact.state.$t);
        }
        shelterIdArray = _.uniq(shelterIdArray);
        console.log(shelterIdArray);
    });
}

papp.getSheltersGeoCode = function(shelterAddresses) {

}

papp.getSheltersAddresses = function(shelterIds) {


}

papp.events = function() {
    $('button').on('click', function() {
        const buttonClicked = $(this);
        if(buttonClicked.val() === 'pet1') {
            papp.displayPetInfo(0);
        }
        else if(buttonClicked.val() === 'pet2') {
            papp.displayPetInfo(1);
        }
        else if(buttonClicked.val() === 'pet3') {
            papp.displayPetInfo(2);
        }
        else if(buttonClicked.val() === 'pet4') {
            papp.displayPetInfo(15);
        }
    });
};

papp.init = function(){
    papp.initMap();
    papp.events();
}

$(function(){
    papp.init();
});