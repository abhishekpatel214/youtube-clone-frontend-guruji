var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".side-baar");
var container = document.querySelector(".container");

menuicon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("lage-container");

}







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal){
    modal.style.display = "none";
  }
}



// notification handler


var notification = document.getElementById("notification");

var btn1 = document.getElementById("btnnotice");

var span1 = document.getElementsByClassName("close2")[0];

btn1.onclick = function() {
  notification.style.display = "block";
}

span1.onclick = function() {
  notification.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == notification){
    notification.style.display = "none";
  }
}

// upload button 

var upload = document.getElementById("upload1");

var btn2 = document.getElementById("btnupload");

var span2 = document.getElementsByClassName("close3")[0];

btn2.onclick = function() {
  upload.style.display = "block";
}
span2.onclick = function() {
  upload.style.display = "none";

}

window.onclick = function(event) {
  if(event.target == upload){
    upload.style.display = "none";
  }
}



