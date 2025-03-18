import React, { useState } from 'react'

const EsercizioFunzioni = () => {
    // Area1 



    const[salutare,setSalutare] =useState("");
    const[somma,setSomma] = useState(0);

    let saluto = () => {

        let nome1 = document.getElementById("nome1").value;
        let nome2 = document.getElementById("nome2").value;

        console.log(nome1+" ciao")

        setSalutare(nome1 + " ciao, piacere, io sono " + nome2)


    };

    let saluto2 = (a,b) => {

      console.log(setSomma( a+b));



  };

  saluto2(3,5);


  
  return (

    <div>
        <h1>EsercizioFunzioni 5.1</h1>
        Scrivi il tuo nome<input type="text" id="nome2"/><br/>
        Scrivi il tuo nome<input type="text" id="nome1"/><br/>

        <button onClick={saluto}>Saluta'</button>
        <h5>{salutare}</h5>

        
    
    
    
    
    
    
    </div>
  )
}

export default EsercizioFunzioni