import React, { useState } from 'react'

const Hooks3 = () => {

    // AREA 1
    let [persona,setPersona] = useState({
        nome : 'Mario',
        cognome : 'Rossi',
        eta : 30
    });

    let compleanno = () => {
        let anniattuali = persona.eta + 1;
        setPersona(
            {
                ...persona,
                eta : anniattuali
            })
    }


    // AREA 2
  return (
    <div>
        <h1>Hooks2</h1>
        <h2>{persona.nome} {persona.cognome} {persona.eta}</h2>
        <button onClick={ compleanno }>COMPLEANNO</button>
    </div>
  )
}

export default Hooks3