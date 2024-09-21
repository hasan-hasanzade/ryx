document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const downloadButton = document.getElementById('downloadButton');

    modal.style.display = 'none';

    downloadButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
