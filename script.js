// JavaScript for handling form submission (simple alert for demo)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        // Optionally, you can add an AJAX request here to send form data to a server
    } else {
        alert("Please fill in all fields.");
    }
});
