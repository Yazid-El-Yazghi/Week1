import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* //Oppervlakte
let zijde1 = parseFloat(await userInput.question('Geef een zijde1 in cm in: '));
let zijde2 = parseFloat(await userInput.question('Geef een zijde2 in cm in: '));
console.log('De Oppervlakte van de zijde '+zijde1+' en '+zijde2+' is '+zijde1*zijde2+'cm²');
process.exit(); */

//Veelvouden
/* let start = parseFloat(await userInput.question('Geef een start getal in: '));
let end = parseFloat(await userInput.question('Geef een eind getal in: '));
let deler1 = parseFloat(await userInput.question('Geef een deler in: '));
let deler2 = parseFloat(await userInput.question('Geef een tweede deler in: '));

let tab = [];
let o = 0;

for(let i = start; i <= end; i++){
    if(i %deler1 == 0){
        tab[o] = i;
    }else if(i %deler2 == 0){
        tab[o] = i;
    }else{
        tab[o] = null;
    }
    o++;
}
tab = tab.filter(element => element);
console.log('De getallen die tussen '+start+' en '+end+' dat deelbaar door '+deler1+' en '+deler2+' zijn '+tab);
process.exit(); */

//Veelvouden uitbreiden
//Ik begrijp de oefening niet.

//Nummerpiramide
/* let cpt = 1;
for(let number = parseFloat(await userInput.question('Geef een start getal in: ')); number > 0; number--){
    let string = cpt.toString();
    process.stdout.write(string.repeat(cpt));
    console.log();
    cpt++;
}
process.exit(); */

//Sterrenpiramide uitbreiden
/* let height = parseFloat(await userInput.question('Geef een hoogte in: '));
let startTop = await userInput.question('startTop? (t/f)');
let startLeft = await userInput.question('startLeft? (t/f)');

if(startTop == 't'){
    startTop = true;
}else{
    startTop = false;
}

if(startLeft == 't'){
    startLeft = true;
}else{
    startLeft = false;
}

console.log('    Output:');

if(startTop == false && startLeft == true){
    for(height; height > 0; height--){
        process.stdout.write('*'.repeat(height));
        console.log();
    }
    process.exit();

}else if(startTop == true && startLeft == true){
    for(let number = 1; number <= height; number++){
        process.stdout.write('*'.repeat(number));
        console.log();
    }
    process.exit();

}else if(startTop == true && startLeft == false){
    for(let numb = 1; numb <= height; numb++){
        let space = height-numb;
        process.stdout.write(' '.repeat(space));
        process.stdout.write('*'.repeat(numb));
        console.log();
    }
    process.exit();
} */

// SSP uitbreiden
let computerwin = 0;
let userwin = 0;
let choices = ['rock', 'paper', 'scissors'];

while(computerwin < 3 && userwin < 3){
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    let userChoice = await userInput.question('rock, paper or scissors? ');

    while(userChoice != 'paper' && userChoice != 'rock' && userChoice != 'scissors'){
        console.log('Wrong input!');
        userChoice = await userInput.question('rock, paper or scissors? ')
    }

    console.log();
    

    if(computerChoice == 'rock' && userChoice == 'paper'){
        userwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('User win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);

    }else if(computerChoice == 'paper' && userChoice == 'scissors'){
        userwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('User win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);

    }else if(computerChoice == 'scissors' && userChoice == 'rock'){
        userwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('User win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);

    }else if(computerChoice == 'rock' && userChoice == 'scissors'){
        computerwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('Computer win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);

    }else if(computerChoice == 'paper' && userChoice == 'rock'){
        computerwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('Computer win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);
        
    }else if(computerChoice == 'scissors' && userChoice == 'paper'){
        computerwin++;
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('Computer win!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);
        
    }else{
        console.log('Computer: '+computerChoice+' userchoice: '+userChoice);
        console.log('Draw!');
        console.log('User Total Points: '+userwin);
        console.log('Computer Total Points: '+computerwin);
    }
    console.log();
}

process.exit();