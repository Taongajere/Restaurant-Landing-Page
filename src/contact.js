export function createContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    
    const contactDiv = document.createElement('div');
    contactDiv.textContent = 'Contact Page Content'; // Replace with actual content and styles

    contentDiv.appendChild(contactDiv);
}