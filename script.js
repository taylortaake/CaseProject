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

// Get the modal
var modal = document.getElementById('theModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('modal');
var modalImg = document.getElementById("imgOne");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
