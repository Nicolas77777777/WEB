import React, { useState } from 'react'

const Hooks1 = () => {
// area1
// gli Hooks Sono delle funzioni di react useState()
let saluto = "ciao ";


let saluto2 = useState("ciao"); // torna 2 valori all'interno di 1 array
// valore attuale
// metodo set 

let [saluto3,setSaluto3]= useState("ciao"); // destrutturazione

let cambiaValore = () => {
    saluto2[1] ( " arrivederci");
    setSaluto3("arrivederci");
    console.log(saluto);

}




//area 2
  return (
    <div>

        
        <h1>Hooks1 use State</h1>
        <h3>{saluto}</h3>
        <button onClick={cambiaValore}> Cambia</button>
        
    </div>
  )
}

export default Hooks1