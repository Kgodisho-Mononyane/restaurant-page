import menuImage from "./assets/images/menu-restaurant.jpg"

export function displayMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container")
    content.appendChild(menuContainer);

    let menuTitle = document.createElement("h2");
    menuTitle.textContent = "MENU";
    menuTitle.setAttribute("id", "menu-title");
    menuContainer.appendChild(menuTitle);

    let menuSubtitle = document.createElement("h3");
    menuSubtitle.textContent = "A wonderful assortment of Italian dishes";
    menuSubtitle.setAttribute("id", "menu-subtitle");
    menuContainer.appendChild(menuSubtitle);

    let menuContent = document.createElement("div")
    menuContent.setAttribute("id", "menu-content");
    menuContainer.appendChild(menuContent);

    const menuImg = document.createElement("img");
    menuImg.src = menuImage;
    menuImg.setAttribute("id", "menu-img");
    menuContent.appendChild(menuImg);

    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.setAttribute("id", "menu-items-container");
    menuContent.appendChild(menuItemsContainer);

    let startersHeading = document.createElement("h2");
    startersHeading.textContent = "Starters"
    startersHeading.setAttribute("class", "menu-items-header");
    startersHeading.setAttribute("id", "Starters-heading");
    menuItemsContainer.appendChild(startersHeading);

    let bruschetta = document.createElement("p");
    bruschetta.textContent = "Tomato Bruschetta";
    bruschetta.setAttribute("class", "menu-item");
    bruschetta.setAttribute("id", "bruschetta");
    menuItemsContainer.appendChild(bruschetta);

    let panzanella = document.createElement("p");
    panzanella.textContent = "Panzanella";
    panzanella.setAttribute("class", "menu-item");
    panzanella.setAttribute("id", "panzanella");
    menuItemsContainer.appendChild(panzanella);

    let focaccia = document.createElement("p");
    focaccia.textContent = "Focaccia";
    focaccia.setAttribute("class", "menu-item");
    focaccia.setAttribute("id", "focaccia");
    menuItemsContainer.appendChild(focaccia);

    let mainsHeading = document.createElement("h2");
    mainsHeading.textContent = "Mains"
    mainsHeading.setAttribute("class", "menu-items-header");
    mainsHeading.setAttribute("id", "mains-heading");
    menuItemsContainer.appendChild(mainsHeading);

    let cheesePizza = document.createElement("p");
    cheesePizza.textContent = "Cheese Pizza";
    cheesePizza.setAttribute("class", "menu-item");
    cheesePizza.setAttribute("id", "cheese-pizza");
    menuItemsContainer.appendChild(cheesePizza);

    let veggiePizza = document.createElement("p");
    veggiePizza.textContent = "Veggie Pizza";
    veggiePizza.setAttribute("class", "menu-item");
    veggiePizza.setAttribute("id", "veggie-pizza");
    menuItemsContainer.appendChild(veggiePizza);

    let chickenPizza = document.createElement("p");
    chickenPizza.textContent = "Chicken Pizza";
    chickenPizza.setAttribute("class", "menu-item");
    chickenPizza.setAttribute("id", "chicken-pizza");
    menuItemsContainer.appendChild(chickenPizza);
}