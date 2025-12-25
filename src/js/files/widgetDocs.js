export default function widgetDocs() {
  const widget = document.querySelector("#widget-docs");
  const formSearch = widget.querySelector("#widget-docs-search");

  if (widget) {
    const filters = widget.querySelector("#widget-docs-filters");
    const filtersOpen = widget.querySelector("#widget-docs-filters-open");
    const filtersClose = widget.querySelector("#widget-docs-filters-close");

    filtersOpen.addEventListener("click", handlerFiltersOpen);
    filtersClose.addEventListener("click", handlerFiltersClose);

    function handlerFiltersOpen() {
      document.body.classList.add("body-hidden");
      filters.classList.add("_open");
    }
    function handlerFiltersClose() {
      document.body.classList.remove("body-hidden");
      filters.classList.remove("_open");
    }
  }
  if (formSearch) {
    const input = formSearch.querySelector("#widget-docs-search-input");
    input.addEventListener("focus", () => {
      formSearch.classList.add("_focus");
    })
    input.addEventListener("blur", () => {
      formSearch.classList.remove("_focus");
    })
  }
}
