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
let start = parseFloat(await userInput.question('Geef een start getal in: '));
let end = parseFloat(await userInput.question('Geef een eind getal in: '));
let deler1 = parseFloat(await userInput.question('Geef een deler in: '));
let welniet1 = await userInput.question('moet de deler wel of niet deelbaar zijn? (wel/niet) ');
let deler2 = parseFloat(await userInput.question('Geef een tweede deler in: '));
let welniet2 = await userInput.question('moet de deler wel of niet deelbaar zijn? (wel/niet) ');

let tab = [];
let o = 0;

for(let i = start; i <= end; i++){
    if(i == nietdeelbaar){
        tab[o] = null;
    }
    else if(i %deler1 == 0){
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
process.exit();

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
let cpt = 1;
for(let number = parseFloat(await userInput.question('Geef een start getal in: ')); number > 0; number--){
    let string = cpt.toString();
    process.stdout.write(string.repeat(cpt));
    console.log();
    cpt++;
}

process.exit();