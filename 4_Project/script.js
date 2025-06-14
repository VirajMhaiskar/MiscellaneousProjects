const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const images = document.querySelectorAll(".images");
let imageIndex = 0;
let sliderTimer = 0;

const showSlide = ((index) => {
    clearTimeout(sliderTimer);
    images.forEach((image, i) => {
        image.classList.remove("active");
        if(i === index) {
            image.classList.add("active");
        }
    });
    sliderTimer = setTimeout(() => {
        imageIndex = (imageIndex + 1) % images.length;
        showSlide(imageIndex);
    }, 2000)
})

showSlide(imageIndex);

nextButton.addEventListener("click", () => {
    imageIndex = (imageIndex + 1) % images.length;
    showSlide(imageIndex);
});

prevButton.addEventListener("click", () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    showSlide(imageIndex);
})