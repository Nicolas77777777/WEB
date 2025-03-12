import React from 'react'

const Esercizio3 = (props) => {

    let numeroIniziale = parseInt(props.numI);
    let numeroFinale = parseInt(props.numF);
    let stampa3 =[];
    console.log(typeof numeroIniziale) ;
    while (numeroIniziale <=numeroFinale){

        let stampaEse3 = numeroIniziale++ ;
        stampa3.push(stampaEse3);
    }




  return (
    <div>

        <h1>Esercizio3</h1>

        {
        stampa3.map( (el) => {

          // qui sta iterando
          return <h2>{el}</h2>
         })

      }


    
    </div>
  )
}

export default Esercizio3