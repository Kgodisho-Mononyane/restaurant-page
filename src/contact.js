import contactImage from "./assets/images/contact-restaurant.jpg";

export function displayContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container")
    content.appendChild(contactContainer);

    let contactTitle = document.createElement("h2");
    contactTitle.textContent = "CONTACT";
    contactTitle.setAttribute("id", "contact-title");
    contactContainer.appendChild(contactTitle);

    let contactSubtitle = document.createElement("h3");
    contactSubtitle.textContent = "We would love to hear from you!";
    contactSubtitle.setAttribute("id", "contact-subtitle");
    contactContainer.appendChild(contactSubtitle);

    let contactContent = document.createElement("div");
    contactContent.setAttribute("id", "contact-content");
    contactContainer.appendChild(contactContent);

    const contactImg = document.createElement("img");
    contactImg.src = contactImage;
    contactImg.setAttribute("id", "contact-img");
    contactContent.appendChild(contactImg);

    let contactItemsContainer = document.createElement("div");
    contactItemsContainer.setAttribute("id", "contact-items-container");
    contactContent.appendChild(contactItemsContainer);

    let locationHeading = document.createElement("h2");
    locationHeading.setAttribute("id", "location-heading");
    locationHeading.setAttribute("class", "contact-heading");
    locationHeading.textContent = "Location";
    contactItemsContainer.appendChild(locationHeading)

    let location = document.createElement("P");
    location.setAttribute("class", "contact-info");
    location.setAttribute("id", "location");
    location.textContent = "123 Gumdrop Road";
    contactItemsContainer.appendChild(location);

    let phoneHeading = document.createElement("h2");
    phoneHeading.setAttribute("id", "phone-heading");
    phoneHeading.setAttribute("class", "contact-heading");
    phoneHeading.textContent = "Phone Number";
    contactItemsContainer.appendChild(phoneHeading)

    let phoneNumber = document.createElement("P");
    phoneNumber.setAttribute("class", "contact-info");
    phoneNumber.setAttribute("id", "phone-heading");
    phoneNumber.textContent = "011 123 456";
    contactItemsContainer.appendChild(phoneNumber);

    let emailHeading = document.createElement("h2");
    emailHeading.setAttribute("id", "email-heading");
    emailHeading.setAttribute("class", "contact-heading");
    emailHeading.textContent = "Email";
    contactItemsContainer.appendChild(emailHeading);

    let email = document.createElement("P");
    email.setAttribute("class", "contact-info");
    email.setAttribute("id", "email-heading");
    email.textContent = "fakeEmail@fakeEmail.com";
    contactItemsContainer.appendChild(email);
}