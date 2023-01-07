window.onscroll = function () { myFunction() };

var i;
var navbar = document.getElementById("navbar");
var homeLogo = document.getElementById("homeLogo");
var navContent = document.getElementById("navContent");
var navLink = document.getElementsByClassName("nav-link");
var sticky = navbar.offsetTop;

function myFunction() {
      if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
            homeLogo.classList.add("home-logo-scroll");
            navContent.classList.add("nav-content-scroll");
            for (i = 0; i < navLink.length; i++) {
                  navLink[i].classList.add("nav-content-scroll");
            }
      } else {
            navbar.classList.remove("sticky");
            homeLogo.classList.remove("home-logo-scroll");
            navContent.classList.remove("nav-content-scroll");
            for (i = 0; i < navLink.length; i++) {
                  navLink[i].classList.remove("nav-content-scroll");
            }
      }
}

function displayblock(itemName) {
      document.getElementById(itemName + '-' + 'slash').style.opacity = "1";
}
function normalblock(itemName) {
      document.getElementById(itemName + '-' + 'slash').style.opacity = "0";
}