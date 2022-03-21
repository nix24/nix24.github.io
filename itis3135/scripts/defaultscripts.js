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
$(document).ready(function () {
   
    //--button minigames!--
    /**
     * there are 5 buttons in total. Each will do a different task.
     * button 1: we will program a rock paper scissors game with jquery
     */
    //---button 1---
    //rock paper scissors game
    $("#button1").click(function () {
        //remove the js-hide class from the rock paper scissors div
        $(".rock-paper-scissors").removeClass("js-hide");
        $(".reaction-game").addClass("js-hide");
        $(".number-guessing").addClass("js-hide");
        $(".add-instrument").addClass("js-hide");
        $(".view-instruments").addClass("js-hide");
        let userScore = 0;
        let computerScore = 0;
        let userChoice = "";
        let computerChoice = 0;
        $("#rps-result").text("");
        //rock paper scissors game using jquery
        //this is a best of 3 game. User makes their choice by selecting the #rock, #paper, or #scissors button.
        //when user makes a choice, the computer randomly chooses rock, paper, or scissors.
        //if the user wins, they get a point. if the computer wins, they get a point. this will loop until either user or computer gets 3 points.
        //after the game is over. congratulate the user or computer depending on who won. keep this up for 3 seconds and hide the div.
        //if the user clicks cancel, hide the div.
        function cpuChoice() {
            computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice === 0) {
                computerChoice = "rock";
            } else if (computerChoice === 1) {
                computerChoice = "paper";
            } else if (computerChoice === 2) {
                computerChoice = "scissors";
            }
        }
        function rpsWin() {
            //Whoever reaches 3 points first gets a congratulatory message.
            if (userScore === 3) {
                $("#rps-result").html("You win! Great Job!");
                setTimeout(function () {
                    $(".rock-paper-scissors").addClass("js-hide");
                }, 3000);
            }
            if (computerScore === 3) {
                //show the computer score
                $("#rps-result").html("You lose! You suc-I ean, Better luck next time!");
                setTimeout(function () {
                    $(".rock-paper-scissors").addClass("js-hide");
                }, 3000);
            }
        }
        $("#rock").click(function () {
            console.log(userScore);
            userChoice = "rock";
            cpuChoice();
            if (userChoice === "rock" && computerChoice === "rock") {
                $("#rps-result").text(`You both chose ${userChoice}. It's a tie!`);

            } if (userChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You lose! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            } if (userChoice === "rock" && computerChoice === "scissors") {
                userScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You win! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            }
        });
        $("#paper").click(function () {
            userChoice = "paper";
            cpuChoice();
            if (userChoice === "paper" && computerChoice === "paper") {
                $("#rps-result").text(`You both chose ${userChoice}. It's a tie!`);
            } if (userChoice === "paper" && computerChoice === "rock") {
                userScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You win! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            } if (userChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You lose! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            }
        });
        $("#scissors").click(function () {
            userChoice = "scissors";
            cpuChoice();
            if (userChoice === "scissors" && computerChoice === "scissors") {
                $("#rps-result").text(`You both chose ${userChoice}. It's a tie!`);
            } if (userChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You lose! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            } if (userChoice === "scissors" && computerChoice === "paper") {
                userScore++;
                $("#rps-result").text(`You chose ${userChoice} and the computer chose ${computerChoice}. You win! the score is ${userScore} to ${computerScore}`);
                rpsWin();
            }
        });
    });
    //---button 2--- reaction-game
    $("#button2").click(function () {
        //remove the js-hide class from the reaction game div
        $(".reaction-game").removeClass("js-hide");
        $(".rock-paper-scissors").addClass("js-hide");
        $(".number-guessing").addClass("js-hide");
        $(".add-instrument").addClass("js-hide");
        $(".view-instruments").addClass("js-hide");
        //reaction will show a button that starts red.
        //after a random amount of time, the button will turn green. user mus click it when it turns green
        //if the user clicks the button before it turns green, they lose.
        //if the user clicks the button after it turns green, they will be told their reaction time.
        let clickedTime = 0; //time it takes user to click button
        let timer = 0; //overall time
        let stopTimer = false
        function changeColor() {
            setInterval(function () {
                //timer will increase every second
                timer++;
                $(".rg-text").text(`Time: ${timer}`);
            }, 1000);

            setTimeout(function () {
                //change the color of the button to green
                $(".reaction-button").css("background-color", "green");
                //when the button turns green, we will start the timer.
                //if .reaction-button background color is green
                if ($(".reaction-button").css("background-color") === "rgb(0, 128, 0)") {
                    //when the button turns green, we will start the timer.
                    //start clickedTime
                    setInterval(function () {
                        //timer will increase every second
                        clickedTime++;
                    }, 1);
                    //if the user clicks the button before it turns green, they lose.
                    $(".reaction-button").click(function () {
                        //stop the timer for timer 
                        stopTimer = true;
                        $(".rg-result").text(`Your reaction time was ${clickedTime} milliseconds.`);
                        $(".reaction-button").css("background-color", "red");
                        //after that is displayed turn the button back to red and close the game.
                        setTimeout(function () {
                            $(".reaction-game").addClass("js-hide");
                        }, 3000);
                    });
                }
            }, Math.floor(Math.random() * 5000) + 1);
        }
        //when the user clicks the button, we will start the timer.
        changeColor();
    });
    //--button3 guessing game
    $("#button3").click(function () {
        //change text to ask for a number between 1 and 50
        $(".number-guessing").removeClass("js-hide");
        $(".rock-paper-scissors").addClass("js-hide");
        $(".reaction-game").addClass("js-hide");
        $(".add-instrument").addClass("js-hide");
        $(".view-instruments").addClass("js-hide");
        //if user guesses too high say too high, if too low say too low, if correct say correct!
        //if user guesses wrong after 3 tries say you lose.
        let correct = Math.floor(Math.random() * 50) + 1;
        let tries = 0;
        let triesLeft = 7;
        function guessGame() {

            //if the user clicks the button, we will start the timer.
            let guess = $("#guess-input").val();
            tries++;
            if (guess == correct) {
                $(".guess-text").text(`You win! Wow aren't you lucky!`);
                setTimeout(function () {
                    $(".number-guessing").addClass("js-hide");
                    $(".guess-text").text(`Guess a number between 1-50`);
                    guess = 0;
                    correct = Math.floor(Math.random() * 50) + 1;
                    tries = 0;
                }, 3000);
            }
            if (guess > correct) {
                $(".guess-text").text(`Too high! You have ${triesLeft - tries} tries left.`);
            } else if (guess < correct) {
                $(".guess-text").text(`Too low! You have ${triesLeft - tries} tries left.`);
            } 
             else if (tries === 7) {
                $(".guess-text").text(`You lose! Sorry pal, you're just not lucky. The correct number was ${correct}`);
                setTimeout(function () {
                    $(".number-guessing").addClass("js-hide");
                    $(".guess-text").text(`Guess a number between 1-50`);
                    guess = 0;
                    correct = Math.floor(Math.random() * 50) + 1;
                    tries = 0;
                }, 3000);
            }
            
            
        }
        $("#guess-button").click(guessGame);
    });

    //---button 4--- add instrument
    /**
     *  <div class="add-intrument js-hide">
      <h2 class="js-text" id="add-text">Add an intrument</h2>
      <input type="text" class="js-input" id="add-input" placeholder="Enter intrument" />
      <button id="add-button">Add</button>
      <button id="add-cancel-button">Cancel</button>
    </div>
     */
    let instruments = [];
    $("#button4").click(function () {
        //remove the js-hide class from the add intrument div
        $(".add-instrument").removeClass("js-hide");
        $(".rock-paper-scissors").addClass("js-hide");
        $(".reaction-game").addClass("js-hide");
        $(".number-guessing").addClass("js-hide");
        $(".view-instruments").addClass("js-hide");
        //create an array to add intruments to
        
        //instruments typed in input added to intruments array
        $("#add-button").click(function () {
            let instrument = $("#add-input").val();
            instruments.push(instrument);
            $("#add-input").val("");
            //say instrument name was added
            $("#add-text").text(`${instrument} was added!`);
        });
        //if user clicks cancel, hide the add intrument div
        $("#add-cancel-button").click(function () {
            $(".add-instrument").addClass("js-hide");
        });
    });
    //---button 5--- view intruments
    /**
     * <div class="view-instruments js-hide">
      <h2 class="js-text" id="view-text">View intruments</h2>
      <button id="view-button">View</button>
      <button id="view-cancel-button">Cancel</button>
      <!--table that displays instrument-->
      <table class="js-table">
        <thead>
          <tr>
            <th>Instrument</th>
          </tr>
        </thead>
        <tbody>
          <tr id="instrument row">
            <td id="instrument-name"></td>
          </tr>
        </tbody>
      </table>
    </div>
     */
    $("#button5").click(function () {
        //remove the js-hide class from the view intruments div
        $(".view-instruments").removeClass("js-hide");
        $(".rock-paper-scissors").addClass("js-hide");
        $(".reaction-game").addClass("js-hide");
        $(".number-guessing").addClass("js-hide");
        $(".add-instrument").addClass("js-hide");
        //take the intruments array and display it in the table
        $("#view-button").click(function () {
            //mdisplay intruments in table
            //add a space between each array item
            let intrumentsString = instruments.join(",\n");
            //display intruments in table
            $("#instrument-name").text(intrumentsString);

        });
        //if user clicks cancel, hide the view intruments div
        $("#view-cancel-button").click(function () {
            $(".view-instruments").addClass("js-hide");
        });
    });
});