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
function Oppervlakte(vorm, straal, basis, hoogte, zijde1, zijde2, zijde){
    let Oppervlakte;
    if(vorm == 'cirkel'){
        Oppervlakte = straal*straal*Math.PI;
    }else if(vorm == 'driehoek'){
        Oppervlakte = (basis*hoogte)/2;
    }else if(vorm == 'rechthoek'){
        Oppervlakte = zijde1*zijde2;
    }else if(vorm == 'vierkant'){
        Oppervlakte = zijde*zijde;
    }else{
        console.log('Wrong input!');
        process.exit();
    }
    console.log('De oppervlakte van het figuur is '+Oppervlakte+'²');
    process.exit();
} */

//Temperatuurconverter
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
}

