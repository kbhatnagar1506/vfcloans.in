document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const button = document.querySelector('.cta-button');

    // Ensure video plays automatically
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });

    // Add click event to button
    button.addEventListener('click', function() {
        alert('Thank you for your interest! This is where you can add your custom functionality.');
    });
}); 