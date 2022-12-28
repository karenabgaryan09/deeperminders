// const scrollElement = document.querySelector('.scroll-element')
// let index = 0
// document.addEventListener('mousewheel',(e)=>{
//     console.log(e.deltaY)
//     scrollElement.style.transform= `translateX(${index +=e.deltaY}px)`
// })

const ParallaxOptions = (function () {
    const imgGroup = document.querySelectorAll(".img-group");
    const titles = document.querySelectorAll("h2");
    const content = document.querySelector(".scroll-content");
    const texts = document.querySelectorAll(".number");
    const contactAfter = document.querySelector(".contact-after");
    const contactBefore = document.querySelector(".contact-before");
    const aboutBefore = document.querySelector(".about-before");
    const speed = 3;
    let distance = null;

    const scrollProgressBar = document.querySelector(".scroll-progress-bar");

    const setTitlesFading = () => {
        titles.forEach((title, index) => {
            title.style.transform = `translateY(${distance / (index * 10)}px) `;
        });
    };

    const setTextFading = () => {
        texts.forEach((text, index) => {
            text.style.transform = `translateY(${-distance / ((index + 1) * 1.5)}px) `;
        });
    };
    const setAfterBeforeFading = () => {
        if (contactBefore) contactBefore.style.transform = `translateX(${-distance}px) `;
        if (contactAfter) contactAfter.style.transform = `translateX(${distance}px) `;
        if (aboutBefore) aboutBefore.style.transform = `translateX(${-distance * 6}px) `;
    };
    const setScrollProgressBar = () => {
        let topDistance = Math.floor(-(content.getBoundingClientRect().top - window.innerHeight)).toFixed(0);
        let percentage = (topDistance * 100) / content.scrollHeight;
        if (scrollProgressBar) scrollProgressBar.style.height = percentage + "%";
    };

    function parallax() {
        distance = (content.getBoundingClientRect().top - 50) / speed;

        setTitlesFading();
        // setLeafsFading();
        setTextFading();
        setAfterBeforeFading();
        setScrollProgressBar();

        requestAnimationFrame(parallax);
    }

    requestAnimationFrame(parallax);
})();

const path = document.querySelector(".line-path");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
    let scrollPersentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    let drawLength = pathLength * scrollPersentage;

    path.style.strokeDashoffset = pathLength - drawLength;
});
