let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.classList.add("show");
  lightbox.style.display = "flex";
  updateImage();
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightbox.classList.remove("show");
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateImage();
}

function updateImage() {
  lightboxImg.style.opacity = 0;
  setTimeout(() => {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.style.opacity = 1;
  }, 200);
}
