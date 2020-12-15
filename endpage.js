var username = document.getElementById("username");
var saveScoreBtn = document.querySelector("#save-score-btn");
const mostRecentScore = localStorage.getItem("mostRecentScore")
const finalScore = document.getElementById("log-score");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostRecentScore;

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
};