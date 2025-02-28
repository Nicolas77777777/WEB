// ESE1 

let box = document.createElement("h1");
box.setAttribute("id", "ese1");
box.style.color = "green"
box.style.accentColor="red"
box.style.backgroundColor="yellow"
box.style.width = "300px";
box.style.border = "3px solid black";
box.style.padding = "10px";
box.style.margin = "10px";
document.body.appendChild(box);

document.getElementById("ese1").innerText = "ESERCIZIO 2";

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


document.body.appendChild(box2CicloFor);


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
document.body.appendChild(box3CicloWhile);






