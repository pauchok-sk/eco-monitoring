export default function sliders() {
  const headerServicesSlider = document.querySelector(
    ".header-services__slider"
  );

  if (headerServicesSlider) {
    const swiper = new Swiper(headerServicesSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".header-services__next-btn",
      },
      breakpoints: {
        1366: {
          spaceBetween: 50,
        },
      },
    });
  }

  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const introSliderGallery = document.querySelector(".intro__slider-gallery");
    const swiperGallery = new Swiper(introSliderGallery, {
      speed: 900,
      // effect: "fade",
    });

    const swiper = new Swiper(introSlider, {
      speed: 900,
      effect: "fade",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".intro__slide-next",
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true
      },
      on: {
        slideChange: ({activeIndex}) => {
          swiperGallery.slideTo(activeIndex)
        }
      }
    });
  }
}
