const logo = document.querySelector(".logo");
const menu = document.querySelector(".hamburger-menu");
const modelImage = document.querySelector(".model-img");
const section = document.querySelector(".collection-section");
const btnUp = document.querySelector(".shit-gowno");
const ooo = document.querySelector(".image-of-us-sub-page");


const tl = new TimelineMax();


tl.from(".image-behind", 1, {scaleX:0, transformOrigin:"left", ease: Expo.easeInOut, width: "0%"})
  .to(".image-behind", 1, {scaleX:0, transformOrigin:"right", ease: Expo.easeInOut, width: "100%"}, "reveal")
  .from(".image-of-us-sub-page", .5, {opacity:0, delay: -0.25}, "reveal");

TweenMax.from(menu, 1, {
    opacity: "0", y: "-30px", 
    ease: Expo.easeInOut,
})

TweenMax.from(logo, 1, {
    opacity: "0", y: "-30px", 
    ease: Expo.easeInOut,
})

TweenMax.staggerFrom(".test-xd", 1, {
    opacity: "0",
    y: 30,
    delay: 1,
})


TweenMax.from(modelImage, 1.5, {
    width: "0",
    ease: Expo.easeInOut,
    transformOrigin: '100% 50%',
    delay: 1,
})

tl.staggerFrom(".header-1-landing", .5, {
    opacity: "0",
    y: 20,
    ease: Expo.easeInOut,
    delay: 1.2
}, 0.01)

tl.staggerFrom(".para-under", .5, {
    opacity:0,
    y: 40,
    ease: Expo.easeInOut,
}, 0.01)

tl.staggerFrom(".btn-chk", .5, {
    opacity:0,
    y: 40,
    ease: Expo.easeInOut,
}, 0.01)

//button main page
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 700) {
        btnUp.style.opacity = "1";
    }
    else {
        btnUp.style.opacity = "0";
    }
});
//gallery

thumb.addEventListener("click", () => {
    galleryImg.style.opacity = "0";
});