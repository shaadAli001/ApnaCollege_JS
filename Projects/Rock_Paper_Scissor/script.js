let userScore = 0;
let compScore = 0;

let user = document.querySelector("#user_score");
let comp = document.querySelector("#comp_score");

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comp.innerText = compScore;
    msg.innerText = `You Lost! computer ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let gencompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

let playGame = (userChoice) => {
  let compChoice = gencompChoice();
  if (userChoice === compChoice) {
    msg.innerText = "Draw! Try Again";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// let user = 0;
// let comp = 0;

// let displayUserScore = document.querySelector("#user_score");
// let displayCompScore = document.querySelector("#comp_score");
// let choices = document.querySelectorAll(".choice");
// let msg = document.querySelector("#msg");

// const genCompChoice = () => {
//   let choice = ["rock", "paper", "scissor"];
//   let index = Math.floor(Math.random() * 3);
//   return choice[index];
// };

// const showResult = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     user++;
//     displayUserScore.innerText = user;
//     msg.innerText = `You Won! Your ${userChoice} beat ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     comp++;
//     displayCompScore.innerText = comp;
//     msg.innerText = `You Lost! Computer ${userChoice} beat ${compChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };


// const Draw = () => {
//   console.log("Draw");
//   msg.style.backgroundColor = "#081b31";
// };

// const playGame = (userChoice, compChoice) => {
//   if (userChoice === compChoice) {
//     Draw();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissor" ? false : true;
//     } else {
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showResult(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     let userChoice = choice.getAttribute("id");
//     let compChoice = genCompChoice();
//     console.log(userChoice, compChoice);
//     playGame(userChoice, compChoice);
//   });
// });
