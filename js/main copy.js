

let translations = {
    english:{
        wmainTitle: "Home - SoftWerk Ltd.",
        wtopBarContent1: "Contact us!",
        wtopBarContent2: "Call us!",
        wtopBarContent3: "4 Gesztenyefa út, 9027 Győr, Hungary",
        wtopBarContent4: "Monday-Friday: 8:00 AM - 4:00 PM",
        wheaderLink1: "Home",
        wheaderLink2: "About",
        wheaderLink3: "Skills",
        wheaderLink4: "Partners",
        wheaderLink5: "Reference",
        wheaderLink6: "Contact",


        wfooterLink2: "Address:",
        wfooterLink3: "4 Gesztenyefa út, 9027 Győr, Hungary",
        wfooterLink8: "About",
        
    },
    hungarian:{
        wmainTitle: "Főoldal - SoftWerk Kft.",
        wtopBarContent1: "Lépjen velünk kapcsolatba!",
        wtopBarContent2: "Hívjon minket!",     
        wtopBarContent3: "9027 Győr, Magyarország Gesztenyefa út 4.",
        wtopBarContent4: "Hétfő-Péntek: 8:00 - 16:00",
        wheaderLink1: "Kezdőlap",
        wheaderLink2: "Rólunk",
        wheaderLink3: "Készségek",
        wheaderLink4: "Partnerek",
        wheaderLink5: "Referenciák",
        wheaderLink6: "Kapcsolat",

        wfooterLink2: "Cím:",
        wfooterLink3: "9027 Győr, Magyarország Gesztenyefa út 4.",
        wfooterLink8: "Rólunk",
    }
}

const languageselecter = document.querySelector("select");

let mainTitle = document.getElementById("mainTitle");
let topBarContent1 = document.getElementById("topBarContent1");
let topBarContent2 = document.getElementById("topBarContent2");
let topBarContent3 = document.getElementById("topBarContent3");
let topBarContent4 = document.getElementById("topBarContent4");
let headerLink1 = document.getElementById("headerLink1");
let headerLink2 = document.getElementById("headerLink2");
let headerLink3 = document.getElementById("headerLink3");
let headerLink4 = document.getElementById("headerLink4");
let headerLink5 = document.getElementById("headerLink5");
let headerLink6 = document.getElementById("headerLink6");

let footerLink2 = document.getElementById("footerLink2");
let footerLink3 = document.getElementById("footerLink3");
let footerLink8 = document.getElementById("footerLink8");

languageselecter.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    if (language == "english"){
        mainTitle.innerText = translations.english.wmainTitle;
        topBarContent1.innerText = translations.english.wtopBarContent1;
        topBarContent2.innerText = translations.english.wtopBarContent2;
        topBarContent3.innerText = translations.english.wtopBarContent3;
        topBarContent4.innerText = translations.english.wtopBarContent4;
        headerLink1.innerText = translations.english.wheaderLink1;
        headerLink2.innerText = translations.english.wheaderLink2;
        headerLink3.innerText = translations.english.wheaderLink3;
        headerLink4.innerText = translations.english.wheaderLink4;
        headerLink5.innerText = translations.english.wheaderLink5;
        headerLink6.innerText = translations.english.wheaderLink6;

        footerLink2.innerText = translations.english.wfooterLink2;
        footerLink3.innerText = translations.english.wfooterLink3;
        footerLink8.innerText = translations.english.wfooterLink8;
    }
    else if (language == "hungarian"){
        mainTitle.innerText = translations.hungarian.wmainTitle;
        topBarContent1.innerText = translations.hungarian.wtopBarContent1;
        topBarContent2.innerText = translations.hungarian.wtopBarContent2;
        topBarContent3.innerText = translations.hungarian.wtopBarContent3;
        topBarContent4.innerText = translations.hungarian.wtopBarContent4;
        headerLink1.innerText = translations.hungarian.wheaderLink1;
        headerLink2.innerText = translations.hungarian.wheaderLink2;
        headerLink3.innerText = translations.hungarian.wheaderLink3;
        headerLink4.innerText = translations.hungarian.wheaderLink4;
        headerLink5.innerText = translations.hungarian.wheaderLink5;
        headerLink6.innerText = translations.hungarian.wheaderLink6;

        footerLink2.innerText = translations.hungarian.wfooterLink2;
        footerLink3.innerText = translations.hungarian.wfooterLink3;
        footerLink8.innerText = translations.hungarian.wfooterLink8;
    }
}

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

