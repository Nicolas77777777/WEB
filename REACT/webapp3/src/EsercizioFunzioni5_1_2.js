import React, { useState } from 'react'

const EsercizioFunzioni5_1_2 = () => {
    const [nome1, setNome1] = useState("");
    const [nome2, setNome2] = useState("");
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);


    const [salutare, setSalutare] = useState("");
    const [somma, setSomma] = useState(0);

    const saluto = () => {
        setSalutare(`${nome1} ciao, piacere, io sono ${nome2}`);
    };

    const calcola = () => {
        const num1 = parseInt(numero1);
        const num2 = parseInt(numero2);
        setSomma(num1 + num2);
    };

    return (
        <div>
            <h1>EsercizioFunzioni 5.1</h1>
            Scrivi il tuo nome: <input type="text" value={nome1} onChange={(e) => setNome1(e.target.value)} /><br/>
            Scrivi il tuo nome: <input type="text" value={nome2} onChange={(e) => setNome2(e.target.value)} /><br/>
            Scrivi un numero1 <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} /><br/>
            Scrivi un numero2 <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} /><br/>



            <button onClick={saluto}>Saluta</button>
            <h5>{salutare}</h5>

            <button onClick={calcola}>Calcola</button>
            <h5>Somma: {somma}</h5>
        </div>
    );
}

export default EsercizioFunzioni5_1_2;
