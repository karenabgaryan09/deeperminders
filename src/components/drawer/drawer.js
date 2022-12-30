(function () {
    function Drawer({ target }) {
        this.reset();
    }

    Drawer.prototype = {
        constructor: Drawer,
        reset() {
            this.target = null;
            this.drawer = null;
            this.backdrop = null;
        },
        showDrawer(toggle) {
            this.target = toggle.dataset.target
            this.drawer = document.querySelector(toggle.dataset.target);
            this.drawer.style.display = "block";
            setTimeout(() => this.drawer.classList.add("show"), 100);
            // this.handleScroll(true);
            this.createBackdrop();
        },
        hideDrawer() {
            this.drawer.classList.remove("show");
            this.backdrop.classList.remove("show");
            this.drawer.addEventListener(
                "transitionend",
                (e) => {
                    e.currentTarget.style.display = "none";
                    // this.handleScroll();
                },
                {
                    once: true,
                }
            );
        },
        createBackdrop() {
            this.backdrop = document.createElement("div");
            this.backdrop.className = "drawer-backdrop";
            this.backdrop.setAttribute("data-target", this.target);
            this.backdrop.setAttribute("data-dismiss", "drawer");
            this.backdrop.ontransitionend = () => (this.backdrop.ontransitionend = () => this.backdrop.remove());
            this.drawer.parentElement.insertBefore(this.backdrop, this.drawer.nextElementSibling);
            setTimeout(() => this.backdrop.classList.add("show"), 100);
        },
        handleScroll(removeScroll) {
            // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + "px";
            // const navbar = document.querySelector(".navbar");

            // document.body.style.paddingRight = removeScroll ? scrollbarWidth : "";
            // document.body.style.overflow = removeScroll ? "hidden" : "";
            // if (navbar) navbar.style.borderRight = removeScroll ? `${scrollbarWidth} solid transparent` : "";
        },
        setEvents() {
            document.addEventListener("click", (e) => {
                const toggle = e.target.closest("[data-toggle='drawer']");
                const dismiss = e.target.closest('[data-dismiss="drawer"]');
                if (dismiss) this.hideDrawer();
                if (toggle) this.showDrawer(toggle);
            });
        },
    };

    const drawerState = {};

    const drawer = new Drawer(drawerState);
    drawer.setEvents();
})();
