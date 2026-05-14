let translations = {
    english:{
        wmainTitle: "About - SoftWerk Ltd.",
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

        wtextBox1: "SoftWerk Kft. was founded in 2022 with the goal of supporting partners in increasing productivity by developing flexible, user-friendly, and transparent software while giving maximum consideration to customer needs. Although our company is young, most of our experts have over 30 years of experience in automation, guaranteeing a high level of expertise and reliable solutions.",

        wtextBox2: "Smaller companies and individual entrepreneurs from the region have also joined SoftWerk Kft., creating an experienced and well-coordinated team capable of handling even large projects. Furthermore, we provide comprehensive project management and precise scheduling (EPLAN design, software design, software commissioning). Our technical project manager speaks excellent German and has strong programming skills. All employees speak either German or English.",

        wtextBox3: "In our work, we collaborate with external contractors and partner companies to respond flexibly to customer requests and avoid labor costs during unproductive periods.",

        wtextBox4: "Our external partners are also former colleagues with whom we have worked closely for decades. We do not employ temporary workers! For larger projects, we collaborate as a consortium of companies, where, by contract, each partner works exclusively on the given project until its completion.",

        wh1Title1: "About",
        wh1Title2: "Innovative automation solutions combined with experience",
        wh1Title3: "Experienced team for complex projects",
        wh1Title4: "Stable partner network, flexible operations",

        wbuttonText1: "Contact us!",
        wbuttonText2: "Contact us!",
        wbuttonText3: "Contact us!",

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
        wmainTitle: "Rólunk - SoftWerk Kft.",
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
        wmainTitle: "Über - SoftWerk Kft.", 
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

        wtextBox1:"SoftWerk Kft. wurde 2022 mit dem Ziel gegründet, Partner durch die Entwicklung flexibler, einfach zu bedienender und transparenter Software bei der Steigerung der Produktivität unter maximaler Berücksichtigung der Kundenbedürfnisse zu unterstützen. Obwohl unser Unternehmen jung ist, verfügen die meisten unserer Experten über 30 Jahre Erfahrung im Bereich der Automatisierung, wodurch wir ein hohes Maß an Fachwissen und zuverlässige Lösungen garantieren.",
        wtextBox2:"Zu SoftWerk Kft. haben sich auch kleinere Unternehmen und Einzelunternehmer aus der Region angeschlossen, wodurch ein erfahrenes und eingespieltes Team entstanden ist, das auch größere Projekte abwickeln kann. Darüber hinaus übernehmen wir die umfassende Leitung von Projekten und die präzise Planung von  Terminen (Eplan-Konstruktion, SWKonstruktion, SW-Inbetriebnahme) . Unser technische Projektleiter spricht hervorragend Deutsch und kennt sich gut mit Programmierung aus. Alle Mitarbeiter sprechen entweder Deutsch oder Englisch.",
        wtextBox3:"In unserer Tätigkeit arbeiten wir mit externen Auftragnehmern und Partnerunternehmen zusammen, um flexibel auf Kundenwünsche eingehen und Lohnkosten in unproduktiven Zeiten vermeiden zu können.",
        wtextBox4:"Auch externe Partner sind ehemalige Kollegen, mit denen wir eng über Jahrzenten zusammen gearbeitet haben. Wir beschäftigen keine Leiharbeiter! Bei größeren Projekten arbeiten wir als Konsortium von Firmen zusammen, wo vertragsmäßig bis Abschluß jeder ausschließlich am gegebenen Projekt arbeitet.",
        
        wh1Title1:"Über",
        wh1Title2:"Innovative Automatisierungslösungen vereint mit Erfahrung",
        wh1Title3:"Erfahrenes Team für komplexe Projekte",
        wh1Title4:"Stabiles Partnernetzwerk, flexibler Betrieb",

        wbuttonText1:"Kontaktieren Sie uns!",
        wbuttonText2:"Kontaktieren Sie uns!",
        wbuttonText3:"Kontaktieren Sie uns!",

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
let wtextBox3 = document.getElementById("wtextBox3");
let wtextBox4 = document.getElementById("wtextBox4");

let h1Title1 = document.getElementById("h1Title1");
let h1Title2 = document.getElementById("h1Title2");
let h1Title3 = document.getElementById("h1Title3");
let h1Title4 = document.getElementById("h1Title4");

let buttonText1 = document.getElementById("buttonText1");
let buttonText2 = document.getElementById("buttonText2");
let buttonText3 = document.getElementById("buttonText3");

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
        textBox3.innerText = translations.english.wtextBox3;
        textBox4.innerText = translations.english.wtextBox4;

        h1Title1.innerText = translations.english.wh1Title1;
        h1Title2.innerText = translations.english.wh1Title2;
        h1Title3.innerText = translations.english.wh1Title3;
        h1Title4.innerText = translations.english.wh1Title4;

        buttonText1.innerText = translations.english.wbuttonText1;
        buttonText2.innerText = translations.english.wbuttonText2;
        buttonText3.innerText = translations.english.wbuttonText3;

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
        textBox3.innerText = translations.german.wtextBox3;
        textBox4.innerText = translations.german.wtextBox4;

        h1Title1.innerText = translations.german.wh1Title1;
        h1Title2.innerText = translations.german.wh1Title2;
        h1Title3.innerText = translations.german.wh1Title3;
        h1Title4.innerText = translations.german.wh1Title4;

        buttonText1.innerText = translations.german.wbuttonText1;
        buttonText2.innerText = translations.german.wbuttonText2;
        buttonText3.innerText = translations.german.wbuttonText3;

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

