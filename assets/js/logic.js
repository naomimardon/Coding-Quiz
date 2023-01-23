let timeLeft = document.querySelector("#time")
let startScreen = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let feedback = document.querySelector("feedback");


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

function startTimer() { //add in condition to stop timer and function to call final score
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000); 
}

function startQuiz () {
    timerCount = 75; 
    hideSection(startScreen);
    openSection(questionsScreen);
    renderQuestions();
    startTimer()
}

//Event listener on Start Quiz button to start the quiz
startButton.addEventListener("click", startQuiz);