var alls = [
    "C", "D", "E", "F", "G", "A", "B", "C#", "D#", "F#", "G#", "A#", "Db", "Eb", "Gb", "Ab", "Bb"
];

note = document.getElementById("note");

document.addEventListener("keydown", KeydownEvent);
note.addEventListener("click", ClickEvent);

function KeydownEvent (e) {
    if (e.code == "Space") {
        RandomNote();
    }
}

function ClickEvent () {
    RandomNote();
}

var lastNums = [-1, -1]; // array to store last 2 numbers
function RandomNote () {

    var randomNum = Math.floor(Math.random() * alls.length); // change here

    // no repeat notes - check if current number = either of last 2 numbers
    while (randomNum == lastNums[0] || randomNum == lastNums[1]) {
        randomNum = Math.floor(Math.random() * alls.length); // change here
    }

    var randomNote = alls[randomNum]; // change here
    note.innerHTML = randomNote;

    // save last 2 numbers
    lastNums.unshift(randomNum);
    lastNums.splice(2, 1);

}