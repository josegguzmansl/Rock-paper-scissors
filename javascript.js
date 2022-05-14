function capitalize(string){
    result = string.toLowerCase()
    firstChar = result.slice(0,1)
    cap = firstChar.toUpperCase()
    result = result.replace(result[0], cap)
    return result
}

let selection = ["Rock", "Paper", "Scissors"]

function computerSelection(){
    selec = selection[Math.floor(Math.random()*selection.length)];
    return selec
}

function playRound(cs, ps){
    ps = capitalize(ps)
    if (cs === ps){
        return "Tie Game!"
    }
    else if(cs === "Rock"){
        if (ps === "Scissors"){
            console.log("Rock beats Scissors, You loose")
            return "pcwin"
        }
        else{
            console.log("Paper beats Rock, You Win")
            return "playerwin"
        }
    }
    else if(cs === "Paper"){
        if (ps === "Rock"){
            console.log("Paper beats Rock, You Loose")
            return "pcwin"
        }
        else{
            console.log("Scissors beats Paper, You Win")
            return "playerwin"
        }
    }
    else if(cs === "Scissors"){
        if (ps === "Paper"){
            console.log("Scissors beats Paper, You Loose")
            return "pcwin"
        }
        else{
            console.log("Rock beats Scissors, You Win")
            return "playerwin"
        }
    }
    else{
        return "Are you dumb? you must pick Rock, Paper or Scissors to play!"
    }
}

function PlayGame(){
    console.log("Best of 5... GO")
    let ps = 0, cs = 0
    while(ps < 5 && cs < 5){
        compuSele = computerSelection()
        playerSele = prompt("Choose Rock, Paper or Scissors")
        result = playRound(compuSele, playerSele)
        if (result === "playerwin"){
            ps++
        }
        else{
            cs++
        }
        console.log("Score: " +"\nPlayer: " + ps + "\nComputer: " + cs)
    }
    console.log("Over! final score is: ")
    console.log("Player Score: " + ps)
    console.log("Computer Score: " + cs)
    if (ps == 5) {
        console.log("You won! congratulations")
    }
    else{
        console.log("Computer Wins!, try again!")
    }
}
/* 
Create list of option that contains rock, paper and scissors
Create Function for the Computer selection
Create Function for a game of best of 1
Create FUnction for a game of best of 5
*/