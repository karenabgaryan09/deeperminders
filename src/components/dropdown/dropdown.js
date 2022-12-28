const Dropdown = (function () {
    let activeMenu = null;
    let activeToggle = null;

    const showMenu = () => {
        activeMenu.classList.add("show");
        activeToggle.classList.add("show");
    };

    const hideMenu = () => {
        activeMenu.classList.remove("show");
        activeToggle.classList.remove("show");
    };

    function init(e) {
        const currentToggle = e.target.closest("[data-toggle='dropdown']");
        const currentMenu = document.querySelector(".dropdown-menu.show");

        if (currentToggle) {
            activeToggle = currentToggle;
            activeMenu = currentToggle.nextElementSibling;
            showMenu();
        }
        if (currentMenu) {
            activeToggle = currentMenu.previousElementSibling;
            activeMenu = currentMenu;
            hideMenu();
        }
    }

    document.addEventListener("click", init);
})();