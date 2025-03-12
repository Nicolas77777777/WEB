
// FASE 2
class Lampadina {

    statoLampadina; // negli oggetti NON SI USA LET / VAR / CONST
    mioclick; 
    rottura;
    contaclick;

    constructor(x) {
        this.statoLampadina = "spenta";
        this.mioclick = false;
        this.rottura = x;
        this.contaclick = 0;
    }

    stato() {
        return this.statoLampadina;
    }

    click() {

        this.contaclick++;

        if(this.contaclick <= this.rottura){

            if(this.mioclick){
                this.mioclick = false;
                this.statoLampadina = "spenta";
                document.body.style.backgroundColor = "blue";
            }else{
                this.mioclick = true;
                this.statoLampadina = "accesa";
                document.body.style.backgroundColor = "yellow";
            }
        }else{
            this.mioclick = false;
            this.statoLampadina = "ROTTA"; 
            document.body.style.backgroundColor = "grey";           
        }

        document.getElementById("miobottone").innerText = this.statoLampadina;
    }
}

let lampada1 = new Lampadina(10);
/*
for(let i = 0 ; i < 20 ; i++){

    lampada1.click();  
    console.log(lampada1.stato());
}
*/

let esegui = () => {
    lampada1.click();  
    console.log(lampada1.stato());
}