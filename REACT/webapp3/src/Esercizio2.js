import React from 'react'
import Prodotto from './Prodotto'

const Esercizio2 = () => {
    // AREA 1 JS

    



  return (

    // JSX
    <div>

        <div className="container mt-4">
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">{Prodotto.nome}</h5>
                    <p className="card-text">{Prodotto.descrizione}</p>
                    <p className="card-text"><strong>Prezzo:</strong> ${Prodotto.prezzo.toFixed(2)}</p>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Esercizio2