import React from 'react'

// icomponenti i paarametri per convenzioni si chiamano props
// props è un oggetto 
// 1 se il paramaetro è 1 solo le tonde non ci vanno 
// Se e solo se l'istruizone della funzione è una SOLA le graffe non ci vanno è implicito

export const Esercizio1 = (props) => {// prps è un oggetto 
   //Area 11 
   let numero = props.tabellina; // 5
   let stampaTabellina=[]


   for (let i=1;i<10;i++){
        let stampa =i + "*" + numero + "="+ i*numero;
        stampaTabellina.push(stampa);

   }

   let pippo = 10;

  return (
    <div>

      <h1>Esercizio 1</h1>
      {pippo}

      {
        stampaTabellina.map( (el) => {

          // qui sta iterando
          return <h2>{el}</h2>
         })

      }
        
    </div>
  )
}


export default Esercizio1;
