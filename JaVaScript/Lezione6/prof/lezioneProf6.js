
// OGGETTI ... retrocompatibile
// scatola ... contenitore ...
// ??? 1 attributi ( a = 1 )
// ??? 2 metodi (funzione nella classe)
// Sintassi : 

// JSON (JavaScript Object Notation) ... sintassi UNIVERSALE / STANDARD ...

// Fase 1 (fino al 2009)

// literal ... forma abbreviata ... 2 cose in 1 : istanza e valorizzazione
var persona = {
    nome : "Mario" ,
    cognome : "Rossi" ,
    eta : 20
};

// classica ... leggibile
var persona2 = new Object();    // costruisci 
persona2.nome = "Mario";        // valorizzo
persona.cognome = "Rossi";
persona2.eta = 20;

// classe ??? è un file salvato nel mio HD ... definire UN OGGETTO
// esecuzione del programma ... RAM
// NON esiste la CLASSE ... funzioni costruttore

// funzioni costruttore ... Prototype
// simulazione "class"
function Persona3() { // PRIMA ES6 
    this.nome = "Mario";
    this.cognome = "Rossi";
    this.eta = 20;
}

var px  = new Persona3();
var px1 = new Persona3();
var px2 = new Persona3();

console.log(px);

// Prototype : posso aggiungere proprietà all'oggetto QUANDO NE HO BISOGNO
px.indirizzo = "via del corso";
px1.civico = 30;

// materia a tutti ... lo fa separatamente
Persona3.prototype.materia = "informatica";

// 

// Fase 2 (dal 2009) ES6
class Persona {
    nome = "Mario";
    cognome = "Rossi";
    eta = 30;

    constructor(x,y,z) {
        this.nome = x;
        this.cognome = y;
        this.eta = z;
    }

    stampa() {
        console.log("ciao");
    }
}

let x = new Persona();
let y = new Persona();
let z = new Persona();

console.log(x);

x.paperino = "ciao";
Persona.prototype.pippo = "arrivederci";

x.nomee = "Luigi";

console.log(x);
console.log(y);
console.log(z);

// ereditarietà
class Dipendente extends Persona {

    constructor(){
        super();
    }

    // override
    stampa() {
        super.stampa();
        console.log("arrivederci");
    }
}

// ES6 super()
let s = new Dipendente();
s.stampa(); // arrivederci