// Menu Toggle Functionality
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Add or remove 'show' class
});

// Close menu when a link is clicked (optional)
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
});


