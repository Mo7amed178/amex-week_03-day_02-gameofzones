console.log('starter1.js linked');

//code goes here
function makeZoneGreen(event) {
    console.log("mouse enterd!");
    $(event.target).css('background-color', 'green');
}
function makeZoneGreenForEver(event) {
    console.log("mouse clicked!");
    $(event.target).css('background-color', 'green');
    $(event.target).off("mouseleave")
}
function makeZoneWhite(event) {
    console.log("mouse left!");
    $(event.target).css('background-color', 'white');
}

$('.zone').on("mouseenter", makeZoneGreen);
$('.zone').on("mouseleave", makeZoneWhite);
$('.zone').on("click", makeZoneGreenForEver);