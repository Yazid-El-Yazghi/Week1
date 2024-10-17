import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* //Persoonlijke begroeting
function begroeting(naam){
    console.log('Hallo '+naam+', hoe gaat het met jouw.');
    process.exit();
}

let naam = await userInput.question('Schrijf je naam in: ');
begroeting(naam); */

/* //Oppervlakes
let vorm = await userInput.question('Geef de naam van het vorm in (cirkel/driehoek/rechthoek/vierkant): ')

Oppervlakte(vorm);

async function Oppervlakte(vorm){
    let Oppervlakte;
    if(vorm == 'cirkel'){
        let straal = parseFloat(await userInput.question('Geef de straal in: '));
        Oppervlakte = straal*straal*Math.PI;
    }else if(vorm == 'driehoek'){
        let basis = parseFloat(await userInput.question('Geef de basis in: '));
        let hoogte = parseFloat(await userInput.question('Geef het hoogte in: '));
        Oppervlakte = (basis*hoogte)/2;
    }else if(vorm == 'rechthoek'){
        let zijde1 = parseFloat(await userInput.question('Geef de eerste zijde in: '));
        let zijde2 = parseFloat(await userInput.question('Geef de tweede zijde in: '));
        Oppervlakte = zijde1*zijde2;
    }else if(vorm == 'vierkant'){
        let zijde = parseFloat(await userInput.question('Geef een zijde in: '));
        Oppervlakte = zijde*zijde;
    }else{
        console.log('Wrong input!');
        process.exit();
    }
    console.log('De oppervlakte van het figuur is '+Oppervlakte+'²');
    process.exit();
} */

/* //Temperatuurconverter
let temperatuur = parseFloat (await userInput.question("geef een temperatuur in: "));
let choice = await userInput.question("is de temperatuur in celcius? [y/n]");
let isCelcius;
if (choice == 'y'){
    isCelcius = true;
}else{
    isCelcius = false;
}

Temperatuurconverter(temperatuur, isCelcius);

function Temperatuurconverter(temperatuur, isCelcius){
    if(isCelcius == true){
        temperatuur = (temperatuur*(9/5))+32;
        console.log('Je temperatuur in Farenheit is: '+temperatuur);
        process.exit();
    }else{
        temperatuur = (temperatuur-32)*(5/9);
        console.log('Je temperatuur in celcius is: '+temperatuur);
        process.exit();
    }
} */

/* //Factorial
let factor = parseFloat(await userInput.question('Geef een getal in: '))

Factorial(factor);

function Factorial(factor){
    let fac = 1;
    for(let i = 1; i <= factor; i++){
        fac *= i;
    }
    console.log('De factorial van '+factor+' is '+fac);
    process.exit();
} */

/* //Hoger/lager v3
let getal = parseFloat(await userInput.question('Raad het getal tussen 1 en 10: '));

HogerOfLager(getal);

async function HogerOfLager(getal) {
    let cpt = 1;
    let random = Math.floor(Math.random() * 10)+1;
    while(cpt < 3){
        if(getal != random){
            if(getal < random){
                console.log('Het getal is hoger dan '+getal);
                getal = parseFloat(await userInput.question('Raad het getal tussen 1 en 10: '));
                cpt++;
            }else{
                console.log('Het getal is lager dan '+getal);
                getal = parseFloat(await userInput.question('Raad het getal tussen 1 en 10: '));
                cpt++;
            }
        }else{
            console.log('Prima! je heeft het juiste getal gevonden!');
            console.log('Het getal was: '+getal);
            process.exit();
        }
    }
    console.log('GAME OVER');
    console.log('Helaas het getal was: '+random);
    process.exit();
} */

/* //Perfecte getallen
let perfect = parseFloat(await userInput.question('Geef een getal tussen 1 en 100: '));

isParfect(perfect);

function isParfect(perfect) {
    let teller = 0;

    if(perfect > 100 && perfect < 1){
        console.log('Het getal ligt niet tussen 1 en 100');
        process.exit();
    }

    for (let index = 1; index < perfect; index++) {
        if(perfect %index == 0){
            teller += index;
        }
    }

    if(teller == perfect){
        console.log('Het getal '+perfect+' is een perfecte getal');
    }else{
        console.log('Het getal '+perfect+' is geen perfecte getal');
    }
    process.exit();
} */

//Dagen in de maand
let maand = await userInput.question('Geef een maand in: ');
let jaar = parseFloat(await userInput.question('Geef een jaar in: '));

DagenInDeMaand(maand, jaar);

function DagenInDeMaand(maand, jaar){
    let schrikeljaar = false;

    if(jaar%4 == 0 && (jaar%100 != 0 || jaar%400 == 0)){
        schrikeljaar = true;
    }

    if((maand == 'Januarie')||(maand == 'Maart')||(maand == 'Mei')||(maand == 'Julie')||(maand == 'Augustus')||(maand == 'Oktober')||(maand == 'December')){
        console.log('Het maand '+maand+' heeft 31 dagen');
    }else if((maand == 'April')||(maand == 'Junie')||(maand == 'September')||(maand == 'November')){
        console.log('Het maand '+maand+' heeft 30 dagen');
    }else if(maand == 'Februarie' && schrikeljaar == true){
        console.log('Het maand '+maand+' heeft 29 dagen');
    }else{
        console.log('Het maand '+maand+' heeft 28 dagen');
    }
    process.exit();
}

