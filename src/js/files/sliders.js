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
}
