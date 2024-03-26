export function createMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    
    const menuDiv = document.createElement('div');
    menuDiv.textContent = 'Menu Page Content'; // Replace with actual content and styles

    contentDiv.appendChild(menuDiv);
}