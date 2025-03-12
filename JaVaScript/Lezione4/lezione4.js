
// espressione ... operatori ... risultato BOOLEAN 
// DEVE essere BOOLEAN

let a = 10;

if( a == 10 ) {
    console.log("Numero uguale a 10");
}else if( a < 10 ){
    console.log("Numero minore di 10");
}else if( a > 10 ){
    console.log("Numero maggiore di 10");
}else{
    console.log("Numero errato");  
}

if( a == 10 ) {
    console.log("Numero uguale a 10");
}

if( a < 10 ){
    console.log("Numero minore di 10");
}

if( a > 10 ){
    console.log("Numero maggiore di 10");
}

switch(a) {

    case 10 :
        break;
    case 11 :
        break;
    case 12 : 
        break;

}

// REGOLA : Quando ciclo (quando scrivo il costrutto while o for)
// SE conosco a PRIORI quante volte ciclare uso il FOR
// SE non conosco quante volte ciclare uso il WHILE

let giorni = ['lun','mar','mer'];

let x = 0;

while ( x < giorni.length) {
    console.log(giorni[x]);
    x++;
}

// 99% FOR ? array

// MODALITA' 1 for classico
for(let y = 0 ; y < giorni.length ; y++ ){
    console.log(giorni[y]);
}

// MODALITA' 2 for in ... 
for(let i in giorni){
    console.log(giorni[i]);
}

// MODALITA' 3 for of ... 
for(let i of giorni){
    console.log(i);
}

// MODALITA' 4 Array ... forEach() ... void
giorni.forEach( function (x) {
    console.log(x);
}); // callback

// MODALITA' 5 Array ... map() ... return
giorni.map( function (x) {
    console.log(x);
});
