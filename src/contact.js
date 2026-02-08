export function displayContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let contactContainer = createElement("div");
    contactContainer.setAttribute("id", "contact-container")
    content.appendChild(contactContainer);

    let contactTitle = createElement("h2");
    contactTitle.textContent = "Contact Header Text";
    contactTitle.setAttribute("id", "contact-title");
    contactContainer.appendChild(contactTitle);

    let contactSubtitle = createElement("h3");
    contactSubtitle.textContent = "Contact Subtitle Text";
    contactSubtitle.setAttribute("id", "contact-subtitle");
    contactContainer.appendChild(contactSubtitle);
}