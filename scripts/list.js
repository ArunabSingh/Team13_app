
function readCompanyName(){
    db.collection("Companies").doc("CarShare")
    .onSnapshot(function(snap){
        document.querySelector("#compName3").innerHTML = snap.data().Evo;    //using vanilla javascript
    })

    db.collection("Companies").doc("CarShare")
    .onSnapshot(function(snap){
        document.querySelector("#compName4").innerHTML = snap.data().Modo;    //using vanilla javascript
    })

    db.collection("Companies").doc("DriverForHire")
    .onSnapshot(function(snap){
        document.querySelector("#compName1").innerHTML = snap.data().Uber;    //using vanilla javascript
    })

    db.collection("Companies").doc("DriverForHire")
    .onSnapshot(function(snap){
        document.querySelector("#compName2").innerHTML = snap.data().Lyft;    //using vanilla javascript
    })
}
readCompanyName();

function readCompanyLogo(){
    db.collection("Logos").doc("Uber")
    .onSnapshot(function(snap){
        let logo1 = document.querySelector("#compImg1");
        logo1.src = snap.data().img;    //using vanilla javascript
    })

    db.collection("Logos").doc("Lyft")
    .onSnapshot(function(snap){
        let logo2 = document.querySelector("#compImg2");
        logo2.src = snap.data().img;    //using vanilla javascript
    })

    db.collection("Logos").doc("Evo")
    .onSnapshot(function(snap){
        let logo3 = document.querySelector("#compImg3");
        logo3.src = snap.data().img;    //using vanilla javascript
    })

    db.collection("Logos").doc("Modo")
    .onSnapshot(function(snap){
        let logo4 = document.querySelector("#compImg4");
        logo4.src = snap.data().img;    //using vanilla javascript
    })
}

readCompanyLogo();

function readRideType(){
    db.collection("ride-type").doc("driverForHire")
    .onSnapshot(function(snap){
        document.querySelector("#type1").innerHTML = snap.data().typeName;    //using vanilla javascript
    })

    db.collection("ride-type").doc("driverForHire")
    .onSnapshot(function(snap){ 
        document.querySelector("#type2").innerHTML = snap.data().typeName;    //using vanilla javascript
    })

    db.collection("ride-type").doc("carShare")
    .onSnapshot(function(snap){
        document.querySelector("#type3").innerHTML = snap.data().typeName;    //using vanilla javascript
    })

    db.collection("ride-type").doc("carShare")
    .onSnapshot(function(snap){                     //.data() returns data object
        document.querySelector("#type4").innerHTML = snap.data().typeName;    //using vanilla javascript
    })
}

readRideType();

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

