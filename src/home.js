export function displayHome() {
    const content = document.querySelector("#content")
    content.innerHTML = "";

    let homeContainer = createElement("div");
    homeContainer.setAttribute("id", "home-container")
    content.appendChild(homeContainer);

    let homeTitle = createElement("h2");
    homeTitle.textContent = "WELCOME TO SHISANYAMA";
    homeTitle.setAttribute("id", "home-title");
    homeContainer.appendChild(homeTitle);

    let homeSubtitle = createElement("h3");
    homeSubtitle.textContent = "The best Shisanyama restaurant in Mzansi.";
    homeSubtitle.setAttribute("id", "home-subtitle");
    homeContainer.appendChild(homeSubtitle);
    
    let homeContent = createElement("div");
    homeContent.setAttribute("id", "home-content");
    content.appendChild(homeContent)
    homeContainer.appendChild(homeContent)

    /*add image dynamic styling here*/

    let bookBtn = createElement("button");
    bookBtn.textContent = "Book Now";
    bookBtn.setAttribute("id", "book-btn");
    homeContent.appendChild(bookBtn);

    let operatingHoursContainer = createElement("div");
    operatingHoursContainer.setAttribute("id", "operating-hours-container");
    homeContent.appendChild(operatingHoursContainer);

    let operatingHoursHeader = createElement("h2");
    operatingHoursHeader.textContent = "Operating hours";
    operatingHoursHeader.setAttribute("id", "operating-hours-header");

    let monFri = createElement("h3");
    monFri.textContent = "Monday - Friday";
    monFri.setAttribute("class", "operating-hours-days");
    monFri.setAttribute("id", "mon-fri")
    operatingHoursContainer.appendChild(monFri);

    let monFriTimes = createElement("p");
    monFriTimes.textContent = "10:00 - 20:00";
    monFriTimes.setAttribute("class", "operating-hours-times");
    monFriTimes.setAttribute("id", "mon-fri-times");
    operatingHoursContainer.appendChild(monFriTimes);

    let satSun = createElement("h3");
    monFri.textContent = "Saturday & Sunday";
    monFri.setAttribute("class", "operating-hours-days");
    monFri.setAttribute("id", "sat-sun")
    operatingHoursContainer.appendChild(monFri);

    let satSunTimes = createElement("p");
    satSunTimes.textContent = "9:00 - 23:00";
    satSunTimes.setAttribute("class", "operating-hours-times");
    satSunTimes.setAttribute("id", "sat-sun-times");
    operatingHoursContainer.appendChild(satSunTimes);

}