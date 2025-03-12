import React, { useState } from 'react'

const Hooks2 = () => {
    // AREA 1
    let [anagrafiche, setAnagrafiche] = useState([
        {nome : 'Mario'},
        {nome : 'Anna'},
        {nome : 'Luca'},
        {nome : 'Andrea'},
        {nome : 'Lucia'},
        {nome : 'Davide'}
    ]);

    let eliminaelemento = (nome) => {
        let nuovinomi = anagrafiche.filter( x => x.nome !== nome);
        setAnagrafiche(nuovinomi);

    }


    // AREA 2
  return (
    <div>Hooks
        {
            anagrafiche.map( (el,i) => 
                <h3 
                    key={i}> {el.nome} 
                    <button onClick={ () => { eliminaelemento(el.nome) }}>Elimina</button>
                </h3>) 
        }
    </div>
  )
}

export default Hooks2