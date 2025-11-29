document.addEventListener('DOMContentLoaded', () => {
    
    // Select Elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Function
    if (mobileToggle && navContainer) {
        mobileToggle.addEventListener('click', () => {
            // Toggle 'active' class on the menu (to slide in/out)
            navContainer.classList.toggle('active');
            
            // Toggle 'active' class on the button (to switch icon via CSS)
            mobileToggle.classList.toggle('active');
        });
    }

    // Close Menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            mobileToggle.classList.remove('active'); // Reset icon to hamburger
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload for demo
            
            const btn = document.querySelector('.btn-submit');
            const originalText = btn.innerText;
            
            // Visual feedback
            btn.innerText = "Sending...";
            btn.style.backgroundColor = "#FA6A1F";

            // Simulate server request delay
            setTimeout(() => {
                alert('Massage Sent Successfully!');
                btn.innerText = originalText;
                btn.style.backgroundColor = "#C26B41"; // Reset color
                form.reset(); // Clear inputs
            }, 1500);
        });
    }
});





/* =========================================  ACTIVE LINK ON SCROLL (Fixed for Mobile & Desktop)  ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        // Add offset to handle fixed header height and visual comfort
        const scrollPosition = window.scrollY + 150; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Logic: Check if scroll position is strictly WITHIN the section bounds
            // This prevents "Facilities" from activating while still in "About us" on mobile
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });

        // Update Nav Links classes
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Match the link href with the current section ID
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});