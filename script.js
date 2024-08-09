mapboxgl.accessToken = 
'YOUR TOKEN HERE';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
    setupMap([31.2357,30.0444])
}
function setupMap(origin){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: origin,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl();
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(nav, 'top-right');
    
    map.addControl(
        directions,
        'top-left'
    );
}
