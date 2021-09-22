const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const mobilemenu = document.querySelector(".header__menu");

btnHamburger.addEventListener('click', function(){
    console.log('Click Hamburger');

    if (header.classList.contains("open")) { //Close
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        mobilemenu.classList.remove("fade-in");
        mobilemenu.classList.add("fade-out");
        body.classList.remove("noscroll");
    }
    else {//Open
        header.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        mobilemenu.classList.remove("fade-out");
        mobilemenu.classList.add("fade-in");
        body.classList.add("noscroll");
    }
});
