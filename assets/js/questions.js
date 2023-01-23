let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correct: "C"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choiceA: "1. quotes",
        choiceB: "2. curly braces",
        choiceC: "3. parentheses",
        choiceD: "4. square brackets",
        correct: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choiceA: "1. numbers and strings",
        choiceB: "2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        correct: "D"
    },
    {
        question: "When being assigned to variables, string values must be enclosed within:",
        choiceA: "1. commas",
        choiceB: "2. quotes",
        choiceC: "3. curly braces",
        choiceD: "4. parentheses",
        correct: "B"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console.log",
        correct: "D"
    },
]

let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector(".choices");

function checkAnswer() {
    return;
}

let choiceA = document.createElement("button");
choiceA.addEventListener("click", checkAnswer("A"));
choiceA.id = "A";

let choiceB = document.createElement("button");
choiceB.addEventListener("click", checkAnswer("B"));
choiceB.id = "B";

let choiceC = document.createElement("button");
choiceC.addEventListener("click", checkAnswer("C"));
choiceC.id = "C";

let choiceD = document.createElement("button");
choiceD.addEventListener("click", checkAnswer("D"));
choiceD.id = "D";

choices.appendChild(choiceA);
choices.appendChild(choiceB);
choices.appendChild(choiceC);
choices.appendChild(choiceD);

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestions() {
    let currentQuestion = questions[runningQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choiceA;
    choiceB.textContent = currentQuestion.choiceB;
    choiceC.textContent = currentQuestion.choiceC;
    choiceD.textContent = currentQuestion.choiceD;
}



