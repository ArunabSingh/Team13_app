// Get Estimate button after the map
const submitEntry = document.querySelector("#submission");

/**
 * Displays the Map after the user enters their origin and destination location.
 */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        center: {
            lat: 49.2588,
            lng: -122.9294
        },
        zoom: 9.2,
    });
    new AutocompleteDirectionsHandler(map);
}

/**
 * Auto Complete when the user is entering their origin and destination location.
 */
class AutocompleteDirectionsHandler {
    constructor(map) {
        this.map = map;
        this.originPlaceId = "";
        this.destinationPlaceId = "";
        this.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
        const originInput = document.getElementById("origin-input");
        const destinationInput = document.getElementById("destination-input");
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
        this.setupClickListener(
            "changemode-driving",
            google.maps.TravelMode.DRIVING
        );
        this.setupPlaceChangedListener(originAutocomplete, "ORIG");
        this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            originInput
        );
        this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(
            destinationInput
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
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            }
        );
    }
}

/**
 * initializes the google maps event when the page is loaded.
 */
function initialize() {
    google.maps.event.addDomListener(window, "load", calculateDistance);
}

// Runs getEstimate when the "Get Estimate" buttonn is clicked
submitEntry.addEventListener('click', getEstimate);

/**
 * Calls the calculateDistance function.
 */
function getEstimate() {
    calculateAttributes();
}

/**
 * calculates the Distance and Duration of the user entered ride.
 */
async function calculateAttributes() {
    const service = new google.maps.DistanceMatrixService();
    const origin = document.getElementById("origin-input").value;
    const destination = document.getElementById("destination-input").value;

    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    }, callback);
}

/**
 * Sets up the values for the variables 
 * and then fills them with the required values
 * and then calls saveDataPage1 function with required values
 * and then redirects the user to next page.
 * @param {the response of the function} response 
 * @param {the status of the function} status 
 */
function callback(response, status) {
    var orig = document.getElementById("origin-input"),
        dest = document.getElementById("destination-input"),
        dist = document.getElementById("dist"),
        dura = document.getElementById("dura");

    if (status == "OK") {
        orig.value = response.originAddresses[0];
        dest.value = response.destinationAddresses[0];
        dist.value = response.rows[0].elements[0].distance.text;
        dura.value = response.rows[0].elements[0].duration.text;

        setDataPage1(orig.value, dest.value, dist.value, dura.value);
        location.href = "results.html";
    }
}

/**
 * This function stores the values of user inputs (origin location and destination location)
 * and calculated distance and duration into localStorage.
 * @param {String} ol origin Location- entered by user
 * @param {String} dl destination Location- entered by user
 * @param {String} di distance - calculated inside the calculateDistance function
 * @param {String} du duration - calculated inside the calculateDistance function
 */
function setDataPage1(ol, dl, di, du) {
    //construct the JSON object here
    //you can get from user input form
    var myLocation = ol;
    var myDestlocation = dl;
    var myDistance = di;
    var myDuration = du;
    var obj = {
        "originLoc": myLocation,
        "destLoc": myDestlocation,
        "totalDist": myDistance,
        "totalDur": myDuration
    }

    //save the object to local storage
    localStorage.setItem('formdata', JSON.stringify(obj));
}