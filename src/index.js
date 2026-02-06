import "./style.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";



(() => {
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const contactBtn = document.querySelector("#contact-btn");

    homeBtn.addEventListener("click", () => {
        console.log("Home button clicked");
    });

    menuBtn.addEventListener("click", () => {
        console.log("Menu button clicked");
    });

    contactBtn.addEventListener("click", () => {
        console.log("Contact button clicked");
    });
})();