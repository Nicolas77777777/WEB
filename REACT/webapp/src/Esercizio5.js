import React from 'react'


const Esercizio5 = (props) => {


    let numero = props.numeroTabellina4; // 5
    let stampaTabellina4=[]


   for (let i=1;i<=10;i++){
        let stampa =i + "*" + numero + "="+ i*numero;
        stampaTabellina4.push(stampa);

   }

   //let visualizza = (x) =>

  return (
    <div>
        <h1>Esercizio5</h1>

        {
        stampaTabellina4.map( (el) => {

          // qui sta iterando
          return <h2>{el}</h2>
         })

      }

    </div>
  )
}

export default Esercizio5