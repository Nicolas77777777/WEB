import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Esercizio1 = () => {
    // Inizializzazione del colore come nero
    const [coloreCard1, setColorCard1] = useState('text-dark');
    const [coloreCard2, setColorCard2] = useState('text-dark');
    const [coloreCard3, setColorCard3] = useState('text-dark');

    // Funzione che cambia il colore in rosso e non lo fa tornare indietro
    const cambiaColore = (setColor) => {
        setColor('text-danger'); // Imposta sempre il colore su rosso
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Esercizio 1 - Cards</h1>
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card 1</h5>
                            <p className={`card-text ${coloreCard1}`}>Questa è la descrizione della prima card.</p>
                            <button className="classButton" onClick={() => cambiaColore(setColorCard1)}>
                                Cambia Colore Testo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card 2</h5>
                            <p className={`card-text ${coloreCard2}`}>Questa è la descrizione della seconda card.</p>
                            <button className="classButton" onClick={() => cambiaColore(setColorCard2)}>
                                Cambia Colore Testo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card 3</h5>
                            <p className={`card-text ${coloreCard3}`}>Questa è la descrizione della terza card.</p>
                            <button className="btn btn-primary" onClick={() => cambiaColore(setColorCard3)}>
                                Cambia Colore Testo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Esercizio1;
