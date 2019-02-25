var naturals = [
    "C", "D", "E", "F", "G", "A", "B"
];

var sharps = [
    "C#", "D#", "F#", "G#", "A#" 
];

var flats = [
    "Db", "Eb", "Gb", "Ab", "Bb"
];

var alls = [
    "C", "D", "E", "F", "G", "A", "B", "C#", "D#", "F#", "G#", "A#", "Db", "Eb", "Gb", "Ab", "Bb"
];

note = document.getElementById("note");

document.addEventListener("keydown", KeydownEvent);
document.addEventListener("click", ClickEvent);

function KeydownEvent (e) {
    console.log("key down");
    if (e.code == "Space") {
        RandomNote();
    }
}

function ClickEvent () {
    console.log("click");
    RandomNote();
}

var lastNum; // variable to store last number rolled
function RandomNote () {

    var randomNum = Math.floor(Math.random() * naturals.length);
    
    // no repeat notes - check if current number = last number
    while (randomNum === lastNum) {
        randomNum = Math.floor(Math.random() * naturals.length);
    }

    var randomNote = naturals[randomNum];
    note.innerHTML = randomNote;

    // save last number rolled
    lastNum = randomNum;

}