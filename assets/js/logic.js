let timeLeft = document.querySelector("#time")
let startScreen = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let questionsScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector(".choices");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let feedback = document.querySelector(".feedback");

let correctAudio = new Audio("./assets/sfx/correct.wav");
let wrongAudio = new Audio("./assets/sfx/incorrect.wav");

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let isCorrect = false;

finalScore.textContent = 0;
let score = parseInt(finalScore.textContent);
console.log(score);

let scoresArray = [];

function init() {
    const storedScoresArray = JSON.parse(localStorage.getItem("scoresArray"));
    if (storedScoresArray !== null) {
        scoresArray = storedScoresArray;
    }
}

//hide an element
function hideSection(element) {
    element.classList.remove("start");
    element.classList.add("hide")
}

//show an element
function openSection(element) {
    element.classList.remove("hide");
    element.classList.add("start")
}

function checkAnswer(answer) {
   if (questions[runningQuestionIndex].correct === answer) {
        console.log("Choice: " + answer);
        console.log("Correct Answer: " + questions[runningQuestionIndex].correct);
        isCorrect = true;
        feedback.textContent = "Correct!";
        console.log(feedback.textContent);
        correctAudio.play();
        score += 5;
        console.log("Score: " + score);
        runningQuestionIndex++
        renderQuestions();
    } else {
        console.log("Choice: " + answer);
        console.log("Correct Answer: " + questions[runningQuestionIndex].correct);
        isCorrect = false;
        feedback.textContent = "Wrong!";
        console.log(feedback.textContent);
        wrongAudio.play();
        timerCount -= 10;
    } 
}

let choiceA = document.createElement("button");
choiceA.addEventListener("click", function(event) {
    checkAnswer("A")
});
choiceA.id = "A";

let choiceB = document.createElement("button");
choiceB.addEventListener("click", function(event) {
    checkAnswer("B")
});
choiceB.id = "B";

let choiceC = document.createElement("button");
choiceC.addEventListener("click", function(event) {
    checkAnswer("C")
});
choiceC.id = "C";

let choiceD = document.createElement("button");
choiceD.addEventListener("click", function(event) {
    checkAnswer("D")
 });
choiceD.id = "D";

choices.appendChild(choiceA);
choices.appendChild(choiceB);
choices.appendChild(choiceC);
choices.appendChild(choiceD);

function renderQuestions() {
    if (runningQuestionIndex > lastQuestionIndex) {
        return;
    } else {
    let currentQuestion = questions[runningQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choiceA;
    choiceB.textContent = currentQuestion.choiceB;
    choiceC.textContent = currentQuestion.choiceC;
    choiceD.textContent = currentQuestion.choiceD;
    }
}

function renderFeedback() {
    for (let runningQuestionIndex = 0; runningQuestionIndex <= lastQuestionIndex; runningQuestionIndex++) {
        openSection(feedback);
    }
}

// function answerIsCorrect() {
//     feedback.textContent = "Correct!";
//     }

// function answerIsWrong() {
//     feedback.textContent = "Wrong!";
// }

// if (isCorrect) {
//     answerIsCorrect();
// }

function renderScore() {
    finalScore.textContent = score;
    timeLeft.textContent = 0;
    console.log("Final Score: " + score);
}

function startTimer() { 
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount >= 0) {
        }
        if (timerCount <= 0 || runningQuestionIndex > lastQuestionIndex) {
            clearInterval(timer);
            hideSection(questionsScreen);
            hideSection(feedback);
            openSection(endScreen);
            renderScore();
        }
    }, 1000); 
}

function startQuiz () {
    timerCount = 60; 
    hideSection(startScreen);
    renderQuestions();
    openSection(questionsScreen);
    openSection(feedback);
    startTimer();
}

//Event listener on Start Quiz button to start the quiz
startButton.addEventListener("click", startQuiz);

 function storeScoresArray () {
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray))
 }

submitButton.addEventListener("click", function(event) {
    if (initials.value == "") {
        return;
    } 
    let scoreSubmission = [initials.value, score];
    console.log(scoreSubmission);
    scoresArray.push(scoreSubmission);
    storeScoresArray();
});

init();



