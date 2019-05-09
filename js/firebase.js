// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBN1Ym9aSGeEJ5FWUyqPQdkjOpDZJB1pYQ",
  authDomain: "my-exercise-buddy.firebaseapp.com",
  databaseURL: "https://my-exercise-buddy.firebaseio.com",
  projectId: "my-exercise-buddy",
  storageBucket: "my-exercise-buddy.appspot.com",
  messagingSenderId: "207034598072",
  appId: "1:207034598072:web:288ee2091103ce35"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
