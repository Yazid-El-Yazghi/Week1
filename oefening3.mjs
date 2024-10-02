import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//Even of oneven
for(let i = 0; i <= 20; i+=2){
    console.log(i);
}

//Tafel van vermenigvuldiging
let i = 5;
while(i <= 5){
    let j = 1;
    while(j <= 10){
        let result = i * j;
        console.log(`${i} x ${j} = ${result}`);
        j++;
    }
    console.log("-----------------");
    i++;
}

//Getallen optellen
let getal = parseFloat(await userInput.question('Geef een getal in:'));
let som = 0;

while(getal != 0){
    som += getal;
    getal = parseFloat(await userInput.question('Geef een getal in:'));
}
console.log(som);

//Sterrenpiramide
let number = 0;
let num;
for(let hoogte = 5; number <= hoogte; number++){
    console.log();
    num = 1;
    while(num <= number){
        process.stdout.write('*')
        num++;
    }
}

//Priemgetal
let priem = parseFloat(await userInput.question('Geef een getal in: '));

if(priem == 1){
    console.log("Het getal: "+priem+" is geen priem getal.");
    process.exit();
}

for(let j = 2; j <= priem; j++){
    if(priem %j == 0 && j != priem){
        console.log("Het getal: "+priem+" is geen priem getal.");
        process.exit();
    }
}

console.log("Het getal: "+priem+" is een priem getal!");
//process.exit();

//FizzBuzz
for(let k = 0; k <= 100; k++){
    if(k % 3 == 0 && k %5 == 0){
        console.log('FizzBuzz');
    } else if(k %5 == 0){
        console.log('Buzz');
    }else if(k % 3 == 0){
        console.log('Fizz');
    }else{
        console.log(k);
    }
}

//Sterrenpiramide uitbreiden
let numbr = 0;
let hoogt = parseFloat(await userInput.question('Geef een getal in: '));
if(hoogt %2 != 0){
    numbr = 1;
}
for(hoogt;numbr <= hoogt; numbr += 2){
    let cpt = numbr;
    let onvv = 0;
    while(cpt <= hoogt){
        cpt += 2;
        onvv++;
        }
    console.log();
    process.stdout.write(' '.repeat(onvv));
    process.stdout.write('*'.repeat(numbr));
}
for(numbr = hoogt; numbr > 0; numbr -= 2){
    let cpt2 = numbr;
    let onvv2 = 0;
    while(cpt2 <= hoogt){
        cpt2 += 2;
        onvv2++;
        }
    console.log();
    process.stdout.write(' '.repeat(onvv2));
    process.stdout.write('*'.repeat(numbr));
}




//Lopende gemiddelde
let compt = 0;
let opteller = 0;
let gemid = 0;

while(gemid <= 25){
    let nmb = parseFloat(await userInput.question('Geef een getal in: '));
    opteller += nmb;
    compt++;
    gemid = opteller/compt;
    console.log('Je gemidelde is: '+gemid);
}

process.exit();