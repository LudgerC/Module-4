import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef hoogte in: ")); 
let outline = await userInput.question("Outline? true of false? ") === "true";  

for (let i = 1; i <= hoogte; i++) {
    let rij = '';


    for (let j = 1; j <= (hoogte - i); j++) {
        rij += ' ';
    }

    if (outline && i > 1 && i < hoogte) {
        rij += '*';  
        rij += ' '.repeat(2 * i - 3);  
        rij += '*';  
    } else {
        rij += '*'.repeat(2 * i - 1); 
    }

    console.log(rij); 
}

userInput.close(); 