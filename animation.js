const logo = document.querySelector(".logo");
const menu = document.querySelector(".hamburger-menu");
const modelImage = document.querySelector(".model-img");
const section = document.querySelector(".collection-section");
const btnUp = document.querySelector(".shit-gowno");

const tl = new TimelineMax();

TweenMax.from(menu, 1, {
    opacity: "0", y: "-30px", 
    ease: Expo.easeInOut,
})

TweenMax.from(logo, 1, {
    opacity: "0", y: "-30px", 
    ease: Expo.easeInOut,
})

tl.staggerFrom(".test-xd", 1, {
    opacity: "0",
    y: 30,
    delay: 1,
})


tl.from(modelImage, 1.5, {
    width: "0",
    ease: Expo.easeInOut,
    transformOrigin: '100% 50%',
})

tl.staggerFrom(".header-1-landing", .7, {
    opacity: "0",
    y: 20,
    ease: Expo.easeInOut,
}, 0.01)

tl.staggerFrom(".para-under", .7, {
    opacity:0,
    y: 40,
    ease: Expo.easeInOut,
}, 0.01)

tl.staggerFrom(".btn-chk", .7, {
    opacity:0,
    y: 40,
    ease: Expo.easeInOut,
}, 0.01)


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 700) {
        btnUp.style.opacity = "1";
    }
    else {
        btnUp.style.opacity = "0";
    }
});
