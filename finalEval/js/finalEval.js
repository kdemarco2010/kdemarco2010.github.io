var scroll = window.scrollY;
var navbar = document.getElementById("navbar");
let optionsLinkSection = document.getElementById("optionsLink");

function addClassOnScroll() {
    navbar.classList.add("displayNav");
}

function removeClassOnScroll() {
    navbar.classList.remove("displayNav");
}

window.addEventListener("scroll", function() {
    scroll = window.scrollY;

    if(scroll > optionsLinkSection.offsetTop) {
        addClassOnScroll();
    } else {
        removeClassOnScroll();
    }
})

// -----MultiTab-----

const trending = document.getElementById("trending");
const newOnDisney = document.getElementById("newOnDisney");
const comingSoon = document.getElementById("comingSoon");
const trendingLink = document.getElementById("trendingLink");
const newOnDisneyLink = 
    document.getElementById("newOnDisneyLink");
const comingSoonLink = document.getElementById("comingSoonLink");


function trendingTabSelected() {
    newOnDisney.style.display = "none";
    comingSoon.style.display = "none";
}

function newTabSelected() {
    trending.style.display = "none";
    comingSoon.style.display = "none";
}

function comingTabSelected() {
    trending.style.display = "none";
    newOnDisney.style.display = "none";
}

trendingTabSelected();

function showTrendingTab() {
    trendingTabSelected();
    trending.style.display = "";
}
trendingLink.onclick = showTrendingTab;

function showNewTab() {
    newTabSelected();
    newOnDisney.style.display = "";
}
newOnDisneyLink.onclick = showNewTab;

function showComingTab() {
    comingTabSelected();
    comingSoon.style.display = "";
}
comingSoonLink.onclick = showComingTab;

// -----language button-----

const languageMenu = document.querySelector(".languageMenu"),
    languageBtn = languageMenu.querySelector(".languageBtn"),
    language = languageMenu.querySelectorAll(".language"),
    btnText = languageMenu.querySelector(".btnText"),
    options = languageMenu.querySelector(".options"),
    optionText = document.getElementById("optionText"),
    chevronArrow = languageMenu.querySelector(".chevronArrow"),
    body = document.getElementById("body"),
    english = document.getElementById("english"),
    spanish = document.getElementById("español"),
    translate = document.getElementById("translate");
    


function toggleDropdown() {
    options.classList.toggle("reveal");
    chevronArrow.classList.toggle("arrowFlip");
}

function closeDropdown() {
    options.classList.remove("reveal");
    chevronArrow.classList.remove("arrowFlip");
}

languageBtn.addEventListener("click", function(e) {
    toggleDropdown();

    e.stopPropagation();
});


language.forEach(function (option) { {
    option.addEventListener("click", function () { {
    let selectedOption = option.querySelector(".optionText").innerText;
    btnText.innerText = selectedOption;

    }});
}});

options.addEventListener("click", function(e){
    if (options.classList.contains("reveal")){
        toggleDropdown();
    }
});

body.addEventListener("click", function(e){
    if (options.classList.contains("reveal")){
        toggleDropdown();
    }
});
   