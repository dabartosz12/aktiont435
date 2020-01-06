const menuXD = () => {
    const menuBtn = document.querySelector(".hamburger-menu");
    const menuMain = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menuMain.classList.toggle("_active");
        menuBtn.classList.toggle("toggle");
    });
}

menuXD();

//gallery
const next = document.querySelectorAll(".next-photo");
const current = document.querySelector(".current-photo");
const closeZoom = document.querySelector(".zoomed-photo");
const photoZoomed = document.querySelector(".zoomed-photo-prod");
const btnInfo = document.querySelectorAll(".info-inside-row");
const infoContainer = document.querySelector(".more-info-click");
//more-info-click-vis
next.forEach(img =>
    img.addEventListener("click", e => (current.src = e.target.src)),
    current.classList.toggle("transition"),
);

closeZoom.addEventListener("click", ()=> {
    closeZoom.classList.remove("zoomed-photo-open");
});

current.addEventListener("click", () => {
    closeZoom.classList.toggle("zoomed-photo-open");
});

photoZoomed.src = current.src;
    
for(let i = 0; i < btnInfo.length; i++) {   
    btnInfo[i].addEventListener("click", ()=> {
        infoContainer.classList.toggle("more-info-click-vis")
    });
}

infoContainer.addEventListener("click", ()=> {
    infoContainer.classList.remove("more-info-click-vis")
})

     