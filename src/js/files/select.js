export default function select() {
  const selects = document.querySelectorAll(".select");

  if (selects.length) {
    document.body.addEventListener("click", () => {
      const selectsOpen = document.querySelectorAll(".select._open");

      if (selectsOpen.length) {
        selectsOpen.forEach((s) => s.classList.remove("_open"));
      }
    });

    selects.forEach((select) => {
      const btn = select.querySelector(".select-btn");
      const items = select.querySelectorAll(".select-item");
      const input = select.querySelector(".select-input");
      select.addEventListener("click", (e) => e.stopPropagation());

      handlerItems(select);

      input.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        items.forEach((item) => {
          if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });

      btn.addEventListener("click", () => {
        if (select.classList.contains("_open")) {
          handleClose(select);
        } else {
          handleOpen(select);
        }
      });

      function handleOpen(select) {
        selects.forEach((s) => s.classList.remove("_open"));
        select.classList.add("_open");
      }
    });
  }
}

export function handlerItems(select) {
  const items = select.querySelectorAll(".select-item");
  const input = select.querySelector(".input");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("_active"));
      item.classList.add("_active");

      input.value = item.textContent.replace(/\s+/g, " ").trim();

      handleClose(select);
    });
  });
}

export function handleClose(select) {
  select.classList.remove("_open");
}
