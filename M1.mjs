import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer = 4;

for(let i = 1; i <= nummer; i++)
{
    for(let j = 1; j <= i; j++)
    {
     process.stdout.write("" + i);
    }

    console.log(" ");
}
