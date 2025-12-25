export default function offsetLinesBody() {
  const body = document.querySelector(".body");

  if (body) {
    const containerWidth = document.querySelector(".container").clientWidth;

    handleOffsetLine();
    window.addEventListener("resize", handleOffsetLine);

    function handleOffsetLine() {
      let offset = 0;

      if (window.matchMedia("(min-width: 1761px)").matches) {
        offset =
          (document.documentElement.clientWidth - containerWidth) / 2 - 20;
      } else if (window.matchMedia("(min-width: 1680px)").matches) {
        offset =
          (document.documentElement.clientWidth - containerWidth) / 2 + 15;
      }

      body.style.cssText = `--offset: ${offset}px;`;
    }
  }
}
