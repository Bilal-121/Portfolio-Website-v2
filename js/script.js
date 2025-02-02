
// functionailty for skills slick-slide 
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let index = 0;

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}