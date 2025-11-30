const burger = document.getElementById("burger-button");
const menu = document.getElementById("menu-2");
const imgBurger = document.getElementById("burger-bar");
const imgCloseBurger = document.getElementById("close-burger-bar");
const menu2 = document.getElementById("menu-2");

menu.style.transform = "translateX(-100%)";
imgCloseBurger.style.opacity = "0";

burger.addEventListener("click", function () {
    if (menu.style.transform === "translateX(-100%)") {
        menu.style.transform = "translateX(0%)";
        imgBurger.style.opacity = "0";
        imgCloseBurger.style.opacity = "1";
    } else {
        menu.style.transform = "translateX(-100%)";
        imgBurger.style.opacity = "1";
        imgCloseBurger.style.opacity = "0";
    }
});

menu2.addEventListener("click", function () {
    menu.style.transform = "translateX(-100%)";
    imgBurger.style.opacity = "1";
    imgCloseBurger.style.opacity = "0";
});
