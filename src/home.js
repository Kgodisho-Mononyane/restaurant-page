const home = "Home page";

function displayHome() {
    const content = document.querySelector("#content")
    content.innerHTML = "";

    let homeContainer = createElement("div");
    homeContainer.id.add("home-container");
    content.appendChild(homeContainer);

    let homeTitle = createElement("h1");
    homeTitle.textContent = "Add Home title here";
    homeTitle.id.add("home-title");
    homeTitle.appendChild(homeContainer);

    let homeContent = createElement("div");
    homeContent.id.add("home-content");
    content.appendChild(homeContent)
}

export {home}