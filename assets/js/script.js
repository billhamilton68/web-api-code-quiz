const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-quiz-btn');
const ans1Btn = document.querySelector('#ans1');
const ans2Btn = document.querySelector('#ans2');
const ans3Btn = document.querySelector('#ans3');
const ans4Btn = document.querySelector('#ans4');
const introtxt = document.querySelector("#intro");
startBtn.addEventListener('click', startTimer);

var questions = ["What is Tucker's favorie lunch?",
"What is the keyword used for Variable?",
"What does full name of HTML?","Which charecter has to be entered at the end of java script statements?"];

var answers = ["1. Taco","2. Cheeseburger and fries","3. Mac and Cheese","4. Pizza","1. Var","2. var","3. virtual","4. Vincent",
"1. Having Time and Managing Life","2. Hyper Text Markup Language","3. Half Time Minnesota Loses","4. Happy Terrific Markup Language",
"1. #","2. $","3. {}","4. ;",];

var introText = "Try to answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"

var question = "";

let startButton = document.querySelector('button');

startButton.onclick = function() {
  //startButton.style.backgroundColor = "magenta";
  startButton.style.visibility = "hidden";

  introtxt.style.visibility = "hidden";
  document.querySelector("#question").innerHTML = questions[0];
  askQuestion();
   document.querySelector("#question").style.visibility = "visible";
   
   
};

function askQuestion (){

  return questions[0];

};

function startTimer() {
  let timeLeft = 60;
  const timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      window.location.href = window.location.href;
    } else {
      timeLeft--;
      timer.textContent = `Timer: ${timeLeft}`;
    }
  }, 1000);
 
}