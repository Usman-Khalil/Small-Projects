let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randidx = Math.floor(Math.random() * 3) ;
    return options[randidx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw. Please Try again";
    msg.style.backgroundColor = "#081631";
}

const showWinner = (userWin ,userChoice ,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScorePara.innerText = userScore;
        
    }
    else{
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText = compScore;
       
    }

}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);

    if(userChoice == compChoice)
        drawGame();
    else
    {
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true ;
        }else if (userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true ;
        }else {
            userWin = compChoice == "rock" ? false : true ;
        }         
        showWinner(userWin ,userChoice ,compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
    })
})

