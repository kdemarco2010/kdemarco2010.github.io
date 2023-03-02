let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let coffeeImage = document.getElementById("coffeeImage");
coffeeImage.onclick = openLightbox;
let coffeeImage2 = document.getElementById("coffeeImage2");
coffeeImage2.onclick = openLightbox;
let coffeeImage3 = document.getElementById("coffeeImage3");
coffeeImage3.onclick = openLightbox;
let coffeeImage4 = document.getElementById("coffeeImage4");
coffeeImage4.onclick = openLightbox;


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

