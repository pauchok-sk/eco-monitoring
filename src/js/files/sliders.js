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
        clickable: true,
      },
      on: {
        slideChange: ({ activeIndex }) => {
          swiperGallery.slideTo(activeIndex);
        },
      },
    });
  }

  const servicesSlider = document.querySelector(".s-services__slider");

  if (servicesSlider) {
    const swiper = new Swiper(servicesSlider, {
      speed: 900,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".s-services .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const newsSlider = document.querySelector(".s-news__slider");

  if (newsSlider) {
    const swiper = new Swiper(newsSlider, {
      speed: 900,
      spaceBetween: 25,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".s-news .slider-arrow._next",
        prevEl: ".s-news .slider-arrow._prev",
      },
      pagination: {
        el: ".s-news .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });
  }

  const navSliders = document.querySelectorAll(".nav-slider");

  if (navSliders.length) {
    navSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
          nextEl: document.querySelector(".nav-slider__next-btn"),
        },
        breakpoints: {
          1366: {
            spaceBetween: 50,
          },
        },
      });
    });
  }
}
