import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let hoogte = 4;

let startTop = parseFloat(await userInput.question("startTop true of false? "));
let startLeft = parseFloat(await userInput.question("startLeft true of false? "));

if(startTop == true && startLeft == true)
{
    for(let i = 1; i <= hoogte; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            process.stdout.write("*");
        }
        
        console.log(" ");
    }

}

else if(startTop == false && startLeft == true)
{
    for(let i = hoogte; i >= 1; i--)
    {
        for(let j = 1; j <= i; j++)
        {
            process.stdout.write("*");
        }
            
        console.log(" ");
    }   

}

else if (startTop == true && startLeft == false) 
{
    for (let i = 1; i <= hoogte; i++) 
    {
            
        for (let k = 1; k <= hoogte - k; k++) 
        {
            process.stdout.write("");
        }
    
            
        for (let j = 1; j <= i; j++) 
        {
            process.stdout.write("*");
        }
    
        console.log(""); 
    }
}


