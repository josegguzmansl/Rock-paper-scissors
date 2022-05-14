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
        console.log("Tie Game!")
    }
    else if(cs === "Rock"){
        if (ps === "Scissors"){
            console.log("Rock beats Scissors, You loose")
        }
        else{
            console.log("Paper beats Rock, You Win")
        }
    }
    else if(cs === "Paper"){
        if (ps === "Rock"){
            console.log("Paper beats Rock, You Loose")
        }
        else{
            console.log("Scissors beats Paper, You Win")
        }
    }
    else if(cs === "Scissors"){
        if (ps === "Paper"){
            console.log("Scissors beats Paper, You Loose")
        }
        else{
            console.log("Rock beats Scissors, You Win")
        }
    }
    else{
        console.log("Are you dumb? you must pick Rock, Paper or Scissors to play!")
    }
}


/* 
Create list of option that contains rock, paper and scissors
Create Function for the Computer selection
Create Function for a game of best of 1
Create FUnction for a game of best of 5
*/