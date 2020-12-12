var selectedAnswerCapLetter = Array.from(document.querySelectorAll("#choice-option"));
var selectedAnswerText = Array.from(document.querySelectorAll(".choice-text"));
var scoreText = document.querySelector("#display-score");
const question = document.getElementById("display-question");
var startButton = document.querySelector("#start-button")

var currentQuestion = {};
var score = 0;
var acceptAnswer = true;
var questionCounter = 0;
var availableQuestions = [];

startButton.addEventListener("click", startTimer);

var questions = [
    {
        question: "What is a string?",
        choice1: "yarn",
        choice2: "a number",
        choice3: "cheese",
        choice4: "a line of text",
        answer: 4,
    },

    {
        question: "What does DOM stand for?",
        choice1: "Dance On Mars",
        choice2: "Document Object Model",
        choice3: "Disc Open Module",
        choice4: "Destroy Oversize Motorboats",
        answer: 2,
    },

    {
        question: "What is an array in JavaScript?",
        choice1: "a way to generate fancy text",
        choice2: "a function to calculate random numbers",
        choice3: "a list of items stored within a variable",
        choice4: "stops a countdown at zero",
        answer: 3,
    },

    {
        question: "How does Javascript access HTML content?",
        choice1: "magic",
        choice2: "through the DOM",
        choice3: "sends a text",
        choice4: "without even trying",
        answer: 2,
    },
]

const CORRECT_SCORE = 10;
const MAX_QUESTIONS = 4;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
};

startGame();
getNewQuestion();




// function startTimer() {
//     var seconds = document.getElementById("countdown").textContent;
//     var countdown = setInterval(function() {
//         seconds--;
//         document.getElementById("countdown").textContent = seconds;
//         if (seconds <= 0) clearInterval(countdown);
//     }, 1000);
// }

function startTimer() {
    var counter = 60;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("countdown");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }