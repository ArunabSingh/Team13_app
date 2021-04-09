const origin = document.querySelector("#start");
const destination = document.querySelector("#finish");
const distance = document.querySelector("#totalDistance");
const duration = document.querySelector("#totalDuration");

var myobj = JSON.parse(localStorage.getItem('formdata'));
console.log(myobj);
//do something with the object
//console.log(myobj.name);   //to print name field

origin.innerHTML = myobj.originLoc;
destination.innerHTML = myobj.destLoc;
distance.innerHTML = myobj.totalDist;
duration.innerHTML = myobj.totalDur;

firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").doc(user.uid)
        .collection("Routes").add({
            "OriginLocation": myobj.originLoc,
            "DestinationLocation": myobj.destLoc,
            "Distance": myobj.totalDist,
            "Duration": myobj.totalDur,
        }).catch((err) => {
            console.log(err)
        })
})

var distInKm = parseFloat(distance.innerHTML);
console.log(distInKm);
var durInMins = parseFloat(duration.innerHTML);
console.log(durInMins);
// var res = distance.slice(0, distance.length - 2);
// var distRide = parseFloat(res);
// console.log(distRide);

//Calculating fares based on distance and duration
//UBER
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

//LYFT
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

//UBER
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

//LYFT
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



function readUberDetails() {
    const uber = db.collection("Companies").doc("Uber");

    uber.onSnapshot(function (snap) {
        document.querySelector("#compName1").innerHTML = snap.data().name; //using vanilla javascript
    });

    uber.onSnapshot(function (snap) {
        let logo = document.querySelector("#compImg1");
        logo.src = snap.data().logo;
    });

    uber.onSnapshot(function (snap) {
        document.querySelector("#type1").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}

readUberDetails();

function readLyftDetails() {
    const lyft = db.collection("Companies").doc("Lyft");

    lyft.onSnapshot(function (snap) {
        document.querySelector("#compName2").innerHTML = snap.data().name; //using vanilla javascript
    });

    lyft.onSnapshot(function (snap) {
        let logoLyft = document.querySelector("#compImg2");
        logoLyft.src = snap.data().logo;
    });

    lyft.onSnapshot(function (snap) {
        document.querySelector("#type2").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}
readLyftDetails();

function readEvoDetails() {
    const evo = db.collection("Companies").doc("Evo");

    evo.onSnapshot(function (snap) {
        document.querySelector("#compName3").innerHTML = snap.data().name; //using vanilla javascript
    });

    evo.onSnapshot(function (snap) {
        let logoEvo = document.querySelector("#compImg3");
        logoEvo.src = snap.data().logo;
    });

    evo.onSnapshot(function (snap) {
        document.querySelector("#type3").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}

readEvoDetails();

function readModoDetails() {
    const modo = db.collection("Companies").doc("Modo");

    modo.onSnapshot(function (snap) {
        document.querySelector("#compName4").innerHTML = snap.data().name; //using vanilla javascript
    });

    modo.onSnapshot(function (snap) {
        let logoModo = document.querySelector("#compImg4");
        logoModo.src = snap.data().logo;
    });

    modo.onSnapshot(function (snap) {
        document.querySelector("#type4").innerHTML = snap.data().rideType; //using vanilla javascript
    });
}
readModoDetails();