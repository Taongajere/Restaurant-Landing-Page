console.log("Hello from index.js!");

// import HomePage.js contents
import { createHomepage } from './HomePage';
// import conatact
import { createContactPage } from './contact.js';
//import menu
import { createMenuPage } from './menu.js';


// load homePage
function loadHomepage() {
    createHomepage();
};


// button event listeners
document.addEventListener('DOMContentLoaded', () => {

    // load home page when page is initially loaded
    loadHomepage();


    // get buttons
    const homePageButton = document.getElementById('homeBtn')
    const contactButton = document.getElementById('contactBtn');
    const menuButton = document.getElementById('menuBtn');
    

    //add event listeners for buttons
    homePageButton.addEventListener('click', () => {
        loadHomepage();
    })

    contactButton.addEventListener('click', () => {
        createContactPage();
    });

    menuButton.addEventListener('click', () => {
        createMenuPage();
    });
});