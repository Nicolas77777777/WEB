
let secondi = 12560;

let ore    = Math.floor(secondi / 3600); // parseInt()
let minuti = Math.floor((secondi % 3600) / 60);
let sec    = secondi % 60;

console.log("ORE : ");
console.log(ore);
console.log("MINUTI : ");
console.log(minuti);
console.log("SECONDI : ");
console.log(sec);
