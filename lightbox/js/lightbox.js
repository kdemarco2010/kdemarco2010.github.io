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

