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

function convertitoreSecondi(){
    let totalisecond= parseInt(document.getElementById('secondi').value);
    let ore = Math.floor(totalisecond/ 3600);
    let remainingSeconds = totalisecond% 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;
    
    document.getElementById('result').innerText = hours + " ore, " + minutes + " minuti e " + seconds + " secondi";
}








