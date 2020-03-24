
var building = JSON.parse(buildingString);

// Map
function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: { lat: building.entrances[0].lat, lng: building.entrances[0].long }
    });
    directionsRenderer.setMap(map);

    building.entrances.forEach((entrance) => {
        addMarker({ lat: entrance.lat, lng: entrance.long });
    });

    //Add marker
    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: map
        });

        var buildingName = building.name.link("http://maps.google.com/maps?q=loc:" + coords.lat + "," + coords.lng);

        var infoWindow = new google.maps.InfoWindow({
            content: '<h4>' + buildingName + '</h4>'
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: { query: document.getElementById('start').value },
            destination: { query: document.getElementById('end').value },
            travelMode: 'WALKING',
        },
        function (response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });