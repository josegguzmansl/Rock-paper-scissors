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
            return "Rock beats Scissors, You loose"
        }
        else{
            return "Paper beats Rock, You Win"
        }
    }
    else if(cs === "Paper"){
        if (ps === "Rock"){
            return "Paper beats Rock, You Loose"
        }
        else{
            return "Scissors beats Paper, You Win"
        }
    }
    else if(cs === "Scissors"){
        if (ps === "Paper"){
            return "Scissors beats Paper, You Loose"
        }
        else{
            return "Rock beats Scissors, You Win"
        }
    }
    else{
        return "Are you dumb? you must pick Rock, Paper or Scissors to play!"
    }
}


/* 
Create list of option that contains rock, paper and scissors
Create Function for the Computer selection
Create Function for a game of best of 1
Create FUnction for a game of best of 5
*/