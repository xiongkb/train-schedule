// for time options
var hour;
var mins;
var frequency;
for (var i = 0; i < 24; i++) {
    console.log("hi"+i);
    hour = $("<option>");
    hour.append(i);
    $("#hour").append(hour);
}
for (var i = 0; i < 60; i = i+5) {
    mins = $("<option>");
    frequency = $("<option>");
    mins.append(i);
    frequency.append(i);
    $("#min").append(mins);
    $("#z-min").append(frequency);
}

// My web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiJ31L3E6h7-dhI_CmRXgGN4kI-dFtBs8",
    authDomain: "ucb-train-schedule-hw.firebaseapp.com",
    databaseURL: "https://ucb-train-schedule-hw.firebaseio.com",
    projectId: "ucb-train-schedule-hw",
    storageBucket: "ucb-train-schedule-hw.appspot.com",
    messagingSenderId: "294459173072",
    appId: "1:294459173072:web:ebf2d8467e0568b46416d5",
    measurementId: "G-3PPGR4QKGM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var data = firebase.database();