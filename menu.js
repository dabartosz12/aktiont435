const menuXD = () => {
    const menuBtn = document.querySelector(".hamburger-menu");
    const menuMain = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menuMain.classList.toggle("_active");
        menuBtn.classList.toggle("toggle");
    });
}

menuXD();

const thumb = document.querySelector(".img1");
const galleryImg = document.querySelector(".main-image");

for(let i = 0; i < thumb.clientHeight; i++) {
    console.log(thumb);
};


