document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    const imagesLength = slidesContainer.children.length;
    
    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });

    let currentSlide = 1;

    setInterval(() => {
      console.log({ currentSlide });
      const isLast = currentSlide == imagesLength

      if (isLast) {
        slidesContainer.scrollLeft = 0;
        currentSlide = 1;
      } else {
        nextButton.click();
        currentSlide++;
      }
    }, 4500);
})