import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* //Even Oneven 
let getal = parseFloat(await userInput.question('Geef een getal in:'));

if(getal1 % 2 == 0){
    console.log('getal is even');
}else{
    console.log('getlal is oneven');
}

//nummer tussen
let minimum = parseFloat(1);
let maximum = parseFloat(100);
let numer = parseFloat(await userInput.question('Geef een getal in:'));

if(numer >= minimum && numer <= maximum){
    console.log('Je getal '+ numer +' ligt tussen '+ minimum +' en '+ maximum);
}else{
    console.log('Je getal '+ numer +' ligt niet '+ minimum +' en '+ maximum);
}

//Dagen in een maand
let maand = await userInput.question('Geef een maand in:');

switch(maand){
    case 'Januarie':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'Februarie':
        console.log('Het maand '+maand+' heeft 30 dagen of 29 als het een schrikeljaar is');
    break;
    case 'Maart':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'April':
        console.log('Het maand '+maand+' heeft 30 dagen');
    break;
    case 'Mei':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'Junie':
        console.log('Het maand '+maand+' heeft 30 dagen');
    break;
    case 'Julie':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'Augustus':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'September':
        console.log('Het maand '+maand+' heeft 30 dagen');
    break;
    case 'Oktober':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    case 'November':
        console.log('Het maand '+maand+' heeft 30 dagen');
    break;
    case 'December':
        console.log('Het maand '+maand+' heeft 31 dagen');
    break;
    default:
        console.log('Slechte input');
}


//Songtitels

console.log('Kies een artiest:');
console.log('1. Red Hot Chili Peppers');
console.log('2. AC/DC');
console.log('3. Netsky');
console.log('4. De Strangers');
console.log('');
console.log('');

let artiest = parseFloat(await userInput.question('Geef je keuze in: '));

//switch versie
switch(artiest){
    case 1:
        console.log('Je koos voor "Red Hot Chili Peppers"');
        console.log('zijn de artist achter de hit: Otherside');
        break;
    case 2:
        console.log('Je koos voor "AC/DC"');
        console.log('zijn de artist achter de hit: Thunderstruck');
        break;
    case 3:
        console.log('Je koos voor "Netsky"');
        console.log('zijn de artist achter de hit: Let Me Hold You');
        break;
    case 4:
        console.log('Je koos voor "De Strangers"');
        console.log('zijn de artist achter de hit: Mijnen blauwe geschelpte');
        break;
    default:
        console.log('Slechte input');
}

//if else versie
if(artiest == 1){
    console.log('Je koos voor"Red Hot Chili Peppers"');
    console.log('zijn de artist achter de hit: Otherside');
}else if(artiest == 2) {
    console.log('Je koos voor"AC/DC"');
    console.log('zijn de artist achter de hit: Thunderstruck');
}else if(artiest == 3) {
    console.log('Je koos voor"Netsky"');
    console.log('zijn de artist achter de hit: Let Me Hold You');
}else if(artiest == 4) {
    console.log('De Strangers"');
    console.log('zijn de artist achter de hit: Mijnen blauwe geschelpte');
}else{
    console.log('Slechte input');
}

//Simpele rekenmachine
let getal1 = parseFloat(await userInput.question('Geef een getal in:'));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal in:'));
let result;
let rekenen = parseFloat(await userInput.question('Kies uit : Vermenigvuldigen 1, Optellen 2, aftrekken 3, delen 4 :'));

//switch versie
switch(rekenen){
    case 1:
        result = getal1*getal2;
    break;
    case 2:
        result = getal1+getal2;
    break;
    case 3:
        result = getal1-getal2
    break;
    case 4:
        result = getal1/getal2;
    break;
    default:
        console.log('faute input');
}

console.log('Jouw resultaat is: '+result);

//Quiz
console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: ');

let i = 0;
let antwoord1 = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk? ');
console.log('Jouw antwoord :'+antwoord1);

if(antwoord1 == 'parijs'){
    console.log('Goed antwoord!');
    i++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: parijs');
}

let antwoord2 = await userInput.question('Vraag 2: Wat is de hoofdstad van Spanje ? ');
console.log('Jouw antwoord :'+antwoord2);

if(antwoord2 == 'madrid'){
    console.log('Goed antwoord!');
    i++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: madrid');
}

let antwoord3 = await userInput.question('Vraag 3: Wat is de hoofdstad van Japan? ');
console.log('Jouw antwoord :'+antwoord3);

if(antwoord3 == 'tokyo'){
    console.log('Goed antwoord!');
    i++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: tokyo');
}

let antwoord4 = await userInput.question('Vraag 4: Wat is de hoofdstad van duitsland? ');
console.log('Jouw antwoord :'+antwoord4);

if(antwoord4 == 'berlijn'){
    console.log('Goed antwoord!');
    i++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: berlijn');
}

let antwoord5 = await userInput.question('Vraag 5: Wat is de hoofdstad van Malta? ');
console.log('Jouw antwoord :'+antwoord5);

if(antwoord5 == 'valeta'){
    console.log('Goed antwoord!');
    i++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: valeta');
}

console.log('Je hebt '+ i +' van de 5 vragen juist beantwoord.');

//Highscore
let number1 = parseFloat(await userInput.question('Geef een getal in:'));
let number2 = parseFloat(await userInput.question('Geef een getal in:'));
let number3 = parseFloat(await userInput.question('Geef een getal in:'));
let number4 = parseFloat(await userInput.question('Geef een getal in:'));
let number5 = parseFloat(await userInput.question('Geef een getal in:'));

let tab = [number1, number2, number3, number4, number5];
let gemiddelde = (number1+number2+number3+number4+number5)/5;
tab.sort();

console.log('Het hoogste getal is: ' +tab[4]+  ' het laagste getal is: '+tab[0]+ ' en het gemiddelde is: '+gemiddelde); */

//Schrikkeljaar
let jaar = parseFloat(await userInput.question('Geef een jaar in:'));
if(jaar%4 == 0 && (jaar%100 != 0 || jaar%400 == 0)){
    console.log('Het jaar '+jaar+ ' is een schrikkeljaar. Het maand Februari zal 29 dagen hebben.');
}else {
    console.log('Het jaar '+jaar+ ' is geen schrikkeljaar. Het maand Februari zal 29 dagen hebben.');
}  