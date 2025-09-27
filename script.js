// Initialize particles on page Load
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initializeAnimation();
    setupScrollAnimations();
});

// Function to create particles
function createParticles() {
    const particles = document.getElementById('particle');
    const particleEmojis = ['🩷', '💕', '🤍', '💞']; // Number of particles
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 3 + 4 ) + 's';        
        particle.style.animationDelay = Math.random() * 2 + 's';

        particles.appendChild(particle);
    }
}

// Initialize typewriter and other animations
function initializeAnimation() {
    // Typewriter effect is handled by CSS

    // Add staggered animation delays to fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.2) + 's'; 
    });
}

// Scroll animations (AOS - Animate On Scroll)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Special handling for message text
                if (entry.target.classList.contains('message-card')) {
                    animateMessageText();
                }
            }
        });
    
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('[data-aos], .section-title, .message-card');
    elementsToObserve.forEach(element => {
        observer.observe(element);

        // Add delay based on data delay attribute
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.animationDelay = delay + 'ms';
        }
    });
}

// Animate message text with staggered effect
function animateMessageText() {
    const messageText = document.querySelectorAll('.message-text');
    messageText.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in-animate');
        }, index * 500); // Stagger by 500ms
    });
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// Toggle like functionality for photos
function toggleLike(button) {
    const heartIcon = button.querySelector('.heart-icon');
    button.classList.toggle('liked');

    if (button.classList.contains('liked')) {
        heartIcon.innerHTML = '❤️'; 
        // Create floating heart effect
        createFloatingHeart(button);
    } else {
        heartIcon.innerHTML = '🤍'; 
    }
}

// Create floating heart animations when photo is liked
function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';

    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';

    document.body.appendChild(heart);

    // Animate the heart
    heart.animate([
        { transform: 'translateY(0px) scale(1)', opacity: 1 },
        { transform: 'translateY(-60px) scale(1.5)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(heart);
    };
}
