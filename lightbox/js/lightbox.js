let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let galleryImages = document.getElementsByClassName("galleryImage");

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

// let callaLilly = document.getElementById("callaLilly");
// callaLilly.onclick = openLightbox;
// let waterLilly = document.getElementById("waterLilly");
// waterLilly.onclick = openLightbox;
// let waterLilly2 = document.getElementById("waterLilly2");
// waterLilly2.onclick = openLightbox;
// let bwFlower2 = document.getElementById("bwFlower2");
// bwFlower2.onclick = openLightbox;
// let bwFlower4 = document.getElementById("bwFlower4");
// bwFlower4.onclick = openLightbox;
// let bwBird = document.getElementById("bwBird");
// bwBird.onclick = openLightbox;
// let blueBird = document.getElementById("blueBird");
// blueBird.onclick = openLightbox;
// let bwTruck = document.getElementById("bwTruck");
// bwTruck.onclick = openLightbox;



function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

let closers = document.getElementsByClassName("closer");

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}

// lightboxBackground.onclick = closeLightbox;
// lightboxCloser.onclick = closeLightbox;

// -----Netflix Homepage-----

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

english.addEventListener("click", function() {
    change(english, spanish);
}, false);

spanish.addEventListener("click", function() {
    change(spanish, english);
}, false);

function change(langOn, langOff) {
    if (!langOn.classList.contains("currentLang")) {
        langOn.classList.add("currentLang");
        langOff.classList.remove("currentLang");
    }
}

if(langOn.innerHTML == "English") {
    translate.classList.add("english");
    translate.classList.remove("spanish");
    translate.innerHTML = "Unlimited movies, TV shows, and more.";
} else 

if (langOn.innerHTML == "Español") {
    translate.classList.add("spanish");
    translate.classList.remove("english");
    translate.innerHTML = "Pelîculas y series ilimitadas y mucho màs";
}
