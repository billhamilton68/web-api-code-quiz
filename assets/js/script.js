const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-quiz-btn');

startBtn.addEventListener('click', startTimer);

function startTimer() {
  let timeLeft = 60;
  const timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
    } else {
      timeLeft--;
      timer.textContent = `Timer: ${timeLeft}`;
    }
  }, 1000);
}