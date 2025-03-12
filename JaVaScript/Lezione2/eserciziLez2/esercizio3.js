
let x = 10;

let y; // dichiarare una variabile

y = x;

let z = "Mario";

// dom
let stampa1    = x + " " + typeof(x);   // string classica
let stampa1bis = ` ${x} ${typeof(x)} `; // literal string
let stampa2bis = ` ${y} ${typeof(y)} `; // literal string
let stampa3bis = ` ${z} ${typeof(z)} `; // literal string

document.getElementById("ese3_1").innerHTML = stampa1bis;
document.getElementById("ese3_2").innerHTML = stampa2bis;
document.getElementById("ese3_3").innerHTML = stampa3bis;
