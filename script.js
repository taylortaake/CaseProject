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

//Defining array for image spawning
var parts = new Array("a CPU!", "a GPU!", "RAM!",
"an SSD!", "a motherboard!", "a powersupply!");

//Function for spawning images from pre-defined array
function printPictures(){
  document.write("<h4>Click any picture to find out what it is.</h4>");
  for (let i = 0; i < parts.length; i++) {
    document.write("<img src='part" + i + ".jpg' onclick='alert(" + i + ")' id='" + i + "'/>");
    document.getElementById(i).addEventListener("click", function(){
      alert("This is "+ parts[i]);
    }, false);
  }
}