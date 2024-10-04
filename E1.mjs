import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let zijde1 = parseFloat(await userInput.question("Geef het hoogte in: "));
let zijde2 = parseFloat(await userInput.question("Geef het breedte in: "));

do
{
    console.log("Het breedte moet hoger zijn dan hoogte!");
    zijde1 = parseFloat(await userInput.question("Geef het hoogte in: "));
    zijde2 = parseFloat(await userInput.question("Geef het breedte in: "));

}while(zijde1 > zijde2);


for(let i = 0; i < zijde1; i++)
{
    for(let j = 0; j < zijde2; j++)
    {
        process.stdout.write(" * ")
    }
    console.log(" * ");
}
