import React from 'react';
import prodotti from './Prodotti';

const Esercizio3bis = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Prodotti</h1>

      <div className="card">
        <div className="card-body">
          {prodotti.map((el, i) => (
            <div key={i} className="mb-3 p-3 border-bottom">
              <h5 className="card-title">ID prodotto: {el.id}</h5>
              <h5 className="card-title">Nome del prodotto: {el.nome}</h5>
              <h5 className="card-title">Descrizione: {el.descrizione}</h5>
              <h5 className="card-title">Prezzo: €{el.prezzo.toFixed(2)}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Esercizio3bis;
