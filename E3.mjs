import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let start =  parseFloat(await userInput.question("Met welk getal beginnen we? "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we? "));
let deler1 = parseFloat(await userInput.question("Geef deler 1 in: "));
let deler2 = parseFloat(await userInput.question("Geef deler 2 in: "));
let deelbaar1 = deler1;
let deelbaar2 = deler2;

console.log("Alle getallen tussen " + start + " en " + end + " die deelbaar zijn door " + deler1 + " en " + deler2 + ".");
for(let i = start; i <= end; i++)
{
    

    if(i % deler1 == 0 && i % deler2 == 0)
    {
        console.log( i + " Het getal is deelbaar door " + deler1 + " en " + deler2);
    }
    else if(deler1 > deler2)
    {
        if(i % deelbaar1 == 0)
        {
            console.log(i + " Het getal is enkel deelbaar door " + deler1);
        }
        else if(i % deelbaar2 ==0)
        {
            console.log(i + " Het getal is enkel deelbaar door " + deler2);  
        }
    } 
    else if(deler1 < deler2)
    {
        if(i % deelbaar2 == 0)
            {
                console.log(i + " Het getal is enkel deelbaar door " + deler2);
            }
            else if(i % deelbaar1 ==0)
            {
                console.log(i + " Het getal is enkel deelbaar door " + deler1);  
            }
         
    }
    
    console.log(i)
    

}