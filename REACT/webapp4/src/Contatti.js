import React, { useState } from 'react';

const Contatti = () => {
  // Stati per i campi del modulo
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [errore, setErrore] = useState("");
  const [successo, setSuccesso] = useState(false);

  
  const invioDati = (e) => {
    e.preventDefault(); 

    if (!nome || !cognome || !email || !cellulare || !messaggio) {
      setErrore("Tutti i campi sono obbligatori!");
      setSuccesso(false);
      return;
    }

    setErrore(""); 
    setSuccesso(true);
  };

  return (
    
    <div className="container">
      <h1>Modulo Contatti</h1>
      
      <form onSubmit={invioDati}>
        <div>
          Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /><br/>
        </div>
        <div>
          Cognome: <input type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} /><br/>
        </div>
        <div>
          Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        </div>
        <div>
          Cellulare: <input type="tel" value={cellulare} onChange={(e) => setCellulare(e.target.value)} /><br/>
        </div>
        <div>
          Messaggio: <textarea value={messaggio} onChange={(e) => setMessaggio(e.target.value)} /><br/>
        </div>

        <button type="submit">Invia</button>
      </form>

      {/* Messaggio di errore */}
      {errore && <p style={{ color: 'red' }}>{errore}</p>}

      {/* Messaggio di conferma */}
      {successo && <p style={{ color: 'green' }}> Il tuo messaggio è stato inviato con successo!</p>}
    </div>
  );
};

export default Contatti;
