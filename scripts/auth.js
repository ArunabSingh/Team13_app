/**
 * Checks if the user status and then shows information on teh papge accordingly
 */
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    $('.logged-in').css('display', 'block'); //Elements with logged-in class are displayed
    $('.logged-out').css('display', 'none'); //Elements with logged-out class are hidden

  } else {
    // No user is signed in.
    $('.logged-in').css('display', 'none'); //Elements with logged-in class are hidden
    $('.logged-out').css('display', 'block'); //Elements with logged-out class are displayed
  }
});


/**
 * Reads the name of the user from the users collection and appends it to navbar to make the user experience more personalized.
 */
function getName() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      db.collection("users").doc(user.uid) //Gets the Logged in Users Document ID
        .get()
        .then(function (doc) {
          var n = doc.data().name; //Gets the name of the user.
          console.log(n);
          $("#username").text(n); //Appends the name to the field with id username
        })
    }
  });
}
getName();

// Logout button in the navbar
const btnLogout = document.getElementById("btnLogout");

/**
 * When the logout button is clicked, it first logs out the user and then redirects them to index page
 */
btnLogout.addEventListener("click", function (e) {
  var promise = firebase.auth().signOut();
  promise.then(function () {
    window.location.href = '../index.html';
  });
});

/**
 * Takes the user to the previous page.
 */
function goBack() {
  window.history.back();
}