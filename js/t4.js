// Simply sets the visiblity of the popup container to
// none or block depending on whether it is currently visible
function openPopup() {
    var x = document.getElementById("popupContainer");
    if (x.style.display != "block") {
        x.style.display = "block";
    }
}

// .style.visibility did not want to work with the flex
// display so setting .style.display is the work around
function closePopup() {
    var x = document.getElementById("popupContainer");
    if (x.style.display != "none") {
        x.style.display = "none";
    }
}
