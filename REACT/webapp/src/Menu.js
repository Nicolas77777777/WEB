import React from 'react';

const Menu= (props) =>{

    // AREA 1 :JS
    // props è un oggetto 
    // destruzzazione

    let {nome,cognome}= props ;






    //AREA 2 :JSX FUSIONE HTML/CSS/JS
    // regola 1 : tutto deve essere racchiuso in un unico tag
    // regola 2 : class JS ... HTML className
    // regola 3 : {} JS ... CSS {{ }} className


    return (

        <div> 
            <h1>Titolo Menu con NodeJs</h1>
            <h2>Home - Chi Siamo - Contatti </h2>

        </div>
    )


}

export default Menu