import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let zijde1;
let zijde2;

do
{
    
    zijde1 = parseFloat(await userInput.question("Geef de hoogte in: "));
    zijde2 = parseFloat(await userInput.question("Geef de breedte in: "));
    
    if(zijde1 == zijde2)
    {
        console.log("Dit is geen rechthoek!");
    }

}while(zijde1 == zijde2);


for(let i = 0; i < zijde1; i++)
{
    for(let j = 0; j < (zijde2 - 1); j++)
    {
        process.stdout.write(" * ")
    }
    console.log(" * ");
}
