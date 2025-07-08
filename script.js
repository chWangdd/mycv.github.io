// Make camera jump on click
document.addEventListener('DOMContentLoaded', () => {
  const camera = document.getElementById('camera');

  camera.addEventListener('click', () => {
    camera.classList.add('jump');

    // Remove the class after animation completes (0.5s)
    setTimeout(() => {
      camera.classList.remove('jump');
    }, 500);
  });
});