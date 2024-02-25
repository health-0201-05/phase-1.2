function openPopup() {
    var x = document.getElementById("popupContainer");
    if (x.style.display != "block") {
        x.style.display = "block";
    }
}

function closePopup() {
    var x = document.getElementById("popupContainer");
    if (x.style.display != "none") {
        x.style.display = "none";
    }
}