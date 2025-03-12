
let anno = new Date();
anno = anno.getFullYear();

console.log(anno);

anno = 2025;

console.log(anno);

let annonascita = 1976;

let eta = anno - annonascita;
let raggiungimento = 100 - eta;

console.log("l'età della persona è di : " + eta);
console.log(` per arrivare a 100 anni mancano ancora ${raggiungimento} `);