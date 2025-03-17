import React from 'react';
import prodotti from './Prodotti';

const Esercizio3 = () => {
  return (
    <div>
      <h1>Esercizio 3</h1>

      {
        prodotti.map((el, i) => { // 
          return (
            <div key={i}>

              <h5> Prodotto </h5>
              <h5>ID prodotto: {el.id} </h5> 
              <h5>Nome del prodotto: {el.nome} </h5>
              <h5>Descrizione: {el.descrizione} </h5>
              <h5>Prezzo: {el.prezzo} </h5>
              
            </div>
          );
        })
      }
    </div>
  );
};

export default Esercizio3;
