import "../scss/style.scss";
import inputmask from "./files/inputmask.js";
import select from "./files/select.js";
import itemsInSelect from "./files/itemsInSelect.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";

document.addEventListener("DOMContentLoaded", () => {
  spoller();
  sliders();
  inputmask();
  select();
  itemsInSelect();
  burger();

  Fancybox.bind("[data-fancybox]", {});
  // Fancybox.show([{ type: "inline", src: "#modal-connect" }]);
});
