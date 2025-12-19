// Website loaded successfully
console.log('Nexoro AI website loaded successfully!');

// Page Transition Logic
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect on load
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 50);
});

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

// for the Home button - scroll to top if already on home page
document.querySelectorAll('.nav-home').forEach(homeLink => {
    homeLink.addEventListener('click', function(e) {
        // Check if we're on the home page (index.html or just /)
        const currentPage = window.location.pathname;
        const isHomePage = currentPage.endsWith('index.html') || 
                          currentPage.endsWith('/') || 
                          currentPage === '/';
        
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // If not on home page, let the default link behavior work (navigate to index.html)
    });
});
  
// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.form-submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    contactForm.innerHTML = '<div style="text-align: center; padding: 60px 20px;"><h3 style="color: #00ff88; font-size: 36px; margin-bottom: 20px;">✓ Message Sent Successfully!</h3><p style="color: rgba(0, 255, 136, 0.7); font-size: 18px; line-height: 1.6;">Thank you for reaching out. We\'ll get back to you within 24 hours.</p></div>';
                } else {
                    throw new Error('Network response was not ok');
                }
            }).catch(error => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                alert('Oops! Something went wrong. Please email us directly at your@email.com');
            });
        });
    }
});

// Handle Cal.com buttons
document.querySelectorAll('[data-url]').forEach(btn => {
    btn.addEventListener('click', function() {
        window.open(this.getAttribute('data-url'), '_blank');
    });
});
