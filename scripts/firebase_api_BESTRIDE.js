  // Our web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAjqS8-q6Abj5tDoubu-yTm52YZfFa5UT0",
    authDomain: "bestride-c8357.firebaseapp.com",
    projectId: "bestride-c8357",
    storageBucket: "bestride-c8357.appspot.com",
    messagingSenderId: "570741020759",
    appId: "1:570741020759:web:15a46aab1ea961f48eeb12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //making auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();