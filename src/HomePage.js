// src/homepage.js

export function createHomepage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    
    // Create elements for the homepage
    const homepageDiv = document.createElement('div');
    homepageDiv.id = 'homepage';

    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to Our Restaurant!';

    const image = document.createElement('img');
    image.src = '';
    image.alt = 'Restaurant Image';

    const description = document.createElement('p');
    description.textContent = 'Experience the best dining experience in town at our restaurant. Our delicious food, friendly staff, and cozy atmosphere will make your visit memorable.';

    // Append elements to the homepage div
    homepageDiv.appendChild(headline);
    homepageDiv.appendChild(image);
    homepageDiv.appendChild(description);

    // Append the homepage div to the content div
    contentDiv.appendChild(homepageDiv);
}
