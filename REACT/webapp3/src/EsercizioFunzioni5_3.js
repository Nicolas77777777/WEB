import React, { useState } from 'react'

const EsercizioFunzioni5_3 = () => {
   
    const [numeroTentativi,setNumeroTentativi] = useState(0)
    const [numeroVincente, setNumeroVincente] = useState(0);
    const [risultato,setRisultato]=useState();


    const controlla = () => {
        let numeroRandom = Math.floor(Math.random(0,101));
        console.log(numeroRandom);
        if (numeroRandom === setNumeroVincente(numeroVincente)) {
                setRisultato("Complimenti hai vinto");

        }else if (numeroRandom < setNumeroVincente(numeroVincente)){

                setRisultato("Prova con un numero piu basso")

        }else if (numeroRandom > setNumeroVincente(numeroVincente)){

                setRisultato("Prova con un numero piu alto")
                
        }
        
    
    };

    return (
        <div>
            <h1>EsercizioFunzioni 5.1</h1>
            Scrivi il tuo nome: <input type="text" value={nome2} onChange={(e) => setNome2(e.target.value)} /><br/>
            Scrivi un numero tra 1 e 100 <input type="number" value={numeroVincente} onChange={(e) => setNumeroVincente(e.target.value)} /><br/>
            
        

            <button onClick={controlla}>Controlla</button>
            <h5> {risultato}</h5>

            
        </div>
    );
}

export default EsercizioFunzioni5_3;
