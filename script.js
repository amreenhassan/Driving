// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const car = document.getElementById('car');
    const music = document.getElementById('backgroundMusic');

    // Play background music
    music.play();

    // Control car movement with keyboard
    window.addEventListener('keydown', (event) => {
        const style = window.getComputedStyle(car);
        const left = parseInt(style.left);
        
        if (event.key === 'ArrowLeft' && left > 10) {
            car.style.left = (left - 10) + 'px'; // Move left
        } else if (event.key === 'ArrowRight' && left < window.innerWidth - 120) {
            car.style.left = (left + 10) + 'px'; // Move right
        }
    });
});
