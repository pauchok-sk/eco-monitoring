(() => {
    "use strict";
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const imTel = new Inputmask("+7 (999) 999 99-99");
        imTel.mask(inputs);
    }
    function select_select() {
        const selects = document.querySelectorAll(".select");
        if (selects.length) {
            document.body.addEventListener("click", () => {
                const selectsOpen = document.querySelectorAll(".select._open");
                if (selectsOpen.length) selectsOpen.forEach(s => s.classList.remove("_open"));
            });
            selects.forEach(select => {
                const btn = select.querySelector(".select-btn");
                const items = select.querySelectorAll(".select-item");
                const input = select.querySelector(".select-input");
                select.addEventListener("click", e => e.stopPropagation());
                handlerItems(select);
                input.addEventListener("input", e => {
                    const value = e.target.value.toLowerCase();
                    items.forEach(item => {
                        if (item.textContent.toLowerCase().includes(value)) item.style.display = "block"; else item.style.display = "none";
                    });
                });
                btn.addEventListener("click", () => {
                    if (select.classList.contains("_open")) handleClose(select); else handleOpen(select);
                });
                function handleOpen(select) {
                    selects.forEach(s => s.classList.remove("_open"));
                    select.classList.add("_open");
                }
            });
        }
    }
    function handlerItems(select) {
        const items = select.querySelectorAll(".select-item");
        const input = select.querySelector(".input");
        items.forEach(item => {
            item.addEventListener("click", () => {
                items.forEach(i => i.classList.remove("_active"));
                item.classList.add("_active");
                input.value = item.textContent.replace(/\s+/g, " ").trim();
                handleClose(select);
            });
        });
    }
    function handleClose(select) {
        select.classList.remove("_open");
    }
    function itemsInSelect() {
        const forms = document.querySelectorAll("[data-items-select]");
        if (forms.length) forms.forEach(form => {
            const data = form.dataset.itemsSelect.split(",");
            const select = form.querySelector(".select-items");
            const selectBody = select.querySelector(".select-body");
            data.forEach(item => {
                const selectItem = document.createElement("div");
                selectItem.classList.add("select-item");
                selectItem.textContent = item;
                selectBody.appendChild(selectItem);
            });
            handlerItems(select);
        });
    }
    function sliders() {
        const headerServicesSlider = document.querySelector(".header-services__slider");
        if (headerServicesSlider) {
            new Swiper(headerServicesSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 30,
                navigation: {
                    nextEl: ".header-services__next-btn"
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 50
                    }
                }
            });
        }
        const introSlider = document.querySelector(".intro__slider");
        if (introSlider) {
            const introSliderGallery = document.querySelector(".intro__slider-gallery");
            const swiperGallery = new Swiper(introSliderGallery, {
                speed: 900
            });
            new Swiper(introSlider, {
                speed: 900,
                effect: "fade",
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    nextEl: ".intro__slide-next"
                },
                pagination: {
                    el: ".intro__slider-pagination",
                    clickable: true
                },
                on: {
                    slideChange: ({activeIndex}) => {
                        swiperGallery.slideTo(activeIndex);
                    }
                }
            });
        }
        const servicesSlider = document.querySelector(".s-services__slider");
        if (servicesSlider) {
            new Swiper(servicesSlider, {
                speed: 900,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".s-services .slider-pagination",
                    clickable: true
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
        const newsSlider = document.querySelector(".s-news__slider");
        if (newsSlider) {
            new Swiper(newsSlider, {
                speed: 900,
                spaceBetween: 25,
                slidesPerView: "auto",
                autoplay: {
                    delay: 4e3
                },
                navigation: {
                    nextEl: ".s-news .slider-arrow._next",
                    prevEl: ".s-news .slider-arrow._prev"
                },
                pagination: {
                    el: ".s-news .slider-pagination",
                    clickable: true
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 30,
                        slidesPerView: 4
                    }
                }
            });
        }
        const navSliders = document.querySelectorAll(".nav-slider");
        if (navSliders.length) navSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 30,
                navigation: {
                    nextEl: document.querySelector(".nav-slider__next-btn")
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 50
                    }
                }
            });
        });
        const stepsSlider = document.querySelector(".s-steps__slider");
        if (stepsSlider && window.matchMedia("(max-width: 991px)").matches) {
            new Swiper(stepsSlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".s-steps .slider-pagination",
                    clickable: true
                }
            });
        }
        const contentSliders = document.querySelectorAll(".s-content__gallery-slider");
        if (contentSliders.length) contentSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                spaceBetween: 20,
                navigation: {
                    prevEl: slider.closest(".s-content__gallery").querySelector(".slider-arrow._prev"),
                    nextEl: slider.closest(".s-content__gallery").querySelector(".slider-arrow._next")
                },
                pagination: {
                    el: slider.closest(".s-content__gallery").querySelector(".slider-pagination"),
                    clickable: true
                }
            });
        });
        const featuresSlider = document.querySelector(".s-features__slider");
        if (featuresSlider && window.matchMedia("(max-width: 767px)").matches) {
            new Swiper(featuresSlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                autoplay: {
                    delay: 4200
                },
                pagination: {
                    el: ".s-features .slider-pagination",
                    clickable: true
                }
            });
        }
        const docSliders = document.querySelectorAll(".s-doc__slider");
        if (docSliders.length) docSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                navigation: {
                    nextEl: slider.closest(".s-doc__block").querySelector(".slider-arrow._next"),
                    prevEl: slider.closest(".s-doc__block").querySelector(".slider-arrow._prev")
                },
                pagination: {
                    el: slider.closest(".s-doc__block").querySelector(".slider-pagination"),
                    clickable: true
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    }
                }
            });
        });
        const infoSlider = document.querySelector(".s-info__slider");
        if (infoSlider) {
            const isSimple = infoSlider.classList.contains("_simple");
            new Swiper(infoSlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: 1,
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".s-info .slider-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".s-info .slider-arrow._next",
                    prevEl: ".s-info .slider-arrow._prev"
                },
                breakpoints: {
                    1366: {
                        spaceBetween: 24,
                        slidesPerView: isSimple ? 3 : 4
                    },
                    992: {
                        spaceBetween: 24,
                        slidesPerView: 3
                    },
                    700: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    }
                }
            });
        }
        const certificatesSlider = document.querySelector(".s-certificates__slider");
        if (certificatesSlider) {
            new Swiper(certificatesSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 20,
                pagination: {
                    el: ".s-certificates .slider-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".s-certificates .slider-arrow._next",
                    prevEl: ".s-certificates .slider-arrow._prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            const menuButtons = burger.querySelectorAll(".burger__list a");
            menuButtons.forEach(btn => btn.addEventListener("click", handlerBurgerClose));
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                if (burgerOpen.classList.contains("_active")) handlerBurgerClose(); else handlerBurgerOpen();
            });
            burgerClose.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerClose();
            });
            function handlerBurgerClose() {
                burgerOpen.classList.remove("_active");
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
            function handlerBurgerOpen() {
                burgerOpen.classList.add("_active");
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            const services = burger.querySelector("#burger-services");
            if (services) {
                const btnServicesOpen = burger.querySelector("#burger-services-open");
                const btnServicesPrev = burger.querySelector("#burger-services-prev");
                btnServicesOpen.addEventListener("click", () => {
                    services.classList.add("_open");
                });
                btnServicesPrev.addEventListener("click", () => {
                    services.classList.remove("_open");
                });
            }
        }
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            }); else {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function offsetLinesBody() {
        const body = document.querySelector(".body");
        if (body) {
            const containerWidth = document.querySelector(".container").clientWidth;
            handleOffsetLine();
            window.addEventListener("resize", handleOffsetLine);
            function handleOffsetLine() {
                let offset = 0;
                if (window.matchMedia("(min-width: 1761px)").matches) offset = (document.documentElement.clientWidth - containerWidth) / 2 - 20; else if (window.matchMedia("(min-width: 1680px)").matches) offset = (document.documentElement.clientWidth - containerWidth) / 2 + 15;
                body.style.cssText = `--offset: ${offset}px;`;
            }
        }
    }
    function widgetDocs() {
        const widget = document.querySelector("#widget-docs");
        const formSearch = widget?.querySelector("#widget-docs-search");
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
            });
            input.addEventListener("blur", () => {
                formSearch.classList.remove("_focus");
            });
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header-t");
        if (header) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) header.classList.add("_scroll"); else header.classList.remove("_scroll");
                lastScrollTop = scrollTop;
            });
        }
    }
    function ecoboxDest() {
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
                });
            });
        }
    }
    function requestEcobox() {
        const buttons = document.querySelectorAll("a[href='#modal-request-ecobox']");
        if (buttons.length) {
            const input = document.querySelector("#input-ecobox");
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const value = btn.dataset.valueModal;
                    input.value = value;
                });
            });
        }
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) resolve(script); else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) htmlScript.type = type;
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function map() {
        const map = document.querySelector(".map");
        if (map) {
            const options = {
                root: null,
                rootMargin: "0px",
                scrollMargin: "0px",
                threshold: .01
            };
            function callback(entries, observer) {
                entries.forEach(entry => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => handlerCreateMap(target));
                        observer.unobserve(target);
                    }
                });
            }
            const observer = new IntersectionObserver(callback, options);
            observer.observe(map);
        }
        function handlerCreateMap(map) {
            const center = JSON.parse(map.dataset.center);
            const zoom = Number(map.dataset.zoom);
            const iconHref = map.dataset.icon;
            let objectMark = {};
            if (iconHref) objectMark = {
                iconLayout: "default#image",
                iconImageHref: iconHref,
                iconImageSize: [ 80, 80 ],
                iconImageOffset: [ -30, -40 ]
            };
            function init() {
                const htmlMap = new ymaps.Map(map, {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, objectMark);
                htmlMap.geoObjects.add(placemark);
                htmlMap.controls.remove("geolocationControl");
                htmlMap.controls.remove("searchControl");
                htmlMap.controls.remove("trafficControl");
                htmlMap.controls.remove("typeSelector");
                htmlMap.controls.remove("fullscreenControl");
                htmlMap.controls.remove("rulerControl");
                htmlMap.behaviors.disable([ "scrollZoom" ]);
            }
            ymaps.ready(init);
        }
    }
    function copy() {
        const buttons = document.querySelectorAll("[data-copy]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const value = btn.dataset.copy;
                const tooltip = tippy(btn, {
                    content: "Скопировано",
                    trigger: "manual"
                });
                navigator.clipboard.writeText(value).then(() => {
                    tooltip.show();
                    setTimeout(() => {
                        tooltip.hide();
                    }, 1e3);
                });
            });
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        spoller();
        sliders();
        inputmask();
        select_select();
        itemsInSelect();
        burger();
        mediaAdaptive();
        offsetLinesBody();
        widgetDocs();
        headerScroll();
        ecoboxDest();
        requestEcobox();
        map();
        copy();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false
        });
    });
})();