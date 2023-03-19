const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-quiz-btn');

startBtn.addEventListener('click', startTimer);

let startButton = document.querySelector('button');

startButton.onclick = function() {
  //startButton.style.backgroundColor = "magenta";
  startButton.style.visibility = "hidden"
};

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