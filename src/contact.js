export function displayContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container")
    content.appendChild(contactContainer);

    let contactTitle = document.createElement("h2");
    contactTitle.textContent = "GET IN TOUCH";
    contactTitle.setAttribute("id", "contact-title");
    contactContainer.appendChild(contactTitle);

    let contactSubtitle = document.createElement("h3");
    contactSubtitle.textContent = "We would love to hear from you!";
    contactSubtitle.setAttribute("id", "contact-subtitle");
    contactContainer.appendChild(contactSubtitle);
}