let slideIndex = 0;
autoSlide();

function autoSlide() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}