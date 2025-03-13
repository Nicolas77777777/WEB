import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Esercizio1 = () => {

    let [coloreCard, setColorCard] = useState('green');
   

    let cambiaColore = () => {

      setColorCard
    }


    





  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Esercizio 1 - Cards</h1>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className={`card-text ${coloreCard}`}>Questa è la descrizione della prima card.</p>
              <button className="classButton">Cambia Colore Testo</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card">
          
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className={`card-text ${coloreCard}`}>Questa è la descrizione della seconda card.</p>
              <button className="classButton">Cambia Colore Testo</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className={`card-text ${coloreCard}`}>Questa è la descrizione della terza card.</p>
              <button className="classButton">Cambia Colore Testo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esercizio1;
