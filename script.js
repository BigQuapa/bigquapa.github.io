// You can add JavaScript functionality here
// For example, button click handlers, smooth scrolling, etc.

console.log('Website loaded successfully!');

// Example: Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Add click handlers to buttons
document.querySelector('.primary-btn')?.addEventListener('click', () => {
    console.log('Primary button clicked!');
    // Add your custom functionality here
});

document.querySelector('.secondary-btn')?.addEventListener('click', () => {
    console.log('Secondary button clicked!');
    // Add your custom functionality here
});

// Neon Trail Cursor Effect
console.log('Website loaded successfully!');

