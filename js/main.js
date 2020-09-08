function setLanguage(selectedLanguage) {
    var currentLang, innerHtmlElement;
    currentLang = document.querySelector("#navbarLanguageDropdown").text.trim();
    if (currentLang != selectedLanguage) {
        innerHtmlElement = document.querySelector("#navbarLanguageDropdown").innerHTML;
        document.querySelector("#navbarLanguageDropdown").innerHTML = innerHtmlElement.replace(currentLang, selectedLanguage);
        lang = selectedLanguage;
    }   
    return;
}

function translateNavbar() {
    translate("#navbarDropdownProducts", "Alkotásaim", "Products"); 
    translate("#paintings", "Festmények", "Paintings"); 
    translate("#ceramics", "Kerámiák", "Ceramics"); 
    translate("#treasuries", "Ékszerek", "Treasuries"); 
    translate("#dresses", "Ruhák", "Dresses"); 
    translate("#aboutme", "Rólam", "About me");
    translate("#contact", "Kontakt", "Contact"); 
    return;
}

function translate(elementId, hunText, itaText){
    var innerHtmlElement, currentText;
    innerHtmlElement = document.querySelector(elementId).innerHTML;
    currentText =  document.querySelector(elementId).text.trim();
    if (lang == "HUN") {
        document.querySelector(elementId).innerHTML = innerHtmlElement.replace(currentText, hunText)
    } else {
        document.querySelector(elementId).innerHTML = innerHtmlElement.replace(currentText, itaText)
    }
    return;
}