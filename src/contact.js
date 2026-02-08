export function displayContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container")
    content.appendChild(contactContainer);

    let contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Header Text";
    contactTitle.setAttribute("id", "contact-title");
    contactContainer.appendChild(contactTitle);

    let contactSubtitle = document.createElement("h3");
    contactSubtitle.textContent = "Contact Subtitle Text";
    contactSubtitle.setAttribute("id", "contact-subtitle");
    contactContainer.appendChild(contactSubtitle);
}