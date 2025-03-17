import React, { useState } from 'react'

const Esercizio4_4 = () => {


    let [eta,seteta] = useState(0);
    let [nuovaeta, setnuovaeta] = useState('');

    let calcola = () => {
        let anno = new Date();
        let nuova = anno.getFullYear() - parseInt(document.getElementById("anno").value);
        setnuovaeta(nuova);
    }

  return (
    <div>
        <h1>Esercizio4_4</h1>
        <h2>{eta}</h2>
        Nome : <input type="text" id="nome"/><br/>
        Cognome : <input type="text" id="cognome"/><br/>
        Anno : <input type="text" id="anno"/><br/>
        <button onClick={calcola}>CALCOLA ETA'</button>
        <h1>{nuovaeta}</h1>
    </div>
  )
}

export default Esercizio4_4