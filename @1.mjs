import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte;
let breedte;

do {
    hoogte = parseFloat(await userInput.question("Geef de hoogte in: "));
    breedte = parseFloat(await userInput.question("Geef de breedte in: "));
}while (hoogte <= 0 || breedte <= 0); 

for (let i = 0; i < hoogte; i++) {
    for (let j = 1; j <= breedte; j++) {
        if (i === 0  || i === hoogte - 1) {
            process.stdout.write("*"); 
        } else {
            if (j === 1 || j === breedte) {
                process.stdout.write("*");
            }else {
                process.stdout.write(" "); 
            }
        }
    }
    console.log(); 
}