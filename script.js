// Make camera jump on click
document.addEventListener('DOMContentLoaded', () => {
  const camera = document.getElementById('camera');

  camera.addEventListener('click', () => {
    camera.classList.add('jump');

    // Remove the class after animation completes
    setTimeout(() => {
      camera.classList.remove('jump');
    }, 1500);
  });
});