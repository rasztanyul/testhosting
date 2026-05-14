let translations = {
    english:{
        wmainTitle: "Skills - SoftWerk Ltd.",
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

        wh3Title3: "PLC Programming",
        wh3Title4: "Robots",
        wh3Title5: "Production Tracking",

        wh1Title1: "Skills",
        wh1Title2: "Our Principles",

        wliText8: "PLC and NC Controllers (Siemens, Bosch-Rexroth)",
        wliText9: "Industrial Cameras and 3D Scanners (Cognex, Keyence)",
        wliText10: "Press and Measuring Tools (Kistler, Promess, Lang, Marposs)",
        wliText11: "Industrial Robots and Cobots (Kuka, Fanuc, ABB)",
        wliText12: "PC-Based Controllers (Measuring Systems, Data Acquisition and Analysis)",
        wliText13: "Planning and Programming of Safety Controllers",
        wliText14: "Safety Documentation (Safety Matrices, System documentation, risk assessment)",
        wliText15: "Knowledge of SiOME “Siemens OPC UA Modeling Editor”",
        wliText16: "Experience with CAQ/MES integration via OPC UA (Audi Hungária Zrt.)",
        wliText17: "Experience with Autark (operation, PLC communication, parameterization)",
        wliText18: "Easy-to-use and diagnosable systems",
        wliText19: "Simple and transparent programming",
        wliText20: "Application of established programming conventions",
        wliText21: "Flexibility and cost efficiency",

        wbuttonText1: "Contact us!",

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
        wmainTitle: "Készségek - SoftWerk Kft.",
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
        wmainTitle: "Fähigkeiten - SoftWerk Kft.", 
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

        wh3Title3:"SPS-Programmierung",
        wh3Title4:"Roboter",
        wh3Title5:"Produktionsverfolgung",

        wh1Title1:"Fähigkeiten",
        wh1Title2:"Unsere Prinzipien",

        wliText8:"PLC- und NC-Steuerungen (Siemens, Bosch-Rexroth)",
        wliText9:"Industrie-Kameras und 3D-Scanner (Cognex, Keyence)",
        wliText10:"Press- und Messtools (Kistler, Promess, Lang, Marposs)",
        wliText11:"Industrieroboter und Cobots (Kuka, Fanuc, ABB)",
        wliText12:"PC-basierte Steuerungen (Messsysteme, Datenerfassung und -auswertung)",
        wliText13:"Planung und Programmierung von Sicherheitssteuerungen",
        wliText14:"Sicherheitsdokumentationen (Sicherheitsmatrizen, Sistema-Dokumentation, Risikobewertung)",
        wliText15:"Kenntnisse in SiOME “Siemens OPC UA Modeling Editor”",
        wliText16:"Erfahrung mit CAQ-/BDE-Anbindung durch OPC UA (Audi Hungária Zrt.)",
        wliText17:"Erfahrung mit Autark (Bedienung, PLC-Kommunikation, Parametrierung)",
        wliText18:"Gut handhabbare und diagnostizierbare Systeme",
        wliText19:"Einfache und transparente Programmierung",
        wliText20:"Anwendung festgelegter Programmierkonventionen",
        wliText21:"Flexibilität und Kosteneffizienz",

        wbuttonText1:"Kontaktieren Sie uns!",

        wfooterLink2: "Adresse:", 
        wfooterLink3: "4 Gesztenyefa út, 9027 Győr, Ungarn", 
        wfooterLink6:"Telefon:",
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


let h3Title3 = document.getElementById("h3Title3");
let h3Title4 = document.getElementById("h3Title4");
let h3Title5 = document.getElementById("h3Title5");

let h1Title1 = document.getElementById("h1Title1");
let h1Title2 = document.getElementById("h1Title2");

let liText8 = document.getElementById("liText8");
let liText9 = document.getElementById("liText9");
let liText10 = document.getElementById("liText10");
let liText11 = document.getElementById("liText11");
let liText12 = document.getElementById("liText12");
let liText13 = document.getElementById("liText13");
let liText14 = document.getElementById("liText14");
let liText15 = document.getElementById("liText15");
let liText16 = document.getElementById("liText16");
let liText17 = document.getElementById("liText17");
let liText18 = document.getElementById("liText18");
let liText19 = document.getElementById("liText19");
let liText20 = document.getElementById("liText20");
let liText21 = document.getElementById("liText21");


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

        h1Title1.innerText = translations.english.wh1Title1;
        h1Title2.innerText = translations.english.wh1Title2;

        h3Title3.innerText = translations.english.wh3Title3;
        h3Title4.innerText = translations.english.wh3Title4;
        h3Title5.innerText = translations.english.wh3Title5;

        liText8.innerText = translations.english.wliText8;
        liText9.innerText = translations.english.wliText9;
        liText10.innerText = translations.english.wliText10;
        liText11.innerText = translations.english.wliText11;
        liText12.innerText = translations.english.wliText12;
        liText13.innerText = translations.english.wliText13;
        liText14.innerText = translations.english.wliText14;
        liText15.innerText = translations.english.wliText15;
        liText16.innerText = translations.english.wliText16;
        liText17.innerText = translations.english.wliText17;
        liText18.innerText = translations.english.wliText18;
        liText19.innerText = translations.english.wliText19;
        liText20.innerText = translations.english.wliText20;
        liText21.innerText = translations.english.wliText21;

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
        
        h1Title1.innerText = translations.german.wh1Title1;
        h1Title2.innerText = translations.german.wh1Title2;

        h3Title3.innerText = translations.german.wh3Title3;
        h3Title4.innerText = translations.german.wh3Title4;
        h3Title5.innerText = translations.german.wh3Title5;

        liText8.innerText = translations.german.wliText8;
        liText9.innerText = translations.german.wliText9;
        liText10.innerText = translations.german.wliText10;
        liText11.innerText = translations.german.wliText11;
        liText12.innerText = translations.german.wliText12;
        liText13.innerText = translations.german.wliText13;
        liText14.innerText = translations.german.wliText14;
        liText15.innerText = translations.german.wliText15;
        liText16.innerText = translations.german.wliText16;
        liText17.innerText = translations.german.wliText17;
        liText18.innerText = translations.german.wliText18;
        liText19.innerText = translations.german.wliText19;
        liText20.innerText = translations.german.wliText20;
        liText21.innerText = translations.german.wliText21;

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

