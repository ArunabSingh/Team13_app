// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", function (e) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
        window.location.href = '../index.html';
    });
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapTypeControl: false,
        center: {
            lat: 49.1688,
            lng: -122.7195
        },
        zoom: 10,
    });
    new AutocompleteDirectionsHandler(map);
}

class AutocompleteDirectionsHandler {
    constructor(map) {
        this.map = map;
        this.originPlaceId = "";
        this.destinationPlaceId = "";
        this.travelMode = google.maps.TravelMode.WALKING;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
        const originInput = document.getElementById("origin-input");
        const destinationInput = document.getElementById("destination-input");
        const modeSelector = document.getElementById("mode-selector");
        const originAutocomplete = new google.maps.places.Autocomplete(
            originInput
        );
        // Specify just the place data fields that you need.
        originAutocomplete.setFields(["place_id"]);
        const destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput
        );
        // Specify just the place data fields that you need.
        destinationAutocomplete.setFields(["place_id"]);
        // this.setupClickListener(
        //     "changemode-walking",
        //     google.maps.TravelMode.WALKING
        // );
        // this.setupClickListener(
        //     "changemode-transit",
        //     google.maps.TravelMode.TRANSIT
        // );
        this.setupClickListener(
            "changemode-driving",
            google.maps.TravelMode.DRIVING
        );
        this.setupPlaceChangedListener(originAutocomplete, "ORIG");
        this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            originInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            destinationInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            modeSelector
        );

    }
    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    setupClickListener(id, mode) {
        const radioButton = document.getElementById(id);
        radioButton.addEventListener("click", () => {
            this.travelMode = mode;
            this.route();
        });
    }
    setupPlaceChangedListener(autocomplete, mode) {
        autocomplete.bindTo("bounds", this.map);
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();

            if (!place.place_id) {
                window.alert("Please select an option from the dropdown list.");
                return;
            }

            if (mode === "ORIG") {
                this.originPlaceId = place.place_id;
            } else {
                this.destinationPlaceId = place.place_id;
            }
            this.route();
        });
    }
    route() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
            return;
        }
        const me = this;
        this.directionsService.route({
                origin: {
                    placeId: this.originPlaceId
                },
                destination: {
                    placeId: this.destinationPlaceId
                },
                travelMode: this.travelMode,
            },
            async (response, status) => {
                if (status === "OK") {
                    await me.directionsRenderer.setDirections(response);
                    // var center = response.routes[0].overview_path[Math.floor(response.routes[0].overview_path.length / 2)];
                    // infowindow.setPosition(center);
                    // infowindow.setContent(response.routes[0].legs[0].distance.text);
                    // infowindow.open(me.map);
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            }
        );
    }
}

function initialize() {
    google.maps.event.addDomListener(window, "load", calculateDistance);
}

function calculateDistance() {
    // Distance Calculation
    const service = new google.maps.DistanceMatrixService();
    const origin = document.getElementById("origin-input").value;
    const destination = document.getElementById("destination-input").value;;

    // const geocoder = new google.maps.Geocoder();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    }, callback);
}

function callback(response, status) {
    var orig = document.getElementById("origin-input"),
        dest = document.getElementById("destination-input"),
        dist = document.getElementById("dist");

    if (status == "OK") {
        orig.value = response.originAddresses[0];
        dest.value = response.destinationAddresses[0];
        dist.value = response.rows[0].elements[0].distance.text;
        writeData(orig.value, dest.value, dist.value);
    } else {
        alert("Error: " + status);
    }
}



function writeData(orig, dest, dist) {
    var routesRef = db.collection("routes");

    routesRef.add({
        oringinLocation: orig,
        destinationLocation: dest,
        distance: dist,
    });
}

