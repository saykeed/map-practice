let getLocateBtn = document.querySelector("#locateBtn");
let getMapDiv = document.querySelector("#mapDiv");
let getMapImage = document.querySelector("#mapImage");

let locateMe = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMyLocation);
      } else { 
        getMapDiv.innerHTML = "Geolocation is not supported by this browser.";
      }
}



let showMyLocation = function (position) {
    getMapDiv.innerHTML =  "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    console.log(position.coords.latitude);


}

