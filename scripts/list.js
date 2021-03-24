var origin = localStorage.getItem('originLocation');
var destination = localStorage.getItem('destLocation');
var distance = localStorage.getItem('totalDistance');
var duration = localStorage.getItem('totalDuration');

document.querySelector('#start').innerHTML = origin;
document.querySelector('#finish').innerHTML = destination;
document.querySelector('#totalDistance').innerHTML = distance;
document.querySelector('#totalDuration').innerHTML = duration;


function readUberDetails(){
    const uber = db.collection("Companies").doc("Uber");

    uber.onSnapshot(function(snap){
        document.querySelector("#compName1").innerHTML = snap.data().name;    //using vanilla javascript
    });

    uber.onSnapshot(function(snap){
        let logo = document.querySelector("#compImg1");
        logo.src = snap.data().logo; 
    });

    uber.onSnapshot(function(snap){
        document.querySelector("#type1").innerHTML = snap.data().rideType;    //using vanilla javascript
    });
}

readUberDetails();

function readLyftDetails(){
    const lyft = db.collection("Companies").doc("Lyft");

    lyft.onSnapshot(function(snap){
        document.querySelector("#compName2").innerHTML = snap.data().name;    //using vanilla javascript
    });

    lyft.onSnapshot(function(snap){
        let logoLyft = document.querySelector("#compImg2");
        logoLyft.src = snap.data().logo; 
    });

    lyft.onSnapshot(function(snap){
        document.querySelector("#type2").innerHTML = snap.data().rideType;    //using vanilla javascript
    });
}
readLyftDetails();

function readEvoDetails(){
    const evo = db.collection("Companies").doc("Evo");

    evo.onSnapshot(function(snap){
        document.querySelector("#compName3").innerHTML = snap.data().name;    //using vanilla javascript
    });

    evo.onSnapshot(function(snap){
        let logoEvo = document.querySelector("#compImg3");
        logoEvo.src = snap.data().logo; 
    });

    evo.onSnapshot(function(snap){
        document.querySelector("#type3").innerHTML = snap.data().rideType;    //using vanilla javascript
    });
}

readEvoDetails();

function readModoDetails(){
    const modo = db.collection("Companies").doc("Modo");

    modo.onSnapshot(function(snap){
        document.querySelector("#compName4").innerHTML = snap.data().name;    //using vanilla javascript
    });

    modo.onSnapshot(function(snap){
        let logoModo = document.querySelector("#compImg4");
        logoModo.src = snap.data().logo; 
    });

    modo.onSnapshot(function(snap){
        document.querySelector("#type4").innerHTML = snap.data().rideType;    //using vanilla javascript
    });
}
readModoDetails();

// function readCompanyName(){
//     db.collection("Companies").doc("")
//     .onSnapshot(function(snap){
//         document.querySelector("#compName3").innerHTML = snap.data().Evo;    //using vanilla javascript
//     })

//     db.collection("Companies").doc("CarShare")
//     .onSnapshot(function(snap){
//         document.querySelector("#compName4").innerHTML = snap.data().Modo;    //using vanilla javascript
//     })

//     db.collection("Companies").doc("DriverForHire")
//     .onSnapshot(function(snap){
//         document.querySelector("#compName1").innerHTML = snap.data().Uber;    //using vanilla javascript
//     })

//     db.collection("Companies").doc("DriverForHire")
//     .onSnapshot(function(snap){
//         document.querySelector("#compName2").innerHTML = snap.data().Lyft;    //using vanilla javascript
//     })
// }
// readCompanyName();

// function readCompanyLogo(){
//     db.collection("Logos").doc("Uber")
//     .onSnapshot(function(snap){
//         let logo1 = document.querySelector("#compImg1");
//         logo1.src = snap.data().img;    //using vanilla javascript
//     })

//     db.collection("Logos").doc("Lyft")
//     .onSnapshot(function(snap){
//         let logo2 = document.querySelector("#compImg2");
//         logo2.src = snap.data().img;    //using vanilla javascript
//     })

//     db.collection("Logos").doc("Evo")
//     .onSnapshot(function(snap){
//         let logo3 = document.querySelector("#compImg3");
//         logo3.src = snap.data().img;    //using vanilla javascript
//     })

//     db.collection("Logos").doc("Modo")
//     .onSnapshot(function(snap){
//         let logo4 = document.querySelector("#compImg4");
//         logo4.src = snap.data().img;    //using vanilla javascript
//     })
// }

// readCompanyLogo();

// function readRideType(){
//     db.collection("ride-type").doc("driverForHire")
//     .onSnapshot(function(snap){
//         document.querySelector("#type1").innerHTML = snap.data().typeName;    //using vanilla javascript
//     })

//     db.collection("ride-type").doc("driverForHire")
//     .onSnapshot(function(snap){ 
//         document.querySelector("#type2").innerHTML = snap.data().typeName;    //using vanilla javascript
//     })

//     db.collection("ride-type").doc("carShare")
//     .onSnapshot(function(snap){
//         document.querySelector("#type3").innerHTML = snap.data().typeName;    //using vanilla javascript
//     })

//     db.collection("ride-type").doc("carShare")
//     .onSnapshot(function(snap){                     //.data() returns data object
//         document.querySelector("#type4").innerHTML = snap.data().typeName;    //using vanilla javascript
//     })
// }

// readRideType();

// function readDistance(){
//     db.collection("users").doc(user.uid)
//     .onSnapshot(function(snap){
//         document.querySelector("#totalDistance").innerHTML = snap.data().distance;    //using vanilla javascript
//     })
// }

//formula for uber


function goBack() {
    window.history.back();
  }



