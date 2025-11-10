// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Menu tab functionality
function showCategory(category) {
    // Hide all categories
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.style.display = 'none');

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected category
    document.getElementById(category).style.display = 'block';

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Booking form
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Booking submitted! Redirecting to confirmation page.');
            window.location.href = 'confirmation.html';
        });
    }

    // Order form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Order submitted! Redirecting to confirmation page.');
            window.location.href = 'confirmation.html';
        });
    }
});
