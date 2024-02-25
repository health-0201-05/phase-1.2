document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded!');
});

// opens the tab that user clicks on
// based on w3schools tutorial https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(evt, tabName) {
    // declare variables
    var i, tabcontent, tablinks;
  
    // hide all tab pages
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // make all tabs inactive
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // show tab that user clicked on, make that tab active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
