// putting the div in a variable
let area = document.getElementById("responsive-menus");
let display = 0;

// function to show the div
function hideShow() {
    if (display == 1) {
        area.style.display = "block";
        display = 0;
    } else {
        area.style.display = "none";
        display = 1;
    }
}