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
function createSlider(sectionId, slideClass, dotClass) {
    const section = document.getElementById(sectionId);
    const slides = document.querySelectorAll(`.${slideClass}`);
    const dots = document.querySelectorAll(`.${dotClass}`);

    // Track current slide index
    let currentIndex = 0;

    // Scroll to slide
    function scrollToSlide(index) {
        const scrollPosition = slides[index].offsetLeft - (window.innerWidth - slides[index].offsetWidth) / 2;
        section.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });

        updateDots(index);
    }

    // Update active dot
    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    // Auto-slide at intervals
    const autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        scrollToSlide(currentIndex);
    }, 4000);

    // Manual navigation through dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToSlide(index);
            clearInterval(autoSlide); // Pause auto-slide on manual click
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (section === document.activeElement) { // Ensure key events target only the focused section
            if (e.key === 'ArrowRight' && currentIndex < dots.length - 1) {
                scrollToSlide(currentIndex + 1);
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                scrollToSlide(currentIndex - 1);
            }
        }
    });

    // Resize listener for responsiveness
    window.addEventListener('resize', () => scrollToSlide(currentIndex));
}

createSlider('Sections', 'Section-child', 'dot');
createSlider('Sessions', 'Session-child', 'dott');