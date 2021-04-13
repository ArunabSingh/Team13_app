/**
 * Reads the User's name and email from there users collection and appends it to the profile page.
 */
function getUserAttributes() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name; // Gets the name of the user
                    var m = doc.data().email; // Gets the email of the user
                    $("#userName").text(n); //Appends the name to name id
                    $("#userEmail").text(m); //Appends the email to email id
                })
        } else { //If the user is not logged in, Asks them to login and shows the button to login and Sign Up
            $("#profile").html(`<div>Please Login or Sign Up to access your profile page. </div><br>
            <button class="logged-out"><i class="fa fa-sign-in" aria-hidden="true"></i><a
            class="navbar-active" href="login.html">LOGIN</a></button><br><br>
            <button class="logged-out"><i class="fa fa-user-plus" aria-hidden="true"></i><a
            class="navbar-active" href="login.html">SIGNUP</button>`);
        }
    });
}
getUserAttributes();

/**
 * Displays all the searches made by the user by entering origin location and destination location on the form page.
 * Reads the data from the routes subcollection and appends it to to the #Searches div.
 */
function displayData() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        db.collection("users").doc(user.uid).collection("Routes") //Refers to the subcollection called Routes inside every user collection
            .limit(10) //limits the trips shown on teh profile page to 9
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
        }
    })
}
displayData();