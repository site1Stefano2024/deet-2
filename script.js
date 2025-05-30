// Mobile menu functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNav.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Add animation to service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add hamburger menu animation
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const hamburgers = this.querySelectorAll('.hamburger');
            hamburgers.forEach((line, index) => {
                if (this.classList.contains('active')) {
                    if (index === 0) {
                        line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    } else if (index === 1) {
                        line.style.opacity = '0';
                    } else if (index === 2) {
                        line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    }
                } else {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                }
            });
        });
    }
});
