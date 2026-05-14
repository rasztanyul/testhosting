let translations = {
    english:{
        wmainTitle: "Contact - SoftWerk Ltd.",
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

        wtextBox1:"Contact us, and together we'll find the best solution for you! Whether you have a question, request a quote, or want to start a project - our team is ready and happy to assist you. Reliable communication, personal support, and long-term collaboration are important to us, which is why we give every inquiry our full attention.",
        wtextBox2:"Fill out the form below, and we will get in touch with you as soon as possible.",

        wh2Title1:"Write to us!",

        wh1Title1:"Contact",

        wlabelText1:"Name",
        wlabelText2:"Email address",
        wlabelText3:"Phone number",
        wlabelText4:"Message",

        wnameid:"Name",
        wemail:"Email address",
        wphone:"Phone number",
        wmessage:"Message",

        wbooterLink2: "Address:",
        wbooterLink3: "4 Gesztenyefa út, 9027 Győr, Hungary",    
        wbooterLink6: "Telephone:",

        wbuttonText1:"Send",

        wfooterLink2: "Address:",
        wfooterLink3: "4 Gesztenyefa út, 9027 Győr, Hungary",
        wfooterLink6: "Telephone:",
        wfooterLink8: "About",
        wfooterLink9: "Skills",
        wfooterLink10: "Partners",
        wfooterLink11: "References",
        wfooterLink12: "Contact",
        wfooterLink13: "Home",
        wfooterCopyRight: "All rights reserved | 2026"
        
    },
    hungarian:{
        wmainTitle: "Kapcsolat - SoftWerk Kft.",
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
    },
    german:{
        wmainTitle: "Kontakt - SoftWerk Kft.", 
        wtopBarContent1: "Kontaktieren Sie uns!", 
        wtopBarContent2: "Rufen Sie uns an!", 
        wtopBarContent3: "4 Gesztenyefa út, 9027 Győr, Ungarn", 
        wtopBarContent4: "Montag-Freitag: 8:00-16:00 Uhr", 
        wheaderLink1: "Home", 
        wheaderLink2: "Über", 
        wheaderLink3: "Fähigkeiten", 
        wheaderLink4: "Partner", 
        wheaderLink5: "Referenz", 
        wheaderLink6: "Kontakt", 

        wtextBox1:"Kontaktieren Sie uns, und wir finden gemeinsam die beste Lösung für Sie! Ob Frage, Angebotsanfrage oder Projektstart - unser Team steht Ihnen schnell und gerne zur Verfügung. Zuverlässige Kommunikation, persönliche Betreuung und langfristige Zusammenarbeit sind uns wichtig, deshalb widmen wir jeder Anfrage besondere Aufmerksamkeit.",
        wtextBox2:"Füllen Sie das untenstehende Formular aus, und wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.",

        wh2Title1:"Schreiben Sie uns!",

        wh1Title1:"Kontakt",

        wlabelText1:"Name",
        wlabelText2:"E-Mail-Adresse",
        wlabelText3:"Telefonnummer",
        wlabelText4:"Nachricht",

        wnameid:"Name",
        wemail:"E-Mail-Adresse",
        wphone:"Telefonnummer",
        wmessage:"Nachricht",

        wbooterLink2:"Adresse:",
        wbooterLink3:"4 Gesztenyefa út, 9027 Győr, Ungarn",
        wbooterLink6: "Telefon:",

        wbuttonText1:"Senden",

        wfooterLink2: "Adresse:", 
        wfooterLink3: "4 Gesztenyefa út, 9027 Győr, Ungarn", 
        wfooterLink6: "Telefon:",
        wfooterLink8: "Über",
        wfooterLink9: "Fähigkeiten", 
        wfooterLink10: "Partner", 
        wfooterLink11: "Referenz", 
        wfooterLink12: "Kontakt", 
        wfooterLink13: "Home",
        wfooterCopyRight: "Alle Rechte vorbehalten | 2026"

    }
}

const languageselecter = document.getElementById("languageSwitcher");

// Nyelv mentése választáskor
languageselecter.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;

    // Mentés böngészőbe
    localStorage.setItem("language", selectedLanguage);

    // Nyelv alkalmazása
    setLanguage(selectedLanguage);
    if(selectedLanguage == "hungarian"){
       location.reload(); 
    }
});

// Oldal betöltésekor
window.addEventListener("DOMContentLoaded", () => {

    // Elmentett nyelv vagy alapértelmezett
    const savedLanguage = localStorage.getItem("language") || "hungarian";

    // Dropdown értékének beállítása
    languageselecter.value = savedLanguage;

    // Nyelv alkalmazása
    setLanguage(savedLanguage);
});

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

let wtextBox1 = document.getElementById("wtextBox1");
let wtextBox2 = document.getElementById("wtextBox2");

let h2Title1 = document.getElementById("h2Title1");

let h1Title1 = document.getElementById("h1Title1");

let labelText1 = document.getElementById("labelText1");
let labelText2 = document.getElementById("labelText2");
let labelText3 = document.getElementById("labelText3");
let labelText4 = document.getElementById("labelText4");

let nameid = document.getElementById("nameid");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

let booterLink2 = document.getElementById("booterLink2");
let booterLink3 = document.getElementById("booterLink3");
let booterLink6 = document.getElementById("booterLink6");

let buttonText1 = document.getElementById("buttonText1");

let footerLink2 = document.getElementById("footerLink2");
let footerLink3 = document.getElementById("footerLink3");
let footerLink6 = document.getElementById("footerLink6");
let footerLink8 = document.getElementById("footerLink8");
let footerLink9 = document.getElementById("footerLink9");
let footerLink10 = document.getElementById("footerLink10");
let footerLink11 = document.getElementById("footerLink11");
let footerLink12 = document.getElementById("footerLink12");
let footerLink13 = document.getElementById("footerLink13");

let footerCopyRight = document.getElementById("footerCopyRight");

function setLanguage(lang) {
    if (lang == "english"){
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

        textBox1.innerText = translations.english.wtextBox1;
        textBox2.innerText = translations.english.wtextBox2;

        h2Title1.innerText = translations.english.wh2Title1;

        h1Title1.innerText = translations.english.wh1Title1;
        
        labelText1.innerText = translations.english.wlabelText1;
        labelText2.innerText = translations.english.wlabelText2;
        labelText3.innerText = translations.english.wlabelText3;
        labelText4.innerText = translations.english.wlabelText4;

        document.getElementById("nameid").placeholder=translations.english.wnameid;
        document.getElementById("email").placeholder=translations.english.wemail;
        document.getElementById("phone").placeholder=translations.english.wphone;
        document.getElementById("message").placeholder=translations.english.wmessage;

        
        booterLink2.innerText = translations.english.wbooterLink2;
        booterLink3.innerText = translations.english.wbooterLink3;
        booterLink6.innerText = translations.english.wbooterLink6;

        buttonText1.innerText = translations.english.wbuttonText1;

        footerLink2.innerText = translations.english.wfooterLink2;
        footerLink3.innerText = translations.english.wfooterLink3;
        footerLink6.innerText = translations.english.wfooterLink6;
        footerLink8.innerText = translations.english.wfooterLink8;
        footerLink9.innerText = translations.english.wfooterLink9;
        footerLink10.innerText = translations.english.wfooterLink10;
        footerLink11.innerText = translations.english.wfooterLink11;
        footerLink12.innerText = translations.english.wfooterLink12;
        footerLink13.innerText = translations.english.wfooterLink13;
        footerCopyRight.innerText = translations.english.wfooterCopyRight;
    }
    else if (lang == "hungarian"){
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

    else if (lang == "german"){
        mainTitle.innerText = translations.german.wmainTitle;
        topBarContent1.innerText = translations.german.wtopBarContent1;
        topBarContent2.innerText = translations.german.wtopBarContent2;
        topBarContent3.innerText = translations.german.wtopBarContent3;
        topBarContent4.innerText = translations.german.wtopBarContent4;
        headerLink1.innerText = translations.german.wheaderLink1;
        headerLink2.innerText = translations.german.wheaderLink2;
        headerLink3.innerText = translations.german.wheaderLink3;
        headerLink4.innerText = translations.german.wheaderLink4;
        headerLink5.innerText = translations.german.wheaderLink5;
        headerLink6.innerText = translations.german.wheaderLink6;
        
        textBox1.innerText = translations.german.wtextBox1;
        textBox2.innerText = translations.german.wtextBox2;

        h2Title1.innerText = translations.german.wh2Title1;

        h1Title1.innerText = translations.german.wh1Title1;
        
        labelText1.innerText = translations.german.wlabelText1;
        labelText2.innerText = translations.german.wlabelText2;
        labelText3.innerText = translations.german.wlabelText3;
        labelText4.innerText = translations.german.wlabelText4;

        document.getElementById("nameid").placeholder=translations.german.wnameid;
        document.getElementById("email").placeholder=translations.german.wemail;
        document.getElementById("phone").placeholder=translations.german.wphone;
        document.getElementById("message").placeholder=translations.german.wmessage;

        
        booterLink2.innerText = translations.german.wbooterLink2;
        booterLink3.innerText = translations.german.wbooterLink3;
        booterLink6.innerText = translations.german.wbooterLink6;

        buttonText1.innerText = translations.german.wbuttonText1;

        footerLink2.innerText = translations.german.wfooterLink2;
        footerLink3.innerText = translations.german.wfooterLink3;
        footerLink6.innerText = translations.german.wfooterLink6;
        footerLink8.innerText = translations.german.wfooterLink8;
        footerLink9.innerText = translations.german.wfooterLink9;
        footerLink10.innerText = translations.german.wfooterLink10;
        footerLink11.innerText = translations.german.wfooterLink11;
        footerLink12.innerText = translations.german.wfooterLink12;
        footerLink13.innerText = translations.german.wfooterLink13;
        footerCopyRight.innerText = translations.german.wfooterCopyRight;
        
    }
}

