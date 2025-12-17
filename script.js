// Website loaded successfully
console.log('Nexoro AI website loaded successfully!');

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Primary button click handler
const primaryBtn = document.querySelector('.primary-btn');
if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        console.log('Book consultation button clicked!');
        // Add your custom functionality here
        // Example: window.location.href = '/consultation';
    });
}

// Secondary button click handler
const secondaryBtn = document.querySelector('.secondary-btn');
if (secondaryBtn) {
    secondaryBtn.addEventListener('click', () => {
        console.log('See services button clicked!');
        // Add your custom functionality here
        // Example: window.location.href = '/services';
    });
}

// Optional: Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe capability cards for animation on scroll
document.querySelectorAll('.capability-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
