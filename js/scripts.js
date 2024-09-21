document.getElementById('downloadButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  // Close modal if user clicks outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
  }
  