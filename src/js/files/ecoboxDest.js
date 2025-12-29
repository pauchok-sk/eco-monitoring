export default function ecoboxDest() {
  const buttons = document.querySelectorAll("a[href='#modal-dest']");

  if (buttons.length) {
    const modalTitle = document.querySelector("#modal-dest-title");
    const modalContent = document.querySelector("#modal-dest-content");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const title = btn.dataset.destTitle;
        const content = btn.dataset.destContent;

        modalTitle.textContent = title;
        modalContent.innerHTML = content;
      })
    })
  }
}