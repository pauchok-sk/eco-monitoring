export default function headerScroll() {
  const header = document.querySelector(".header-t");

  if (header) {
    let lastScrollTop = 0;


    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >lastScrollTop) {
        header.classList.add("_scroll");
      } else {
        header.classList.remove("_scroll");
      }

      lastScrollTop = scrollTop;
    });
  }
}