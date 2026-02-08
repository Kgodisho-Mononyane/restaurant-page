import "./style.css";
import {displayHome} from "./home.js";
import {displayMenu} from "./menu.js";
import {displayContact} from "./contact.js";



(() => {
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const contactBtn = document.querySelector("#contact-btn");
    const bookBtn = document.querySelector("#book-btn")

    homeBtn.addEventListener("click", () => {
        console.log("Home button clicked");
        displayHome();
    });

    menuBtn.addEventListener("click", () => {
        console.log("Menu button clicked");
        displayMenu();
    });

    contactBtn.addEventListener("click", () => {
        console.log("Contact button clicked");
        displayContact();
    });

    bookBtn.addEventListener("click", () => {
        console.log("Book button clicked");
    });
})();