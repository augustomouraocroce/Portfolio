document.addEventListener('DOMContentLoaded', () => {
  // const slidesContainer = document.getElementById("slides-container");
  // const slide = document.querySelector(".slide");
  // const prevButton = document.getElementById("slide-arrow-prev");
  // const nextButton = document.getElementById("slide-arrow-next");
  // const imagesLength = slidesContainer.children.length;
  
  // nextButton.addEventListener("click", () => {
  //   const slideWidth = slide.clientWidth;
  //   slidesContainer.scrollLeft += slideWidth;
  // });
  
  // prevButton.addEventListener("click", () => {
  //   const slideWidth = slide.clientWidth;
  //   slidesContainer.scrollLeft -= slideWidth;
  // });

  // let currentSlide = 1;

  // function startSlider() {
  //   intervalId = setInterval(() => {
  //     console.log({ currentSlide });
  //     const isLast = currentSlide == imagesLength;
      
  //     if (isLast) {
  //       slidesContainer.scrollLeft = 0;
  //       currentSlide = 1;
  //     } else {
  //       nextButton.click();
  //       currentSlide++;
  //     }
  //   }, 3000);
  // }

  // function pauseSlider() {
  //   console.log("Pausado!");
  //   clearInterval(intervalId);
  // }
  
  // slidesContainer.addEventListener("mouseover", pauseSlider);
  // slidesContainer.addEventListener("mouseout", startSlider);
  
  // if ("mouseOver" === true) {
  //   console.log("Pausado!");
  // };
  
  // // inicie o slider
  // startSlider();

  const swiper = new Swiper('.swiper', {
                
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
})