let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    // Menggeser gambar
    const newTransformValue = -100 * currentIndex + "%";
    document.querySelector(".slides").style.transform = `translateX(${newTransformValue})`;

    // Mengatur titik aktif
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Menambahkan interval untuk slider otomatis
setInterval(nextSlide, 3000);

// Mengatur titik slider untuk navigasi manual
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex); 