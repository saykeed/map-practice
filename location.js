let getLocateBtn = document.querySelector("#locateBtn");
let getMapDiv = document.querySelector("#mapDiv");
let getMapImage = document.querySelector("#mapImage");
















/*

function myMap() {
  var mapCanvas = document.querySelector("#mapImage");
  var mapOptions = {
      center: new google.maps.LatLng(9.0570752, 7.471104),
      zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}


*/










let locateMe = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMyLocation, showError);
      } else { 
        getMapDiv.innerHTML = "Geolocation is not supported by this browser.";
      }
}



let showMyLocation = function (position) {
    getMapDiv.innerHTML =  "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    
    var mapCanvas = document.querySelector("#mapImage");
    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
      


}


function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      getMapDiv.innerHTML = "why you deny the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      getMapDiv.innerHTML = "Location information is unavailable, abeg check your internet connection"
      break;
    case error.TIMEOUT:
      getMapDiv.innerHTML = "Omo e don timeout ooo, e be like say na your internet ooo."
      break;
    case error.UNKNOWN_ERROR:
      getMapDiv.innerHTML = "Shey dis your device good like this, cos your location suppose show oooo "
      break;
  }
}

