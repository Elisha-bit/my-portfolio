document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you would typically send the form data to your server
    this.reset(); // Reset the form
});