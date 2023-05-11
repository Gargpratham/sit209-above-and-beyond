function bulbOn1() {
    let bulbobj = document.querySelector(".bulboff1");
    bulbobj.setAttribute("src", "lighton.png");
}
function bulbOff1() {
    let bulbobj = document.querySelector(".bulboff1");
    bulbobj.setAttribute("src", "lightoff.png");
}

function bulbOn2() {
    let bulbobj = document.querySelector(".bulboff2");
    bulbobj.setAttribute("src", "lighton.png");
}
function bulbOff2() {
    let bulbobj = document.querySelector(".bulboff2");
    bulbobj.setAttribute("src", "lightoff.png");
}

function bulbOn3() {
    let bulbobj = document.querySelector(".bulboff3");
    bulbobj.setAttribute("src", "lighton.png");
}
function bulbOff3() {
    let bulbobj = document.querySelector(".bulboff3");
    bulbobj.setAttribute("src", "lightoff.png");
}

function changeColor(lightId, color) {
    var room = $("#" + lightId);
    room.removeClass().addClass('room ' + color);
}
