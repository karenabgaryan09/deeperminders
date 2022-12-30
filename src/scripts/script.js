// const scrollElement = document.querySelector('.scroll-element')
// let index = 0
// document.addEventListener('mousewheel',(e)=>{
//     console.log(e.deltaY)
//     scrollElement.style.transform= `translateX(${index +=e.deltaY}px)`
// })

const ParallaxOptions = (function () {
    const content = document.querySelector(".scroll-content");
    const distanceCounter = document.querySelector(".distance-counter");
    const speed = 3;

    const scrollProgressBar = document.querySelector(".scroll-progress-bar");
    const surface = document.querySelector(".scroll-progress-image.image-0");
    const image1 = document.querySelector(".scroll-progress-image.image-1");
    const image2 = document.querySelector(".scroll-progress-image.image-2");
    const image3 = document.querySelector(".scroll-progress-image.image-3");
    const levelCount = document.querySelector(".level-count");
    const setScrollProgressBar = () => {
        let topDistance = Math.floor(-(content.getBoundingClientRect().top - window.innerHeight)).toFixed(0);
        let percentage = (topDistance * 100) / content.scrollHeight;
        if (scrollProgressBar) scrollProgressBar.style.height = percentage + "%";

        const counter = ((document.documentElement.scrollTop - window.innerHeight / 2 - 100) / 10).toFixed();
        distanceCounter.innerHTML = counter + "m";
        surface.style.opacity = '0'
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        if (counter > 700) {
            image3.style.opacity = "1";
        } else if (counter > 400) {
            image2.style.opacity = "1";
        } else if (counter > 0) {
            image1.style.opacity = "1";
        } else {
            surface.style.opacity = '1'
        }

        if (counter > 6000) {
            levelCount.innerHTML = 5;
        } else if (counter > 4000) {
            levelCount.innerHTML = 4;
        } else if (counter > 1000) {
            levelCount.innerHTML = 3;
        } else if (counter > 200) {
            levelCount.innerHTML = 2;
        } else {
            levelCount.innerHTML = 1;
        }
    };

    function parallax() {
        distance = (content.getBoundingClientRect().top - 50) / speed;
        setScrollProgressBar();

        requestAnimationFrame(parallax);
    }

    requestAnimationFrame(parallax);
})();

const path = document.querySelector(".line-path");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", (e) => {
    let scrollPersentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    let drawLength = pathLength * scrollPersentage;

    path.style.strokeDashoffset = pathLength - drawLength;
});

// const height = document.querySelector('main').offsetHeight / 100
// console.log(((200 / height) * 100).toFixed())

// const progressHeight = document.querySelector('.scroll-progress').offsetHeight
// console.log(progressHeight)
// console.log(((1000 / progressHeight) * 100).toFixed())
// console.log(((9 / 100) * progressHeight).toFixed())



const createUnits = (function(){

    const units = document.querySelector(".units");
    
    let unitsItems = "";
    Array(11000)
        .fill("")
        .forEach((item, index) => {
            if (index % 2 == 0) unitsItems += `<div class="units-item">${index}</div>`;
        });
    units.innerHTML += `<div class="units">${unitsItems}</div>`;
})()