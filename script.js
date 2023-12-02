//Function for creating audio objects for each button and preloading them
function createAudioObject(soundName) {
    let audio = new Audio();
    audio.src = `sounds/${soundName}.mp3`;
    audio.preload = "auto";
    return audio;
}


//Assigning variables for the game
let timer = 2000;
let buttonQueue = [];
let playerScore = 0;
let highScore = 0;
let correctAnswer = true;


//Assigning the click eventlisteners to elements
let buttons = ["blue", "green", "red", "yellow"];
buttons.forEach((button) => {
    $(`#${button}`).click(() => {
        $("h1").text(`Score: ${playerScore}`);
        if (buttonQueue.length === 0 || button != buttonQueue[0]) {
            createAudioObject("wrong").play();
            playerScore > highScore ? highScore = playerScore : highScore = highScore;
            correctAnswer = false;
            $("h1").text(`Score: ${playerScore} HiScore: ${highScore}`);
            setTimeout(() => {
                playerScore = 0;
                buttonQueue = [];
                timer = 2000;
                $("h1").text(`Press A Key to Start`);
            }, 1000);
        } else {
            createAudioObject(button).play();
            buttonQueue.shift();
            playerScore++;
        }
    });
});


//Creating the game sequence
function randomButton() {
    let list = ["blue", "green", "red", "yellow"];
    return list[Math.floor(Math.random() * list.length)];
}

function gamePlay() {
    if (correctAnswer) {
        setTimeout(() => {
            let button = randomButton();
            buttonQueue.push(button);
            $(`#${button}`).hide(400).show(400);
            createAudioObject(button).play();
            timer -= 5;
            if (timer <= 30) timer = 30;
            gamePlay();
        }, timer);
    }
}


//Starting the game
$(document).keydown( () => { 
    correctAnswer = true;
    gamePlay();
});