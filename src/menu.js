export function displayMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container")
    content.appendChild(menuContainer);

    let menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu Header Text";
    menuTitle.setAttribute("id", "menu-title");
    menuContainer.appendChild(menuTitle);

    let menuSubtitle = document.createElement("h3");
    menuSubtitle.textContent = "Menu Subtitle Text";
    menuSubtitle.setAttribute("id", "menu-subtitle");
    menuContainer.appendChild(menuSubtitle);
}