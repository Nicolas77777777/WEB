// ESE1 

let box = document.createElement("h1");
box.setAttribute("id", "ese1");
box.style.color = "green"
box.style.accentColor="red"
box.style.backgroundColor="yellow"
document.body.appendChild(box);

document.getElementById("ese1").innerText = "ESERCIZIO 1";

let tabellina = [1, 2, 3, 4, 5,6,7,8,9,10]; 
let magicNumber = 4;

for (let i in tabellina) {
    console.log(tabellina[i]* magicNumber); 
}

let valoreMax = 40;
let contatore =1;


while(contatore <= valoreMax){

    console.log(contatore);
    contatore *= magicNumber

}



