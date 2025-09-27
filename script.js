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