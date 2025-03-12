
let miavariabile = "50";

let stampa = ` ${miavariabile} ${typeof(miavariabile)} `;

document.getElementById("ese4_1").innerHTML = stampa;

// isNaN() ... non è un numero ... true se non è un numero!!! funzioni globali 
console.log(isNaN(miavariabile));
// true ... non è un numero

// INVECE NO ...

// JS ... cerca una soluzione ... 

// ragiona ... isNaN() ... true....

let xx = 10;
let yy = "10";

// parseInt();   cast da stringa a intero
// parseFloat(); cast da stringa a decimale

console.log( xx + parseInt(yy) ); // 100 ... + 
// NaN

// NaN
let test = true; // boolean

console.log( true + 1 ); // 2

console.log(isNaN(true));

