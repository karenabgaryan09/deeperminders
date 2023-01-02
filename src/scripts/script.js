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
    const levelZoneName = document.querySelector(".level-zone-name");
    const anchorBtn = document.querySelector(".anchor-btn");
    const scroll = document.querySelector('.hero .scroll')
    const setScrollProgressBar = () => {
        let topDistance = Math.floor(-(content.getBoundingClientRect().top - window.innerHeight)).toFixed(0);
        let percentage = (topDistance * 100) / content.scrollHeight;
        if (scrollProgressBar) scrollProgressBar.style.height = percentage + "%";

        let counter = ((document.documentElement.scrollTop - window.innerHeight / 2 - 100) / 10).toFixed();
        let result = ''
        scroll.style.opacity = '1'
        if (counter >= 0) result = counter + 'm' ;
        if (counter < 0) result = "surface";
        if(counter < 0 && window.innerWidth < 768) scroll.style.opacity = '0'
        if (counter >= 11000)   scroll.style.opacity = '0'

        distanceCounter.innerText = result;
        surface.style.opacity = "0";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        anchorBtn.style.opacity = "0";
        if (counter > 0) {
            anchorBtn.style.opacity = "1";
        }
        if (counter > 700) {
            image3.style.opacity = "1";
        } else if (counter > 400) {
            image2.style.opacity = "1";
        } else if (counter > 0) {
            image1.style.opacity = "1";
        } else {
            surface.style.opacity = "1";
        }

        let levelCountText = 0
        let levelZoneNameText = ''
        if (counter > 6000) {
            levelCountText = 5
            levelZoneNameText =  'hadalpelagic'
        } else if (counter > 4000) {
            levelCountText = 4;
            levelZoneNameText =  'abyssopelagic'
        } else if (counter > 1000) {
            levelCountText = 3;
            levelZoneNameText = 'bathypelagic'
        } else if (counter > 200) {
            levelCountText = 2;
            levelZoneNameText = 'mesopelagic'
        } else {
            levelCountText = 1;
            levelZoneNameText = 'epipelagic'
        }
        levelCount.innerText = levelCountText
        levelZoneName.innerText = levelZoneNameText
    };

    function parallax() {
        distance = (content.getBoundingClientRect().top - 50) / speed;
        setScrollProgressBar();

        // requestAnimationFrame(parallax);
    }
    parallax()

    // requestAnimationFrame(parallax);
    window.addEventListener('scroll', parallax)
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

const createUnits = (function () {
    const units = document.querySelector(".units");

    let unitsItems = "";
    Array(11000)
        .fill("")
        .forEach((item, index) => {
            if (index % 2 == 0) unitsItems += `<div class="units-item">${index}</div>`;
        });
    units.innerHTML += `<ul class="units-list">${unitsItems}</ul>`;
})();


