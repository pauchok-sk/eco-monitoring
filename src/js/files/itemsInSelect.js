import { handlerItems } from "./select.js";

export default function itemsInSelect() {
  const forms = document.querySelectorAll("[data-items-select]");

  if (forms.length) {
    forms.forEach((form) => {
      const data = form.dataset.itemsSelect.split(",");
      const select = form.querySelector(".select-items");
      const selectBody = select.querySelector(".select-body");

      data.forEach((item) => {
        const selectItem = document.createElement("div");
        selectItem.classList.add("select-item");
        selectItem.textContent = item;

        selectBody.appendChild(selectItem);
      });

      handlerItems(select);
    });
  }
}
