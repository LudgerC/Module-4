import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let vraag;
let choices;
let computerChoice;
let cw = 0;
let gw = 0;
let draw = 0;

do
{
    vraag = await userInput.question("Kies: rock, paper of scissors: ")
    choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice)


    if(vraag == "scissors" && computerChoice == "rock")
    {
        cw++
        console.log("Computer win " + cw)
    }

    else if(vraag == "rock" && computerChoice == "paper")
    {
        cw++
        console.log("Computer win " + cw)        

    }

    else if(vraag == "paper" && computerChoice == "scissors")
    {
        cw++
        console.log("Computer win " + cw)        

    }   
        
    else if(computerChoice == "scissors" && vraag == "rock")
    {
        gw++
        console.log("Gebruiker win " + gw)
    }

    else if(computerChoice == "rock" && vraag == "paper")
    {
        gw++
        console.log("Gebruiker win " + gw)      

    }

    else if(computerChoice == "paper" && vraag == "scissors")
    {
        gw++
        console.log("Gebruiker win " + gw)     

    } 
    else if( vraag == computerChoice)
    {
        draw++
        console.log("Jullie hebben gelijkspel " + draw)
    }
    else
    {
        console.log("Ongeldige keuze!")
    }
    
       
}while(gw < 3 && cw < 3);

console.log("De computer heeft " + cw + " wins en de gebruiker " + gw + " wins. Jullie hebben " + draw + " gelijkspel.");