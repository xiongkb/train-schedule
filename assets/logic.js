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
// for (var i = 0; i < 60; i = i+5) {
//     mins = $("<option>");
//     mins.append(i);
//     $("#z-min").append(mins);
// }