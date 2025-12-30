export default function requestEcobox() {
  const buttons = document.querySelectorAll("a[href='#modal-request-ecobox']");

  if (buttons.length) {
    const input = document.querySelector("#input-ecobox");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.valueModal;

        input.value = value;
      });
    });
  }
}
