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

// Beta program button click handler
const betaBtn = document.querySelector('.beta-primary-btn');
if (betaBtn) {
    betaBtn.addEventListener('click', () => {
        console.log('Get free security scan button clicked!');
        // Add your custom functionality here
        // Example: window.location.href = '/beta-signup';
        // Or open a contact form modal
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

// Open all external links in a new tab
document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
  
    // Skip anchors, empty links, and non-http(s) links (mailto, tel, etc.)
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
  
    // Treat only absolute http(s) links as candidates
    if (!href.startsWith('http://') && !href.startsWith('https://')) return;
  
    const url = new URL(href);
  
    // Only external domains
    if (url.host !== window.location.host) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  });
  
 // Animates the industry cards on scroll
document.querySelectorAll('.industry-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
  
