import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef hoogte in: ")); 
let outline = parseFloat(await userInput.question("Outline? true of false? "));  

for (let i = 1; i <= hoogte; i++) {
    let rij= '';

    
    for (let j = 1; j <= (hoogte - i); j++) {
        rij += ' ';
    }

    if (outline && i > 1 && i < hoogte) {
        
        rij += '*';  
        for (let j = 1; j < (2 * i - 2); j++) {
            line += ' ';  
        }
        rij += '*';  
    } 
    
    else 
    {    
        for (let j = 1; j <= (2 * i - 1); j++) 
        {
            rij += '*';
        }
    }
}