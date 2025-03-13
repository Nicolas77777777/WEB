import React from 'react';

const EsercizioBis = () => {






  return (
    <div className="container mt-4"> {/* Creazione contenitore */}
      <h1>Esercizio 1 - Cards</h1>
      <div className="row"> {/* Creazione riga */}
        
        <div className="col-md-4"> {/* Creazione colonna */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className={`card-text ${colorCard1}`}>Questa è la descrizione della prima card.</p>

            </div>
            <button className="classButton"> Cambia Colore Testo</button>
          </div>
        </div>
      </div>

      {/*     card 2     */}
      
        <div className="col-md-4"> {/* Creazione colonna */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className={`card-text ${colorCard1}`}>Questa è la descrizione della Seconda card.</p>

            </div>
            <button className="classButton"> Cambia Colore Testo</button>
          </div>
        </div>
      </div>
    
  );
};

export default EsercizioBis;
