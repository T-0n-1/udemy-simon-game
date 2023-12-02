//Creating audio objects for each instrument and preloading them
function createAudioObject(soundName) {
    let audio = new Audio();
    audio.src = `sounds/${soundName}.mp3`;
    audio.preload = "auto";
    return audio;
}

/*let blue = createAudioObject("blue");
let green = createAudioObject("green");
let red = createAudioObject("red");
let yellow = createAudioObject("yellow");
let wrong = createAudioObject("wrong");*/


//Assigning variables for the game
let timer = 200;
let buttonQueue = [];
let playerScore = 0;
let highScore = 0;
let correctAnswer = true;


//Creating the game sequence
function randomButton() {
    let list = ["blue", "green", "red", "yellow"];
    return list[Math.floor(Math.random() * list.length)];
}


function gamePlay() {
    while (correctAnswer) {
        
    }
}


//Starting the game
$(document).keydown( () => gamePlay() );
  

//Assigning the click eventlisteners to elements
let buttons = ["blue", "green", "red", "yellow"];
buttons.forEach((button) => {
    $(`#${button}`).click(() => {
        createAudioObject(button).play();
    })
});