const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-quiz-btn');
const ans1Btn = document.querySelector('#ans1');
const ans2Btn = document.querySelector('#ans2');
const ans3Btn = document.querySelector('#ans3');
const ans4Btn = document.querySelector('#ans4');
const introtxt = document.querySelector("p");
startBtn.addEventListener('click', startTimer);

let startButton = document.querySelector('button');

startButton.onclick = function() {
  //startButton.style.backgroundColor = "magenta";
  startButton.style.visibility = "hidden";
  ans1Btn.style.visibility = "visible";
  ans2Btn.style.visibility = "visible";
  ans3Btn.style.visibility = "visible";
  ans4Btn.style.visibility = "visible";
   introtxt.style.visibility = "hidden";
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