// ESE1 

// creazione contenitore Contenitore- righa- colonna
let contenitore = document.createElement("div");
contenitore.setAttribute("class", "container");

let righa11 = document.createElement("div");
let righa12 = document.createElement("div");
let righa13 = document.createElement("div");

let righa21 = document.createElement("div");
let righa22 = document.createElement("div");
let righa23 = document.createElement("div");

righa11.setAttribute("class", "row");
righa12.setAttribute("class", "row");
righa13.setAttribute("class", "row");

righa21.setAttribute("class", "row");
righa22.setAttribute("class", "row");
righa23.setAttribute("class", "row");

let colonna1 = document.createElement("div");
colonna1.setAttribute("class", "col");

let colonna2 = document.createElement("div");
colonna2.setAttribute("class", "col");

colonna1.appendChild(righa11);
colonna1.appendChild(righa12);
colonna1.appendChild(righa13);

contenitore.appendChild(colonna1);

colonna2.appendChild(righa21);
colonna2.appendChild(righa22);
colonna2.appendChild(righa23);

contenitore.appendChild(colonna2);

document.body.appendChild(contenitore);



let box = document.createElement("h1");
box.setAttribute("id", "esercizio");
box.style.color = "green";
box.style.accentColor="red";
box.style.backgroundColor="yellow";
box.style.width = "300px";
box.style.border = "3px solid black";
box.style.padding = "10px";
box.style.margin = "10px";

righa11.appendChild(box); // inserisco il box alla colonna

document.getElementById("esercizio").innerText = "ESERCIZIO 1";

let tabellina = [1, 2, 3, 4, 5,6,7,8,9,10]; 
let magicNumber = 4;
let risCicloFor =""
let risCicloWhile =""


for (let i in tabellina) {
    risCicloFor +=` ${tabellina[i]} x ${magicNumber}= ${tabellina[i] * magicNumber} `+ "<br>"; 
    
}

let box2CicloFor = document.createElement("p");
box2CicloFor.setAttribute("id", "ese2");
box2CicloFor.style.backgroundColor="red";
box2CicloFor.style.color="white";
box2CicloFor.style.width = "300px";
box2CicloFor.style.padding = "10px";
box2CicloFor.style.margin = "10px";
box2CicloFor.innerHTML = `<strong>Tabellina con ciclo For:</strong><br>` + risCicloFor;

box2CicloFor.style.border = "3px solid black";


righa12.appendChild(box2CicloFor);


let valoreMax = 10;
let contatore =1;


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
righa13.appendChild(box3CicloWhile);


// ESE 2

let box2 = document.createElement("h1");
box2.setAttribute("id", "esercizio2");
box2.style.color = "green";
box2.style.accentColor="red";
box2.style.backgroundColor="yellow";
box2.style.width = "300px";
box2.style.border = "3px solid black";
box2.style.padding = "10px";
box2.style.margin = "10px";

righa21.appendChild(box2); // inserisco il box alla colonna

document.getElementById("esercizio2").innerText = "ESERCIZIO 2";






