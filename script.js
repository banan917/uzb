let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// 🔹 Кнопки "Вперёд" и "Назад"
nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

// 🔹 Переключение с клавиатуры (← / →)
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && currentSlide < slides.length - 1) {
        currentSlide++;
    } else if (event.key === "ArrowLeft" && currentSlide > 0) {
        currentSlide--;
    }
    showSlide(currentSlide);
});

// 🔹 Запускаем первый слайд
showSlide(currentSlide);