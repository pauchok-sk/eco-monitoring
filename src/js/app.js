import "../scss/style.scss";
import inputmask from "./files/inputmask.js";
import select from "./files/select.js";
import itemsInSelect from "./files/itemsInSelect.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import offsetLinesBody from "./files/offsetLinesBody.js";
import widgetDocs from "./files/widgetDocs.js";
import headerScroll from "./files/headerScroll.js";
import ecoboxDest from "./files/ecoboxDest.js";
import requestEcobox from "./files/requestEcobox.js";
import map from "./files/map.js";

document.addEventListener("DOMContentLoaded", () => {
  spoller();
  sliders();
  inputmask();
  select();
  itemsInSelect();
  burger();
  mediaAdaptive();
  offsetLinesBody();
  widgetDocs();
  headerScroll();
  ecoboxDest();
  requestEcobox();
  map();

  Fancybox.bind("[data-fancybox]", { closeButton: false });
  // Fancybox.show([{ type: "inline", src: "#modal-connect" }]);
});
