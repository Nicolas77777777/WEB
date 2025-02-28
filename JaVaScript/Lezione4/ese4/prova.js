// ESE1 

// creazione contenitore Contenitore- righa- colonna
let contenitore = document.createElement("div");
contenitore.setAttribute("class", "container");

// creazuione righa
let righa1 = document.createElement("div");
righa1.setAttribute("class", "row")

// creazione collone
let colonna1 = document.createElement("div");
colonna1.setAttribute("class", "col");

let colonna2 = document.createElement("div");
colonna2.setAttribute("class", "col");

let colonna3 = document.createElement("div");
colonna3.setAttribute("class", "col");

let colonna4 = document.createElement("div");
colonna4.setAttribute("class", "col");

righa1.appendChild(colonna1);
righa1.appendChild(colonna2);
righa1.appendChild(colonna3);
righa1.appendChild(colonna4);

contenitore.appendChild(righa1);

document.body.appendChild(contenitore);

// ESE 1 - Titolo
let box = document.createElement("h1");
box.setAttribute("id", "esercizio");
box.style.color = "green";
box.style.accentColor = "red";
box.style.backgroundColor = "yellow";
box.style.width = "300px";
box.style.border = "3px solid black";
box.style.padding = "10px";
box.style.margin = "10px";

colonna1.appendChild(box); // inserisco il box alla colonna

document.getElementById("esercizio").innerText = "ESERCIZIO 1";

// ESE 2 - Titolo nella seconda colonna
let box2 = document.createElement("h1");
box2.setAttribute("id", "esercizio2");
box2.style.color = "green";
box2.style.accentColor = "red";
box2.style.backgroundColor = "yellow";
box2.style.width = "300px";
box2.style.border = "3px solid black";
box2.style.padding = "10px";
box2.style.margin = "10px";

colonna2.appendChild(box2); // inserisco il box alla seconda colonna
document.getElementById("esercizio2").innerText = "ESERCIZIO 2";

// ESE 3 - Titolo della terza colonna
let box3 = document.createElement("h1");
box3.setAttribute("id", "esercizio3");
box3.style.color = "green";
box3.style.accentColor = "red";
box3.style.backgroundColor = "yellow";
box3.style.width = "300px";
box3.style.border = "3px solid black";
box3.style.padding = "10px";
box3.style.margin = "10px";

colonna3.appendChild(box3); // inserisco il box alla seconda colonna
document.getElementById("esercizio3").innerText = "ESERCIZIO 3";

// ESE 4 - Titolo della terza colonna
let box4 = document.createElement("h1");
box4.setAttribute("id", "esercizio4");
box4.style.color = "green";
box4.style.accentColor = "red";
box4.style.backgroundColor = "yellow";
box4.style.width = "300px";
box4.style.border = "3px solid black";
box4.style.padding = "10px";
box4.style.margin = "10px";

colonna4.appendChild(box4); // inserisco il box alla seconda colonna
document.getElementById("esercizio4").innerText = "ESERCIZIO 4";
/*
// Tabellina con ciclo FOR
let tabellina = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let magicNumber = 4;
let risCicloFor = "";

for (let i in tabellina) {
    risCicloFor += ` ${tabellina[i]} x ${magicNumber} = ${tabellina[i] * magicNumber} ` + "<br>"; 
}

let box2CicloFor = document.createElement("p");
box2CicloFor.setAttribute("id", "ese2");
box2CicloFor.style.backgroundColor = "red";
box2CicloFor.style.color = "white";
box2CicloFor.style.width = "300px";
box2CicloFor.style.padding = "10px";
box2CicloFor.style.margin = "10px";
box2CicloFor.innerHTML = `<strong>Tabellina con ciclo For:</strong><br>` + risCicloFor;
box2CicloFor.style.border = "3px solid black";

colonna2.appendChild(box2CicloFor);

// Tabellina con ciclo WHILE
let valoreMax = 10;
let contatore = 1;
let risCicloWhile = "";

while (contatore <= valoreMax) {
    risCicloWhile += `${contatore} x ${magicNumber} = ${contatore * magicNumber} <br>`;
    contatore++;
}

let box3CicloWhile = document.createElement("p");
box3CicloWhile.setAttribute("id", "ese3");
box3CicloWhile.style.backgroundColor = "blue";
box3CicloWhile.style.color = "white";
box3CicloWhile.style.width = "300px";
box3CicloWhile.style.border = "3px solid black";
box3CicloWhile.style.padding = "10px";
box3CicloWhile.style.margin = "10px";
box3CicloWhile.innerHTML = `<strong>Tabellina con ciclo WHILE:</strong><br>` + risCicloWhile;

righa1.appendChild(box3CicloWhile);*/






