(function () {
    function Navbar({}) {}

    Navbar.prototype = {
        constructor: Navbar,
        switchDropdownCollapse() {
            const toggles = document.querySelectorAll(".navbar-nav [data-toggle]");
            const contents = document.querySelectorAll(".navbar-nav ul");

            let animationType = "dropdown";
            let contentName = "dropdown-menu";

            if (window.innerWidth < 992) {
                animationType = "collapse";
                contentName = "content-collapse";
            }

            toggles.forEach((toggle) => {
                toggle.classList.remove("dropped", "show");
                toggle.setAttribute("data-toggle", animationType);
            });

            contents.forEach((content) => {
                content.classList.remove("dropdown-menu", "drop", "content-collapse", "collapse", "show");
                content.classList.add(contentName, animationType === "dropdown" ? "drop" : animationType);
            });
        },

        setEvents() {
            window.addEventListener("resize", () => this.switchDropdownCollapse());
            document.addEventListener("click", (e) => {
                const toggle = e.target.closest(".navbar-toggler");
                if (toggle) this.switchDropdownCollapse();
            });
        },
    };

    const state = {};

    const navbarHorizontal = new Navbar(state);
    navbarHorizontal.setEvents();
    navbarHorizontal.switchDropdownCollapse(); // switch not going to work in react
})();
