let translations = {
    english:{
        wmainTitle: "Partners - SoftWerk Ltd.",
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

        wtextBox1: "In our work, we collaborate with external contractors and partner companies to respond flexibly to customer requests and avoid labor costs during unproductive periods. Our external partners are also former colleagues with whom we have worked closely for decades. We do not employ temporary workers! For larger projects, we collaborate as a consortium of companies, where, by contract, each partner works exclusively on the given project until its completion.",

        wh3Title2: "Safety Documentation, Consulting",
        wh3Title3: "Programming, Project Management",
        wh3Title4: "Program Development",
        wh3Title5: "Hardware Planning",
        wh3Title6: "Electrical Assembly",
        wh3Title7: "Programming",

        wh2Title1: "Partner Companies and External Contractors",

        wh1Title1:"Partners",
        wh1Title2:"QuaderTech GbR",
        wh1Title3:"STH-Soft Kft.",
        wh1Title4:"InDiMa Kft.",
        wh1Title5:"RaabCad Kft.",
        wh1Title6:"AUTOBOT Kft.",
        wh1Title7:"HM-Tech Kft.",

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
        wmainTitle: "Partnerek - SoftWerk Kft.",
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
        wmainTitle: "Partner - SoftWerk Kft.", 
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

        wtextBox1:"In unserer Tätigkeit arbeiten wir mit externen Auftragnehmern und Partnerunternehmen zusammen, um flexibel auf Kundenwünsche eingehen und Lohnkosten in unproduktiven Zeiten vermeiden zu können. Auch externe Partner sind ehemalige Kollegen, mit denen wir eng über Jahrzenten zusammen gearbeitet haben. Wir beschäftigen keine Leiharbeiter! Bei größeren Projekten arbeiten wir als Konsortium von Firmen zusammen, wo vertragsmäßig bis Abschluß jeder ausschließlich am gegebenen Projekt arbeitet.",

        wh3Title2:"Safety Dokumentation, Beratung",
        wh3Title3:"Programmierung, Projektleitung",
        wh3Title4:"Programmentwicklung",
        wh3Title5:"Hardware Planung",
        wh3Title6:"E-Montage",
        wh3Title7:"Programmierung",

        wh2Title1:"Partnerunternehmen und externe Auftragnehmer",

        wh1Title1:"Partner",
        wh1Title2:"QuaderTech GbR",
        wh1Title3:"STH-Soft Kft.",
        wh1Title4:"InDiMa Kft.",
        wh1Title5:"RaabCad Kft.",
        wh1Title6:"AUTOBOT Kft.",
        wh1Title7:"HM-Tech Kft.",

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

let h3Title2 = document.getElementById("h3Title2");
let h3Title3 = document.getElementById("h3Title3");
let h3Title4 = document.getElementById("h3Title4");
let h3Title5 = document.getElementById("h3Title5");
let h3Title6 = document.getElementById("h3Title6");
let h3Title7 = document.getElementById("h3Title7");

let h2Title1 = document.getElementById("h2Title1");

let h1Title1 = document.getElementById("h1Title1");
let h1Title2 = document.getElementById("h1Title2");
let h1Title3 = document.getElementById("h1Title3");
let h1Title4 = document.getElementById("h1Title4");
let h1Title5 = document.getElementById("h1Title5");
let h1Title6 = document.getElementById("h1Title6");
let h1Title7 = document.getElementById("h1Title7");

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

        h1Title1.innerText = translations.english.wh1Title1;
        h1Title2.innerText = translations.english.wh1Title2;
        h1Title3.innerText = translations.english.wh1Title3;
        h1Title4.innerText = translations.english.wh1Title4;
        h1Title5.innerText = translations.english.wh1Title5;
        h1Title6.innerText = translations.english.wh1Title6;
        h1Title7.innerText = translations.english.wh1Title7;

        h2Title1.innerText = translations.english.wh2Title1;

        h3Title2.innerText = translations.english.wh3Title2;
        h3Title3.innerText = translations.english.wh3Title3;
        h3Title4.innerText = translations.english.wh3Title4;
        h3Title5.innerText = translations.english.wh3Title5;
        h3Title6.innerText = translations.english.wh3Title6;
        h3Title7.innerText = translations.english.wh3Title7;

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

        h1Title1.innerText = translations.german.wh1Title1;
        h1Title2.innerText = translations.german.wh1Title2;
        h1Title3.innerText = translations.german.wh1Title3;
        h1Title4.innerText = translations.german.wh1Title4;
        h1Title5.innerText = translations.german.wh1Title5;
        h1Title6.innerText = translations.german.wh1Title6;
        h1Title7.innerText = translations.german.wh1Title7;

        h2Title1.innerText = translations.german.wh2Title1;

        h3Title2.innerText = translations.german.wh3Title2;
        h3Title3.innerText = translations.german.wh3Title3;
        h3Title4.innerText = translations.german.wh3Title4;
        h3Title5.innerText = translations.german.wh3Title5;
        h3Title6.innerText = translations.german.wh3Title6;
        h3Title7.innerText = translations.german.wh3Title7;

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

