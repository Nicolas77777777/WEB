import React, { useState } from 'react'
import prodotti from './Prodotti'; 

const Esercizio6 = () => {

  const [risultato,setRisultato] = useState("");

  const verifica = () =>{
    for(let i =0;i<prodotti.length;i++ ){
      if(prodotti[i].nome === document.getElementById("nomeProdotto").value){
        setRisultato("Prodotto torvato: "+ prodotti[i].nome);
        break;
      } else {
        setRisultato("prodotto nun trovato");
        
      }


    }


  }


  return (
    <div>
      <h1>Esercizio6</h1>
      <input type="text" id="nomeProdotto" placeholder="Cerca Prodotto" />
      <br />
      <button onClick={verifica}>in to u culu </button>
      <h2>{risultato}</h2>
      
    </div>
  )
}

export default Esercizio6