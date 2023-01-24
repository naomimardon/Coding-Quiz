let highscoresList = document.querySelector("#highscores");
let clearButton = document.querySelector("#clear");

const storedScoresArray = JSON.parse(localStorage.getItem("scoresArray"));

storedScoresArray.sort(function(a,b) {
    return b[1]-a[1]
    });
    
    console.log("storedScoresArray: " + storedScoresArray);

let scoresToRender = storedScoresArray.slice(0,3);
    console.log("scoresToRender: " + scoresToRender);


function renderHighscore() {
    highscoresList.innerHTML = "";
    for (let i = 0; i < scoresToRender.length; i++) {
        const li = document.createElement("li");
        li.textContent = scoresToRender[i][0] + " - " + scoresToRender[i][1];
        console.log(li.textContent);
        highscoresList.appendChild(li);
    }
}

renderHighscore();

clearButton.addEventListener("click", function(event) {
    localStorage.clear("scoresArray");
    highscoresList.innerHTML = "";
})





