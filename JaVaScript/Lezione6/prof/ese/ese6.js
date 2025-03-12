class Lampadina{
    constructor(clickContatore,numMaxClick,stato){


        this.clickContatore = 0;
        this.numMaxClick = 0;
        this.stato = "off";
    }

    statoA () {

        return this.stato;
    }

    click(){

        if (this.clickContatore >= this.numMaxClick){

            this.stato = "rotta";

            if (this.clickContatore >= this.numMaxClick) {
                this.stato = "rotta";
            } else if (this.stato === "off") {
                this.stato = "on";
                this.clickCount++;
            } else if (this.stato === "on") {
                this.stato = "off";
                this.clickCount++;

            }
        }

    }

}