// const swiper = new Swiper(".swiper", {
// Optional parameters
//   direction: 'vertical',
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiperInHomePage = new Swiper(".footer .swiper", {
    slidesPerView: 12,
    // slidesPerGroup:4,
    // spaceBetween: 30,
    direction: "vertical",
    loop: true,
    speed: 1000,
    autoplayDisableOnInteraction: true,
    autoplay: {
        delay: 1,
        // duration: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: "#swiper-in-home-page .next",
        prevEl: "#swiper-in-home-page .prev",
    },
    breakpoints: {
        // when window width is >= 320px
        // 640: {
        //     //   width: 640,
        //     slidesPerView: 6,
        // },
        // when window width is >= 768px
        // 768: {
        //     //   width: 768,
        //     slidesPerView: 3,
        // },
        // 992: {
        //     slidesPerView: 6,
        // },
    },
});

// const swiper = document.querySelector('.swiper')

// swiper.addEventListener('mouseenter',()=>{
//     swiper.stopAutoplay();
// })
// swiper.addEventListener('mouseleave',()=>{
//     swiper.startAutoplay();
// })
