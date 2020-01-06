const btnUp = document.querySelector(".shit-gowno");
const menu = document.querySelector(".hamburger-menu");

const tl = new TimelineMax();

//landing

TweenMax.to(".pre-backgorund", 1.5, {
    height: "0%",
    delay: 5,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".letter", 1, {
    y: 30,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut
}, 0.05)

TweenMax.staggerTo(".letter", 1, {
    y: -30,
    opacity: 0,
    delay: 3,
    ease: Expo.easeInOut
}, 0.05)

TweenMax.from(".promo-photo", 1, {
    width: 0,
    ease: Expo.easeInOut,
    delay: 6,
})

TweenMax.staggerFrom(".text-in-elem", 1, {
    y: -30,
    ease: Expo.easeInOut,
    opacity: 0,
    delay: 6.7,
}, 0.25)

TweenMax.from(".test-xd-landing", 1, {
    opacity: "0",
    y: "-30px", 
    ease: Expo.easeInOut,
    delay: 7,
})

TweenMax.from(".hamburger-menu-landing", 1, {
    opacity: "0",
    y: "-30px", 
    ease: Expo.easeInOut,
    delay: 6,
})

TweenMax.from(".logo-landing", 1, {
    opacity: "0",
    y: "-30px", 
    ease: Expo.easeInOut,
    delay: 6,
})

TweenMax.from(".socials", 1, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 7.5,
})

//rest

TweenMax.from(".animation-main", 1, {
    opacity: 0,
    ease: Expo.easeInOut,
})

//chosen-item

menu.addEventListener("click", ()=> {
    TweenMax.staggerFrom(".stagger", .8, {
        opacity: 0,
        x: -25,
        ease: Expo.easeInOut,
        delay: .8
    },0.25);

    TweenMax.staggerFrom(".stagger2", .8, {
        opacity: 0,
        x: -25,
        ease: Expo.easeInOut,
        delay: 1.3
    },0.1)
});

//button main page
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 700) {
        btnUp.style.opacity = "1";
    }
    else {
        btnUp.style.opacity = "0";
    }
});