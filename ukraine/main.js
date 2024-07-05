const tooltip = document.querySelector(".tooltip");
const rnum = document.querySelector(".rnum");
const bg = document.querySelector(".info_bg");
const countries = document.querySelectorAll(".country_svg");

function getOffsets() {
    const screenWidth = window.innerWidth;

    let xOffset, yOffset;

    if (screenWidth >= 1600) {
        xOffset = 10;
        yOffset = 800;
    } else if (screenWidth >= 1020) {
        xOffset = 10;
        yOffset = 800;
    } else if (screenWidth >= 770) {
        xOffset = 10;
        yOffset = 750;
    }else if (screenWidth <= 770) {
        xOffset = -20;
        yOffset = 1120;
    }    else {
        xOffset = 10;
        yOffset = 1350;
    }

    return { xOffset, yOffset };
}

let offsets = getOffsets();

window.addEventListener('resize', () => {
    offsets = getOffsets();
});

countries.forEach(country => {
    country.addEventListener("mousemove", function(e) {
        tooltip.innerText = this.dataset.title;
        rnum.innerText = this.dataset.text;
        bg.style.top = (e.y + offsets.yOffset) + "px";
        bg.style.left = (e.x + offsets.xOffset) + "px";
    });

country.addEventListener("mouseenter", function() {
    bg.style.display = "block";
});

country.addEventListener("mouseleave", function() {
    bg.style.display = "none";
});

});


// -----menu-burger-----

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open')
})