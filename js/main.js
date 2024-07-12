import { home } from './home.module.js';
const Home = new home()
let body = document.querySelector("html");
document.addEventListener("scroll", function () {
    let length = body.scrollTop;
    if (length >= document.querySelector("header").clientHeight) {
        document.querySelector(".nav-container").style.position = "fixed"
        document.querySelector(".nav-container").style.top = 0
    } else {
        document.querySelector(".nav-container").style.position = "absolute"
        document.querySelector(".nav-container").style.top = "85%"
    }
})