import React from 'react'

export const Esercizio4 = (props) => {

  let numeroIteratore = props.numIte; // 5
  let stampa3=[]


  for (let i=0;i<=20;i +=2){
       let stampa =i 
       stampa3.push(stampa);

  }



  return (
    <div>
      <h1>Esercizio4</h1>    


      {
        stampa3.map( (el) => {

          // qui sta iterando
          return <h2>{el}</h2>
         })

      }

    </div>

    


  )
}
export default Esercizio4