// Smooth scrolling to the services section when the CTA button is clicked
document.querySelector('.cta-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.services').offsetTop,
        behavior: 'smooth'
    });
});

// Function to add animation class when elements come into view
function animateOnScroll() {
    const services = document.querySelector('.services');
    const products = document.querySelector('.products');

    // Get the position of the sections relative to the viewport
    const servicesPosition = services.getBoundingClientRect().top;
    const productsPosition = products.getBoundingClientRect().top;

    // Get the height of the viewport
    const screenPosition = window.innerHeight / 1.3;

    // Add 'active' class if the sections come into view
    if (servicesPosition < screenPosition) {
        services.style.animation = 'fadeInUp 1.5s ease forwards';
    }

    if (productsPosition < screenPosition) {
        products.style.animation = 'fadeInUp 1.5s ease forwards';
    }
}

// Listen for scroll events and trigger the animation
window.addEventListener('scroll', animateOnScroll);
