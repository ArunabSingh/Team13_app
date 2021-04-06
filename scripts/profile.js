function getUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    var m = doc.data().email;
                    console.log(n);
                    $("#userName").text(n);
                    $("#userEmail").text(m);

                })
        } else {
            // No user is signed in.
        }
    });
}
getUserName();

/**
 * Displays all the searches made by the user by entering origin location and destination location on the form page.
 * Reads the data from the routes subcollection and appends it to to the #Searches div.
 */
function displayData() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Routes") //Refers to the subcollection called Routes inside every user collection
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var orig = doc.data().OriginLocation; //gets the origin location field
                    var dest = doc.data().DestinationLocation; //gets the destination field
                    var dist = doc.data().Distance; //gets the destination field
                    var dur = doc.data().Duration; //gets the destination field

                    var container = $(`<div class = "trip"><h4>Trip Info</h4><b>From:</b> ${orig}<br><b>To:</b>${dest}<br><b>Distance:</b> ${dist}<br><b>Duration:</b> ${dur}</div>`); //Creates a div element with the required output
                    $("#Searches").append(container); // Appends the div element to the div element with id #Searches in the profile.html page
                })
            })
    })
}
displayData();