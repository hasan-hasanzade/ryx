document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const downloadButton = document.getElementById('downloadButton');

    // Hide the modal by default
    modal.style.display = 'none';

    // Show modal on button click
    downloadButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
