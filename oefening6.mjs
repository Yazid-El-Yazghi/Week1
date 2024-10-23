import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

//Studentenlijst

/* let naam = [''];
let t = 0;

while (naam[t] != 'S') {
    let vnaam = await userInput.question('Geef een naam in: ')
    naam.push(vnaam);
    t++;
}
console.log(naam);

process.exit(); */


//Uitnodigingen

/* let snaam = ['Yazid', 'Sabri', 'Rakim'];

for (let i = 0; i < snaam.length; i++) {
    console.log(snaam[i]+', Je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB! ');
    }
process.exit(); */

//Alles samen

/* let t = 0;
let naam = [];
let vnaam = await userInput.question('Geef een naam in: ')

while (naam[t] != 'S') {
    vnaam = await userInput.question('Geef een naam in: ')
    naam.push(vnaam);
    t++;
}

for (let i = 0; i < naam.length; i++) {
    console.log(naam[i]+', Je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB! ');
    }
process.exit(); */

//Gemiddelde

let score = parseFloat(['5','7','10','8','4','1']);
let Gemiddelde = 0;

for (let j = 0; j < score.length; j++) {
    Gemiddelde += score[j];
}
console.log(Gemiddelde);

/* Gemiddelde = Gemiddelde/j;
console.log(Gemiddelde); */
process.exit();