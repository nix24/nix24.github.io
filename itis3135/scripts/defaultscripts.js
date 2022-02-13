console.log("Javascript is working!");

//filescript.html, displaying the current date to the user when they load the page.
let currentDate = document.getElementById("currentDate");
//we want current date to say "Today is: HH:MM:Am/Pm" on day dayOfMonth Month, Year
let date = new Date();

let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = dayOfWeek[date.getDay()];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthNames[date.getMonth()];

time = function () {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = "AM";
    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes + " " + ampm;
}

currentDate.innerHTML = `Today is: ${time()} on ${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
//---------------form script------------------
// get the user's name and how they are feeling
let user = document.getElementById("name");
let feeling = document.getElementById("feeling");
let submit = document.getElementById("submit");
let display = document.getElementById("display");

//get value and store
let userName = "";
let userFeeling = "";

//submit button
submit.addEventListener("click", function () {
    userName = user.value;
    userFeeling = feeling.value;
    display.innerHTML = `The Jazzamoon Cats are pleased to welcome you, ${userName}! WOw! You sure are ${userFeeling}!`;
});
//---------------------Button minigames---------------------
//there are five buttons. Each button will play a small minigame.
//button 1: rock paper scissors
let buttonDisplay = document.getElementById("buttonDisplay");
let button1 = document.getElementById("button1");
let rpsChoice = document.getElementById("rps");
button1.addEventListener("click", function () {
    buttonDisplay.innerHTML = "";
    let userChoice = prompt("Rock, Paper, or Scissors?");
    let rps = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoiceString = rps[computerChoice - 1];

    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Rock, Paper, or Scissors?");
    }

    //use rpsChoice to show what each person chose
    //put all tie scenarios in one if statement
    if (userChoice == computerChoiceString) {
        buttonDisplay.innerHTML = `You both chose ${userChoice}. It's a tie!`;
    }
    if (userChoice == "rock" && computerChoiceString == "Scissors") {
        buttonDisplay.innerHTML = `You win! ${userChoice} beats ${computerChoiceString}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }
    else if (userChoice == "rock" && computerChoiceString == "Paper") {
        buttonDisplay.innerHTML = `You lose! ${computerChoiceString} beats ${userChoice}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }
    else if (userChoice == "paper" && computerChoiceString == "Rock") {
        buttonDisplay.innerHTML = `You win! ${userChoice} beats ${computerChoiceString}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }
    else if (userChoice == "paper" && computerChoiceString == "Scissors") {
        buttonDisplay.innerHTML = `You lose! ${computerChoiceString} beats ${userChoice}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }
    else if (userChoice == "scissors" && computerChoiceString == "Paper") {
        buttonDisplay.innerHTML = `You win! ${userChoice} beats ${computerChoiceString}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }
    else if (userChoice == "scissors" && computerChoiceString == "Rock") {
        buttonDisplay.innerHTML = `You lose! ${computerChoiceString} beats ${userChoice}`;
        rpsChoice.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoiceString}`;
    }

});

//button 2: reaction game ---------------------------------------
let button2 = document.getElementById("button2");
let userScore = 0;
//goal: you have 15 seconds to click the green button. if you hit it, you gain a point. hitting the red means you lose the game.
//every time you click the green button, the color switches randomly. there are 3 buttons.
button2.addEventListener("click", function () {
    let reaction1 = document.getElementById("reaction1");
    let reaction2 = document.getElementById("reaction2");
    let reaction3 = document.getElementById("reaction3");
    let buttonDisplay = document.getElementById("buttonDisplay");

    buttonDisplay.innerHTML = "";

    let timer = document.getElementById("timer");
    reaction1.style.display = "block";
    reaction2.style.display = "block";
    reaction3.style.display = "block";

    let timeLeft = 15;
    let timerInterval = setInterval(function () {
        timeLeft--;
        timer.innerHTML = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            buttonDisplay.innerHTML = `Time's up! Your final score was ${userScore} points. Good hussle!`;
            reaction1.style.display = "none";
            reaction2.style.display = "none";
            reaction3.style.display = "none";
        }
    }, 1000);

    let randomColor = function () {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber == 1) {
            reaction1.style.backgroundColor = "green";
            reaction2.style.backgroundColor = "red";
            reaction3.style.backgroundColor = "red";
        }
        else if (randomNumber == 2) {
            reaction1.style.backgroundColor = "red";
            reaction2.style.backgroundColor = "green";
            reaction3.style.backgroundColor = "red";
        }
        else {
            reaction1.style.backgroundColor = "red";
            reaction2.style.backgroundColor = "red";
            reaction3.style.backgroundColor = "green";
        }
    }
    randomColor();
    //when you click the green button, you gain a point. when you click the red button, you lose a point.
    reaction1.addEventListener("click", function () {
        if (reaction1.style.backgroundColor == "green") {
            userScore++;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        else {
            userScore--;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        randomColor();
    });
    reaction2.addEventListener("click", function () {
        if (reaction2.style.backgroundColor == "green") {
            userScore++;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        else {
            userScore--;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        randomColor();
    });
    reaction3.addEventListener("click", function () {
        if (reaction3.style.backgroundColor == "green") {
            userScore++;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        else {
            userScore--;
            buttonDisplay.innerHTML = `You have ${userScore} points.`;
        }
        randomColor();
    });
});
//button 3: guess the number game ---------------------------------------
let button3 = document.getElementById("button3");
let userGuess = 0;

//goal: guess from 1-50. getting closer to the number will have it say warmer. getting farther will say colder.
//keep going until you get the number.
let randomNumber = Math.floor(Math.random() * 50) + 1;
button3.addEventListener("click", function () {
    //if i press cancel, end the alert
    let guessed = false;
    while (guessed == false) {
        userGuess = prompt("Guess a number between 1 and 50.");
        if (userGuess == randomNumber) {
            guessed = true;
            alert(`You guessed the number! It was ${randomNumber}!`);
        }
        else if (userGuess > randomNumber) {
            alert("Too high!");
        }
        else if (userGuess < randomNumber) {
            alert("Too low!");
        }
        //pressing cancel ends the game
        else if (userGuess == null) {
            alert("You quit the game.");
            guessed = true;
        }
    }
});
//button4: music api ---------------------------------------
let button4 = document.getElementById("button4");
buttonDisplay = document.getElementById("songDisplay");

