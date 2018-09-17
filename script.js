//Toggle Dropdown between hiding and showing
function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

//Close Dropdown when user clicks away
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
