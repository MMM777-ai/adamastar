document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form success message handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    formSuccess.style.display = 'block';
                    this.reset();
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 5000);
                }
            }).catch(error => {
                console.error('Form submission error:', error);
            });
        });
    }
});

// Placeholder for tracking functions (assuming they are defined elsewhere)
function trackClick(eventName) {
    console.log(`Tracking click: ${eventName}`);
}

function trackDownload(eventName) {
    console.log(`Tracking download: ${eventName}`);
}