import { showHomePage } from "./home";
import { showMenuPage } from "./menu";
import { showContactPage } from "./contact";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const contentDiv = document.getElementById('content');

homeButton.addEventListener('click', () => {
    clearContent();
    showHomePage();
});

menuButton.addEventListener('click', () => {
    clearContent();
    showMenuPage();
});

contactButton.addEventListener('click', () => {
    clearContent();
    showContactPage();
});

function clearContent() {
    contentDiv.innerHTML = "";
}


showHomePage();
