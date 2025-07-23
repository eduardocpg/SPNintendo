const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {
  if (!mario.classList.contains('jump')) {
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
  }
}

document.addEventListener('keydown', jump);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioBottom = parseInt(
    window.getComputedStyle(mario).bottom.replace('px', '')
  );

  if (pipePosition < 120 && pipePosition > 0 && marioBottom < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioBottom}px`;

    mario.src = 'game-over.png'; // imagem de Mario derrotado
    mario.style.width = '60px';

    clearInterval(loop);
  }
}, 10);
