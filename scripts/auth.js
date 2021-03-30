// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // Do something for the user here. 
      $('.logged-in').css('display', 'block');
      $('.logged-out').css('display', 'none');

    } else {
      // No user is signed in.
      $('.logged-in').css('display', 'none');
      $('.logged-out').css('display', 'block');
    }
  });

  function getName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    $("#username").text(n);
                })
        } else {
            // No user is signed in.
        }
    });
}
getName();

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", function (e) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
        window.location.href = '../index.html';
    });
});

//   firebase.auth().onAuthStateChanged(function(user){
//     db.collection("users").doc(user.uid).update(
//     {
//     "name":user.displayName, 
//     "email":user.email,
//     "originLocation" : "",
//     "destinationLocation" : "",
//     "distance" : 0,
//     "duration" : 0
//     });
// });
