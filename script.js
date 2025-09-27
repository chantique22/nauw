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