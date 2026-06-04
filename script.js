// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Subtle parallax effect on mouse move for the blob
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// Simple mobile menu toggle alert (can be expanded)
const mobileMenu = document.querySelector('.mobile-menu');
if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        alert('Mobile menu clicked - add your drawer logic here!');
    });
}
