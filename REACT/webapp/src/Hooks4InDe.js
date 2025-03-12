import React,{use, useState} from 'react'

const Hooks4InDe = () => {

    // AREA 1
        let [contatore,setContatore] = useState(0);

        let incrementa = () =>{

            let contatoreIncrementato = ++contatore ;
            setContatore(contatoreIncrementato);


      
        }
    

        let decrementa= () =>{

          let contatoreDecrementa = --contatore ;
          setContatore(contatoreDecrementa);

      }






  return (
    <div>
        <h1>Hooks4InDe</h1>
        {contatore}
        <button onClick={ incrementa }>incrementa</button>
        <button onClick={ decrementa }>incrementa</button>
        
    </div>
  )
}

export default Hooks4InDe