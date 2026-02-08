import homeImage from "./assets/images/home-restaurant.jpg"

export function displayHome() {
    const content = document.querySelector("#content")
    content.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "home-container")
    content.appendChild(homeContainer);

    let homeTitle = document.createElement("h2");
    homeTitle.textContent = "WELCOME TO MONONYANE";
    homeTitle.setAttribute("id", "home-title");
    homeContainer.appendChild(homeTitle);

    let homeSubtitle = document.createElement("h3");
    homeSubtitle.textContent = "The best Pizza restaurant in Mzansi.";
    homeSubtitle.setAttribute("id", "home-subtitle");
    homeContainer.appendChild(homeSubtitle);
    
    let homeContent = document.createElement("div");
    homeContent.setAttribute("id", "home-content");
    content.appendChild(homeContent)
    homeContainer.appendChild(homeContent)

    /*add image dynamic styling here*/
    const homeImg = document.createElement("img");
    homeImg.src = homeImage;
    homeImg.setAttribute("id", "home-img");
    homeContent.appendChild(homeImg);

    let bookBtn = document.createElement("button");
    bookBtn.textContent = "Book Now";
    bookBtn.setAttribute("id", "book-btn");
    homeContent.appendChild(bookBtn);

    let operatingHoursContainer = document.createElement("div");
    operatingHoursContainer.setAttribute("id", "operating-hours-container");
    homeContent.appendChild(operatingHoursContainer);

    let operatingHoursHeader = document.createElement("h2");
    operatingHoursHeader.textContent = "Operating hours";
    operatingHoursHeader.setAttribute("id", "operating-hours-header");
    operatingHoursContainer.appendChild(operatingHoursHeader)

    let monFri = document.createElement("h3");
    monFri.textContent = "Monday - Friday";
    monFri.setAttribute("class", "operating-hours-days");
    monFri.setAttribute("id", "mon-fri")
    operatingHoursContainer.appendChild(monFri);

    let monFriTimes = document.createElement("p");
    monFriTimes.textContent = "10:00 - 20:00";
    monFriTimes.setAttribute("class", "operating-hours-times");
    monFriTimes.setAttribute("id", "mon-fri-times");
    operatingHoursContainer.appendChild(monFriTimes);

    let satSun = document.createElement("h3");
    satSun.textContent = "Saturday & Sunday";
    satSun.setAttribute("class", "operating-hours-days");
    satSun.setAttribute("id", "sat-sun")
    operatingHoursContainer.appendChild(satSun);

    let satSunTimes = document.createElement("p");
    satSunTimes.textContent = "9:00 - 23:00";
    satSunTimes.setAttribute("class", "operating-hours-times");
    satSunTimes.setAttribute("id", "sat-sun-times");
    operatingHoursContainer.appendChild(satSunTimes);

}