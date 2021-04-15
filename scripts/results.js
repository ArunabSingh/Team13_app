const origin = document.querySelector("#start"); //origin location input 
const destination = document.querySelector("#finish"); //destination location input 
const distance = document.querySelector("#totalDistance"); //distance input 
const duration = document.querySelector("#totalDuration"); //duration input 

//Gets the data from localStorage and then converts it into a String.
var myobj = JSON.parse(localStorage.getItem('formdata'));
console.log(myobj);

//Assigns the values entered in the previous page to their respective fields on this page.
origin.value = myobj.originLoc;
destination.value = myobj.destLoc;
distance.value = myobj.totalDist;
duration.value = myobj.totalDur;

/**
 * Writes the data entered on the previous page to a subcollection
 * called 'Routes' which is stored under the unique users Document.
 */
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection("users").doc(user.uid)
            .collection("Routes").add({
                "OriginLocation": myobj.originLoc,
                "DestinationLocation": myobj.destLoc,
                "Distance": myobj.totalDist,
                "Duration": myobj.totalDur,
            }).catch((err) => {
                console.log(err)
            })
    }
})

//Converts the distance calculated from the previous
//page into a Float which is further used in calculations.
var distInKm = parseFloat(distance.value);
console.log(distInKm);

//Converts the duration calculated from the previous
//page into a Float which is further used in calculations.
var durInMins = parseFloat(duration.value);
console.log(durInMins);

//Calculating fares based on distance and duration
/**
 * Calculates the fare of uber based on the distance of the ride.
 */
function uber() {
    const baseFare1 = 6;
    const farePerKm1 = 0.8;
    var price = 0;
    if (distInKm <= 4) {
        price = baseFare1;
        document.querySelector("#uberPrice").innerHTML = price.toFixed(2);
    } else {
        price = (6 + (distInKm - 4) * farePerKm1);
        document.querySelector("#uberPrice").innerHTML = price.toFixed(2);
    }
}
uber();

/**
 * Calculates the fare of lyft based on the distance of the ride.
 */
function lyft() {
    const baseFare2 = 7;
    const farePerKm2 = 1;
    var price = 0;

    if (distInKm <= 4) {
        price = baseFare2;
        document.querySelector("#lyftPrice").innerHTML = price.toFixed(2);
    } else {
        price = (baseFare2 + (distInKm - 4) * farePerKm2);
        document.querySelector("#lyftPrice").innerHTML = price.toFixed(2);
    }
}
lyft();

/**
 * Calculates the fare of evo based on the distance of the ride.
 */
function evo() {
    const baseFare1 = 17;
    const farePerKm1 = 1;
    var price = 0;
    if (distInKm <= 10) {
        price = baseFare1;
        document.querySelector("#evoPrice").innerHTML = price.toFixed(2);
    } else {
        price = (baseFare1 + (distInKm - 10) * farePerKm1);
        document.querySelector("#evoPrice").innerHTML = price.toFixed(2);
    }
}
evo();

/**
 * Calculates the fare of evo based on the distance of the ride.
 */
function modo() {
    const baseFare2 = 19;
    const farePerKm2 = 1.1;
    var price = 0;
    if (distInKm <= 11) {
        price = baseFare2;
        document.querySelector("#modoPrice").innerHTML = price.toFixed(2);
    } else {
        price = (baseFare2 + (distInKm - 11) * farePerKm2);
        document.querySelector("#modoPrice").innerHTML = price.toFixed(2);
    }
}
modo();


/**
 * Reads all the details of uber company from the uber document under companies collection.
 */
function readUberDetails() {
    const uber = db.collection("Companies").doc("Uber");

    /** Reads the Name of the company */
    uber.onSnapshot(function (snap) {
        document.querySelector("#compName1").innerHTML = snap.data().name; //using vanilla javascript
    });

    /** Reads the Logo of the company */
    uber.onSnapshot(function (snap) {
        let logo = document.querySelector("#compImg1");
        logo.src = snap.data().logo;
    });
    /** Reads the eide type of the company */
    uber.onSnapshot(function (snap) {
        document.querySelector("#type1").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}

readUberDetails();

/**
 * Reads all the details of lyft company from the lyft document under companies collection.
 */
function readLyftDetails() {
    const lyft = db.collection("Companies").doc("Lyft");

    /** Reads the Name of the company */
    lyft.onSnapshot(function (snap) {
        document.querySelector("#compName2").innerHTML = snap.data().name; //using vanilla javascript
    });
    /** Reads the Logo of the company */
    lyft.onSnapshot(function (snap) {
        let logoLyft = document.querySelector("#compImg2");
        logoLyft.src = snap.data().logo;
    });
    /** Reads the eide type of the company */
    lyft.onSnapshot(function (snap) {
        document.querySelector("#type2").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}
readLyftDetails();

/**
 * Reads all the details of evo company from the evo document under companies collection.
 */
function readEvoDetails() {
    const evo = db.collection("Companies").doc("Evo");
    /** Reads the Name of the company */
    evo.onSnapshot(function (snap) {
        document.querySelector("#compName3").innerHTML = snap.data().name; //using vanilla javascript
    });
    /** Reads the Logo of the company */
    evo.onSnapshot(function (snap) {
        let logoEvo = document.querySelector("#compImg3");
        logoEvo.src = snap.data().logo;
    });
    /** Reads the eide type of the company */
    evo.onSnapshot(function (snap) {
        document.querySelector("#type3").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}

readEvoDetails();

/**
 * Reads all the details of modo company from the modo document under companies collection.
 */
function readModoDetails() {
    const modo = db.collection("Companies").doc("Modo");
    /** Reads the Name of the company */
    modo.onSnapshot(function (snap) {
        document.querySelector("#compName4").innerHTML = snap.data().name; //using vanilla javascript
    });
    /** Reads the Logo of the company */
    modo.onSnapshot(function (snap) {
        let logoModo = document.querySelector("#compImg4");
        logoModo.src = snap.data().logo;
    });
    /** Reads the eide type of the company */
    modo.onSnapshot(function (snap) {
        document.querySelector("#type4").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}
readModoDetails();