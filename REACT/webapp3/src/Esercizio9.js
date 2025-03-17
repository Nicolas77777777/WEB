import React, { useState } from 'react'
import { utenze } from './autenticazione'

const Esercizio9 = () => {

    let [mieutenze, setmieutenze] = useState(utenze);
    let [esito,setesito] = useState("");
    let [visualizzaCambio, setvisualizzaCambio] = useState(false);
    let [strverifica, setstrverifica] = useState(false);
    let [utenteLoggato, setutenteLoggato] = useState();

    let verifica = () => {

        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        
        mieutenze.map( (el) => {
            if(el.username == user && el.password == pass){
                setstrverifica(true);
                setutenteLoggato(el);
            }
        })

        if(verifica){
            setesito("TUTTO OK");
        }else{
            setesito("LOGIN ERRATA");
        }
    }

    let cambio = () => {
        setvisualizzaCambio(true);  
    }

    let cambiopwd = () => {
        
        let pass = document.getElementById("nuovapass").value;

        let utenteModifica = {
            id :utenteLoggato.id,
            username : utenteLoggato.username,
            password : pass
        }

        let nuovalista = mieutenze.filter( x => x.id != utenteModifica.id);
        nuovalista.push(utenteModifica);
        console.log("utenteModifica");
        console.log(utenteModifica);
        console.log(nuovalista);

        // Aggiorna autenticazione.js
        let fileContent = `export let utenze = ${JSON.stringify(nuovalista, null, 4)};`;
        fetch('autenticazione.js', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/javascript' },
            body: fileContent
        }).then(() => console.log("autenticazione.js aggiornato!"));
    }

        
    

  return (
    <div>
        <h1>Esercizio9</h1>
            UserName <input type="text" id="user"/><br/>
            Password <input type="text" id="pass"/><br/>
            <button onClick={ () => { verifica() }}>INVIA</button>
            <button onClick={ () => { cambio() }}>CAMBIO PASSWORD</button>
            <div> {esito} </div>
            { strverifica && <div style={{ display : visualizzaCambio ? "block" : "none"}} >
                <input type="text" id="nuovapass"/>
                <button onClick={ () => { cambiopwd() }}>CONFERMA</button>
            </div> }
    </div>
  )
}

export default Esercizio9