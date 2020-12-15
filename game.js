// Variables declared in reference to ids and classes in html document
const choices = Array.from(document.querySelectorAll(".choice-text"));
const question = document.getElementById("display-question");
var scoreText = document.querySelector(".display-score-text");
var remainingQuestions = document.querySelector(".questions-remaining")
var startButton = document.querySelector("#start-button")

// Local variables declared to be used in functions below
var currentQuestion = {};
var score = 0;
var acceptAnswer = false;
var questionCounter = 0;
var availableQuestions = [];

startButton.addEventListener("click", startTimer);

// Questions object created for quiz
let questions = [
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

// constants declared and assigned for parameters of quiz
const CORRECT_SCORE = 10;
const MAX_QUESTIONS = 4;

// startGame sets score to zero and starts with question 1 out of 4 
function startGame() {
    questionCounter = 0;
    score = 0;
    // spread syntax used below to list questions within the variable availableQuestions
    availableQuestions = [...questions];
    console.log(availableQuestions);
    // calls a new function getNewQuestion to run
    getNewQuestion();
};

// getNewQuestion increments the questionCounter as the user moves through the quiz
    getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // saves score to local storage and navigates to end page
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./endpage.html");
    } 
    questionCounter = 0;
    questionCounter++;
    // displays progress while taking quiz
    remainingQuestions.innerText = questionCounter + "/" + MAX_QUESTIONS;
    console.log(remainingQuestions)
    /* a new constant is declared to randomly select questions from our object questions and display them via the 
     variable currentQuestion */
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // displays choices as well as references the datasets in HTML
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    // as the user moves through the questions, the same one will not be displayed again
    availableQuestions.splice(questionIndex, 1);

    acceptAnswer = true;
};

// click events for the user choosing an answer, if they are correct their score will increment via keepScore()
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptAnswer) return

        acceptAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        if (selectedAnswer == currentQuestion.answer) {
            keepScore(CORRECT_SCORE);
        }
        
        getNewQuestion();
    });
});

startGame();
getNewQuestion();

// startTimer deals with our countdown display and sets the timer to countdown from 60 seconds to 0
function startTimer() {
  document.getElementById("question-box").style.display = "block";

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

// keepScore increments our score display
keepScore = num => {
    score += num;
    scoreText.innerText = score;
}