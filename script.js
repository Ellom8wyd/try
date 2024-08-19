window.onload = function() {
    // Simulate loading progress
    let loadText = document.querySelector('#load-no div');
    let loadPercentage = 0;

    let loadInterval = setInterval(function() {
        loadPercentage += 10;
        loadText.textContent = loadPercentage + '%';
        if (loadPercentage >= 100) {
            clearInterval(loadInterval);
            document.getElementById('load').style.display = 'none';
            document.querySelector('.content').style.display = 'block';
        }
    }, 300);

    // Zoomable image functionality
    const images = document.querySelectorAll('.zoomable');
    images.forEach(image => {
        image.addEventListener('click', function() {
            if (!this.classList.contains('zoomed-in')) {
                this.classList.add('zoomed-in');
                showTextOverlay('Hello');
            } else {
                this.classList.remove('zoomed-in');
                this.classList.add('zoomed-out');
                setTimeout(() => {
                    this.classList.remove('zoomed-out');
                }, 500);
                hideTextOverlay();
            }
        });
    });

    function showTextOverlay(text) {
        const overlay = document.createElement('div');
        overlay.className = 'text-overlay';
        overlay.textContent = text;
        document.body.appendChild(overlay);
    }

    function hideTextOverlay() {
        const overlay = document.querySelector('.text-overlay');
        if (overlay) {
            overlay.remove();
        }
    }
};
