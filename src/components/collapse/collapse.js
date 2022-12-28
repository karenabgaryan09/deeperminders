(function () {
    function Collapse() {
        this.target = null;
        this.toggle = null;
        this.previousTarget = null;
        this.previousToggle = null;
        this.parent = null;
    }

    Collapse.prototype = {
        constructor: Collapse,

        // getHeight(element) {
        //     let computedHeight = null;
        //     [...element.children].forEach((each) => (computedHeight += this.getAbsoluteHeight(each)));
        //     return computedHeight + "px";
        // },

        // getAbsoluteHeight(el) {
        //     el = typeof el === "string" ? document.querySelector(el) : el;

        //     let styles = window.getComputedStyle(el);
        //     let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        //     let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);

        //     return Math.ceil(el.offsetHeight + margin + border);
        // },
        removeTransition(target) {
            target.addEventListener(
                "transitionend",
                (e) => {
                    e.currentTarget.classList.replace("collapsing", "collapse");
                    e.currentTarget.style = "";
                },
                {
                    once: true,
                }
            );
        },

        showTarget() {
            this.target.classList.add( "show");
            this.target.classList.replace('collapse','collapsing')
            setTimeout(() => (this.target.style = `height: ${this.target.scrollHeight + 'px'}`), 0);
            this.removeTransition(this.target);
            this.toggle.classList.remove("collapsed");
        },
        hideTarget() {
            const target = this.previousTarget || this.target;
            const toggle = this.previousToggle || this.toggle;
            target.style = `height: ${target.scrollHeight + 'px'}`;
            setTimeout(() => {
                target.classList.remove("show");
                target.classList.replace("collapse", "collapsing");
                target.style = "";
                this.removeTransition(target);
            }, 0);
            toggle.classList.add("collapsed");
        },
        setActiveItem() {
            this.target = document.querySelector(this.toggle.dataset.target);
            this.parent = document.querySelector(this.target.dataset.parent);
            const isCollapsing = this.parent?.querySelector('.collapsing')
            if(isCollapsing) return
            this.previousTarget = this.parent?.querySelector(".collapse.show");
            this.previousToggle =
                this.previousTarget && document.querySelector(`[data-target="#${this.previousTarget.id}"]`);
            if (this.parent && this.previousTarget && this.previousTarget !== this.target) this.hideTarget();

            const isTargetShown = this.target.classList.contains("show");
            isTargetShown ? this.hideTarget() : this.showTarget();
        },
        setEvents() {
            document.addEventListener("click", (e) => {
                this.toggle = e.target.closest("[data-toggle='collapse']");
                if (this.toggle) this.setActiveItem();
            });
        },
    };

    const collapse = new Collapse();
    collapse.setEvents();
})();
