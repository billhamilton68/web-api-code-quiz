const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-quiz-btn');
const ans1Btn = document.querySelector('#ans1');
const ans2Btn = document.querySelector('#ans2');
const ans3Btn = document.querySelector('#ans3');
const ans4Btn = document.querySelector('#ans4');
const introtxt = document.querySelector("#intro");
startBtn.addEventListener('click', startTimer);

var introText = "Try to answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"

var question = ""
const question1 = "What is Tucker's favorie lunch?"
const q1Answer = "Taco";
const q1Option1 = "Taco";
const q1Option2 = "Cheeseburger and fries";
const q1Option3 = "Mac and Cheese";
const q1Option4 = "Pizza";


const question2 = "What is the keyword used for Variable?";
const q2Answer = "var";
const q2Option1 = "Var";
const q2Option2 = "var";
const q2Option3 = "virtual";
const q2Option4 = "Vincent";

const question3 = "What does full name of HTML?";
const q3Answer = "Hyper Text Markup Language";
const q3Option1 = "Having Time and Managing Life";
const q3Option2 = "Hyper Text Markup Language";
const q3Option3 = "Half Time Minnesota Loses";
const q3Option4 = "Happy Terrific Markup Language";

const question4 = "Which charecter has to be entered at the end of java script statements?";
const q4Answer = ";";
const q4Option1 = "#";
const q4Option2 = "$";
const q4Option3 = "{}";
const q4Option4 = ";";

let startButton = document.querySelector('button');

startButton.onclick = function() {
  //startButton.style.backgroundColor = "magenta";
  startButton.style.visibility = "hidden";
   ans1Btn.innerHTML = "1. " + q1Option1;
  ans2Btn.innerHTML = "2. " + q1Option2;
  ans3Btn.innerHTML = "3. " + q1Option3;
  ans4Btn.innerHTML = "4. " + q1Option4;
  ans1Btn.style.visibility = "visible";
  ans2Btn.style.visibility = "visible";
  ans3Btn.style.visibility = "visible";
  ans4Btn.style.visibility = "visible";
  introtxt.style.visibility = "hidden";
  question = question1
   document.querySelector("#question").style.visibility = "visible";
   document.querySelector("#question").innerHTML = question;
   
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