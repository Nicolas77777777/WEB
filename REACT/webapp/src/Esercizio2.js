import React from 'react'
    



export const Esercizio2 = (props) => {


    let titolo = props.ese2Titolo;
    let numero =props.ese2;
    let numeri = [1,2,3,4,5,6,7,8,9,10];
    let numeri2 = [];

    
    let stampaCiclo10 = [];

    while (numero <= 10) {

       let stampaEse2 = numero++;

       stampaCiclo10.push(stampaEse2);
    }
    

  return (
    <div>

        <h1>Esercizio2</h1>
        <h2>{titolo}</h2>

        {
        stampaCiclo10.map( (el) => {

          // qui sta iterando
          return <h2>{el}</h2>
         })

      }

        {numeri.map((el) =>{ 
        
        return<h1>{el}</h1>})}



        <h3>  1 REGOLA ARROW FUNCTION SE IL PARAMETRO È UNO SOLO ELIMINARE LE PARAENTESI
              2 REGOLA : SE L'ISTRUZIONE È UNA SOLA ... ELIMNARE LE PARENTESI GRAFFE E IL RETURN È IMPLICITO


        </h3>

    
        
    </div>
  )
}

export default Esercizio2