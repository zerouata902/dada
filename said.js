let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // كل 3 ثواني
}

showSlides();

window.addEventListener("scroll", () => {
  const teamBoxes = document.querySelectorAll(".team-box");
  teamBoxes.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("show");
      }, i * 200);
    }
  });
});

let currentSlide = 0;
const slider = document.getElementById("testimonialContainer");
const total = slider.children.length;

function showSlide(index) {
  const offset = index * -100;
  slider.style.transform = translateX(${offset}%);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % total;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + total) % total;
  showSlide(currentSlide);
}

// Animation on scroll
window.addEventListener("scroll", () => {
  const section = document.getElementById("testimonials");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("visible");
  }
});