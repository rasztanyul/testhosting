
//TOP BUTTON

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//NAV-LINKS

var navLinks = document.getElementById("navLinks");
var faBars = document.getElementById("fa-bars");

function showMenu() {
    navLinks.style.width= "200px";
    faBars.style.opacity = "0.0";
}
function hideMenu() {
    navLinks.style.width= "0";
    faBars.style.opacity = "1.0";
}

