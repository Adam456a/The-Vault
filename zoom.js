document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.zoomable');
    
    img.addEventListener('click', function() {
        img.classList.toggle('zoomed');
    });
});
