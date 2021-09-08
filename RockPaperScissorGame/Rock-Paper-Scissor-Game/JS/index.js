

const Options = {
          "rock":"/Rock-Paper-Scissor-Game/assets/Rock.png",
          "scissor":"/Rock-Paper-Scissor-Game/assets/Scissors.png",
          "paper":"/Rock-Paper-Scissor-Game/assets/paper.png"
}

let SCORE = 0;

function pickUserHand(hand){
          console.log(hand);
          //Hide the current page(meaning hide the current div and show the result div)
          let picked = document.querySelector(".main");
          picked.style.display  = "none";

          //Show the result page with the hand you picked, you can not use a href, because its the same page.
          let contest = document.querySelector(".contest");
          contest.style.display  = "flex";

          //select the image that was choosed
          document.getElementById('userPickImage').src = Options[hand];

         let Cphand = pickComputer();
        result(hand, Cphand);
}

function pickComputer(){
          let hand = ["rock", "paper", "scissor"];
          let cpHand = hand[Math.floor(Math.random() * 3)];

          //set the computer picked image
          document.getElementById('computerPickImage').src = Options[cpHand];

          return cpHand;
}


const result = (userHand, cpHand) => {
          if (userHand == "paper" && cpHand == "scissors") {
            setDecision("YOU LOSE!");
          }
          if (userHand == "paper" && cpHand == "rock") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
          }
          if (userHand == "paper" && cpHand == "paper") {
            setDecision("It's a tie!");
          }
          if (userHand == "rock" && cpHand == "scissors") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
          }
          if (userHand == "rock" && cpHand == "paper") {
            setDecision("YOU LOSE!");
          }
          if (userHand == "rock" && cpHand == "rock") {
            setDecision("It's a tie!");
          }
          if (userHand == "scissors" && cpHand == "scissors") {
            setDecision("It's a tie!");
          }
          if (userHand == "scissors" && cpHand == "rock") {
            setDecision("YOU LOSE!");
          }
          if (userHand == "scissors" && cpHand == "paper") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
          }
        };
        
        const restartGame = () => {
          let contest = document.querySelector(".main");
          contest.style.display = "flex";
        
          let main = document.querySelector(".contest");
          main.style.display = "none";
        }
        
        const setDecision = (decision) => {
          document.querySelector(".decision h1").innerText = decision;
        }
        
        const setScore = (newScore) => {
          SCORE = newScore;
          document.querySelector(".score h1").innerText = SCORE;
        }
