document.addEventListener('DOMContentLoaded', () => {

    // --- Responsive Mobile Navigation ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle look of icon (hamburger to cross) if desired
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a nav link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });


    // --- Light/Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check user preference local storage configuration
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        updateThemeIcon(true);
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-theme');
        bodyElement.classList.toggle('light-theme');

        const isLight = bodyElement.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight);
    });

    function updateThemeIcon(isLight) {
        const icon = themeToggleBtn.querySelector('i');
        if (isLight) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }


    // --- Basic Interactive Interception for Contact Form Placeholder ---
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            alert("Thanks! Your message has been sent.");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    });
    // const contactForm = document.getElementById('contact-form');
    // contactForm.addEventListener('submit', (e) => {
    //     // e.preventDefault();
    //
    //     // This is where you can hook your real submission framework (like Netlify, Formspree, etc.)
    //     // alert('Thank you for reaching out! Since this is a static placeholder, your message wasn\'t actually routed. Connect with me directly via the LinkedIn or email links below!');
    //     contactForm.reset();
    // });
});