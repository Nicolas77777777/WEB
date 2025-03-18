import React from 'react'

const EsercizioFunzioni = () => {
    // Area1 



    let salutare =""
    let saluto = () => {

        let nome1 = document.getElementById("nome1").value;
        console.log(nome1+" ciao")

        let salutare = nome1 + "ciao "

        return salutare


    }





    
  return (

    <div>
        <h1>EsercizioFunzioni 5.1</h1>
        Scrivi il tuo nome<input type="text" id="nome1"/><br/>
        <button onClick={saluto}>Saluta'</button>
        <h5>{salutare}</h5>

        
    
    
    
    
    
    
    </div>
  )
}

export default EsercizioFunzioni