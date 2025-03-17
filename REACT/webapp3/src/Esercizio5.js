import React, { useState } from "react";

const Esercizio5 = () => {
  const [risultato, setRisultato] = useState(0);

  const Calcolatrice = () => {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const operazione = document.getElementById("operazione").value;

    let res = 0;
    switch (operazione) {
      case "addizione":
        res = n1 + n2;
        break;
      case "sottrazione":
        res = n1 - n2;
        break;
      case "moltiplicazione":
        res = n1 * n2;
        break;
      case "divisione":
        res = n2 !== 0 ? n1 / n2 : "Errore: divisione per zero";
        break;
      default:
        res = "Operazione non valida";
    }
    setRisultato(res);
  };

  return (
    <div>
      <h1>Esercizio 5</h1>
      
      <input type="number" id="num1" placeholder="Inserisci il primo numero" />
      <br />
      <input type="number" id="num2" placeholder="Inserisci il secondo numero" />
      <br />
      <select id="operazione">
        <option value="addizione">Somma</option>
        <option value="sottrazione">Sottrazione</option>
        <option value="moltiplicazione">Moltiplicazione</option>
        <option value="divisione">Divisione</option>
      </select>
      <br />
      <button onClick={Calcolatrice}>Calcola</button>
      <h5>Risultato: {risultato}</h5>
    </div>
  );
};

export default Esercizio5;
