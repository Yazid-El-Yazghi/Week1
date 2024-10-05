import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let userChoice = await userInput.question('rock, paper or scissors? ');

if(userChoice != 'paper' && userChoice != 'rock' && userChoice != 'scissors'){
    console.log('Wrong input!');
}else{
    console.log('good input');
    
}

process.exit();