// ---------- LIGHTBOX ---------- //

let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let galleryImages = document.getElementsByClassName("galleryImage");
let profilePopUp = document.getElementsByClassName("profileLightbox");

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

for (let i = 0; i < profilePopUp.length; i++) {
    let profileLightbox = profilePopUp[i];
    profileLightbox.onclick = openLightbox;
}

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

// ------------ GALLERIES ----------------- //

var client1Gallery = document.getElementById("client1Gallery");
var client2Gallery = document.getElementById("client2Gallery");
var client3Gallery = document.getElementById("client3Gallery");
const client1 = document.getElementById("client1");
const client2 = document.getElementById("client2");
const client3 = document.getElementById("client3");

function hideAll() {
    client1Gallery.style.display = "none";
    client2Gallery.style.display = "none";
    client3Gallery.style.display = "none";
}
hideAll();

function showClient1() {
    hideAll();
    client1Gallery.style.display = "";
}
client1.onclick = showClient1;


function showClient2() {
    hideAll();
    client2Gallery.style.display = "";
}
client2.onclick = showClient2;

function showClient3() {
    hideAll();
    client3Gallery.style.display = "";
}
client3.onclick = showClient3;