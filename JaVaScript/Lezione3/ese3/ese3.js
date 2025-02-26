

// ESE 1 

let numero1 =10;
let numero2 =10;
let numero3 =10;
let numero4 =10;
let numero5 =10;


let somma= numero1+numero2+numero3+numero4+numero5
let media = somma /5


document.getElementById("somma1").innerHTML=("addizione dei numeri uguale a " + somma);
document.getElementById("media").innerHTML=("media dei numeri uguale a " + media);


//ESE 2

let annoCorrente = 2025;
let annoNascita = 1989;
let anniCento = 100;

let anni = annoCorrente - annoNascita;
let anniRimanenti = anniCento - anni;

document.getElementById("anni").innerHTML=("io ho " + anni + "anni");
document.getElementById("anniRImanenti").innerHTML=("per arrivare a canto anni, mancano ancora " + anniRimanenti);


//ESE 3
// Esercizio 3: Conversione di secondi in ore, minuti e secondi
function convertitoreSecondi() {
    let secondiInput = document.getElementById("secondi").value;
    let secondi = parseInt(secondiInput);



    let ore = Math.floor(secondi / 3600); // parseInt()
    let minuti = Math.floor((secondi % 3600) / 60); // parseInt 
    let restantiSecondi = secondi % 60;

    document.getElementById("risultato").innerText =
        `${ore} ore, ${minuti} minuti e ${restantiSecondi} secondi.`;
}


//ESE 4

function addizione () {

let num1 = document.getElementById("n1").value;
let num2 = document.getElementById("n2").value;
let numero1 = parseFloat(num1);
let numero2 = parseFloat(num2);

let ris = numero1 + numero2



document.getElementById("ri").innerText = "Risultato: " + ris;
}

// ESE 5 

let a = 1;
let b = 1;
let c = ++a;
let d = b++;

console.log(c); // 2
console.log(d); // 1

//ESE 6

// a = 4

// x =5



















