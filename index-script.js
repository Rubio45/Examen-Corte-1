const images = ['./images/uam-1.jpeg', './images/uam-2.jpeg', './images/uam-3.jpg'];
let index = 0;

function showImage(i) {
  const img = document.getElementById("carousel-image");
  img.src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(index);
});
