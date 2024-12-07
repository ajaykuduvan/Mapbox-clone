// Correctly set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheWt1bWFyY3NlIiwiYSI6ImNtNGUwOWc4aTBxOGIya3M4cHVyZjAxbG8ifQ.SyCeLLUbbztPlOavusvsew';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setUpMap([-2.28, 41.45]);
}

function setUpMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}


