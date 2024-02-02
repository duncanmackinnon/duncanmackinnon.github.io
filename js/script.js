document.addEventListener('DOMContentLoaded', function () {
    // Update year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize the slideshow
    initializeSlideshow();

    // Event listeners for nav menu links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Close the hamburger menu when a link is clicked
            document.querySelector('.nav-menu ul').classList.remove('open');

            // Check if the clicked link is for toggling the theme
            if (this.getAttribute('href') === '#toggleTheme') {
                e.preventDefault(); // Prevent default anchor behavior
                toggleTheme();
            }
        });
    });

    // Welcome page behavior
    window.addEventListener('scroll', function() {
        const welcomeSection = document.getElementById('welcome');
        if (welcomeSection && window.pageYOffset > welcomeSection.offsetHeight) {
            welcomeSection.style.display = 'none'; // Hide the welcome section on scroll
        }
    });
});

function toggleMenu() {
    document.querySelector('.nav-menu ul').classList.toggle('open');
}

function initializeSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.project-slideshow .slide');
    const showSlide = (index) => {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
        currentSlide = index;
    };

    document.querySelector('.slide-btn.prev').addEventListener('click', () => showSlide(--currentSlide));
    document.querySelector('.slide-btn.next').addEventListener('click', () => showSlide(++currentSlide));

    showSlide(currentSlide); // Show the first slide
}

function toggleTheme() {
    // Toggle dark mode for body, header, and footer
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header && footer) {
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
    }
}