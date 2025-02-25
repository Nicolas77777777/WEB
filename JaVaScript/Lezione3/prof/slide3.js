
// Array : OGGETTO ... classica e literal

// literal
let numeri1 = [3,5,7]; // istanza e popola

// classica (codice per inetro)
let numeri2 = new Array();  // istanza dell'oggetto
numeri2.push(3);            // aggiungo un valore
numeri2.push(5);
numeri2.push(7);

// js ... array sono dinamici !!!
// array indice da zero

console.log(numeri2[1]);

let mioarray = [10 , "ciao" , true , {} , [] , 22]; 

// js tipizzazione debole
numeri2[10] = 33; // crea la casella 10 .... 

console.log(numeri2.length); // 11
  
// Operatori + - * /
// Operatori compatti
let x = 10;
x = x + 2;
x += 2; // 14

x++; // aumentano di uno

console.log(x); // 15

// differenza SE ++ sta insieme ad un altro operatore
let y = 20;
let z = ++y; // 

// y ... 21
// z ... 21

// Operatori relazioni
// ==   confronta solo il valore
// ===  confronta il valore e il tipo
if(y == z) {
    console.log("sono uguali");
}

let w = 10;  // number
let t = "10";// string

if(w === t) { // strettamente uguale : NON ENTRA ... controlla il valore ... il tipo
    console.log("sono uguali");
}

let q = true;
let r = 1;

if( (q == r) && (w == t) ){
    console.log("entra");
}