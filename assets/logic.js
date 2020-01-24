$(document).ready(start);
// for time options
var hour;
var mins;
var frequency;
var x;
for (var i = 0; i < 24; i++) {
    hour = $("<option>");
    x = i.toString();
    if ( i < 10) {
        x = "0" + x;
    }
    hour.append(x);
    $("#hour").append(hour);
}
for (var i = 0; i < 60; i = i+5) {
    mins = $("<option>");
    frequency = $("<option>");
    x = i.toString();
    if ( i < 10) {
        x = "0" + x;
    }
    if (x !== "00") {
        frequency.append(x);
        $("#z-min").append(frequency);
    }
    mins.append(x);
    $("#min").append(mins);
}

function start(){
    $("#train-name").val("");
    $("#destination").val("");
    $("#z-min").val("");
    $("#hour").val("");
    $("#min").val("");
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

$(".submit-btn").on("click", function(event) {
    event.preventDefault();

    // users input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var frequency = $("#z-min").val();
    var selectedHour = $("#hour").val();
    var selectedMins = $("#min").val();
    var startTime = selectedHour + selectedMins;
    var starts = moment(startTime, "hmm").format("HH:mm");
    // upload data submisson to firebase
    var submisson = {
        name: trainName,
        destination: destination,
        startTime: starts,
        frequency :frequency
    }
    data.ref().push(submisson);


    // reset user input so it's easier to submit new items
    start();
})

// displaying data onto html
data.ref().on("child_added", function(savedData){
    var tname = savedData.val().name;
    var destination = savedData.val().destination;
    var startTime = savedData.val().startTime;
    var frequency = savedData.val().frequency;

    // using moment.js to calculate next arrival and minutes left till arrival
    var startMinutes = moment.duration(startTime).asMinutes()
    var difference = moment().diff(moment(startMinutes), "minutes");
    var modTime = difference % parseInt(frequency);
    var minutesAway = frequency - modTime;
    var nextArrival = moment().add(minutesAway, "m").format("HH:mm");

    // pasting onto html
    var row = $("<tr>").append(
        $("<td>").text(tname),
        $("<td>").text(startTime),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway),
    );
    $("#input-table").append(row);
});
    