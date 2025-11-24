document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelector('.items');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('h-class');
        navItems.classList.toggle('v-class');
        
        // Toggle burger icon animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.add('h-class');
            navItems.classList.add('v-class');
            burger.classList.remove('toggle');
        });
    });
});