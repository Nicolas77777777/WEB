// creazione contenitore Contenitore- righa- colonna
let contenitore = document.createElement("div");
contenitore.setAttribute("class", "container");

// creazuione righa
let righa1 = document.createElement("div");
righa1.setAttribute("class", "row")

let righa2 = document.createElement("div");
righa2.setAttribute("class", "row")

// creazione collone
let colonna1 = document.createElement("div");
colonna1.setAttribute("class", "col-3");

let colonna2 = document.createElement("div");
colonna2.setAttribute("class", "col-3");

let colonna3 = document.createElement("div");
colonna3.setAttribute("class", "col-3");

let colonna4 = document.createElement("div");
colonna4.setAttribute("class", "col-3");

righa1.appendChild(colonna1);
righa1.appendChild(colonna2);
righa1.appendChild(colonna3);
righa1.appendChild(colonna4);

righa2.appendChild(colonna1);
righa2.appendChild(colonna2);
righa2.appendChild(colonna3);
righa2.appendChild(colonna4);

contenitore.appendChild(righa1);
contenitore.appendChild(righa2);

document.body.appendChild(contenitore);

// creazione bottone 

let bottone = document.createElement("button");
bottone.setAttribute("class", "btn btn-primary");
bottone.setAttribute("id", "mioBottone");
bottone.setAttribute("type", "button");
bottone.setAttribute("aria-label", "Clicca per inviare");
bottone.textContent = "scrivi un numero da 1 a 10"; // Testo del bottone

colonna1.appendChild(bottone); // Aggiunge il bottone alla pagina


let bottone = document.createElement("button");
bottone.setAttribute("class", "btn btn-primary");
bottone.setAttribute("id", "mioBottone1");
bottone.setAttribute("type", "button");
bottone.setAttribute("aria-label", "Clicca per inviare");
bottone.textContent = "scrivi un numero da 1 a 10"; // Testo del bottone

colonna1.appendChild(bottone); // Aggiunge il bottone alla pagina

