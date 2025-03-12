import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Esercizio1 from './Esercizio1';
import Esercizio2 from './Esercizio2';
import Esercizio3 from './Esercizio3';
import Esercizio4 from './Esercizio4';
import Esercizio5 from './Esercizio5';
import Hooks1 from './Hooks1';
import Hooks2 from './Hooks2';
import Hooks3 from './Hooks3';
import Hooks4InDe from './Hooks4InDe';


//fase 2....Componenete ....funzione JS : 2 linguiaggi
const App =() => {

  // area 1 js
// js (JAVASCRIPT)

let persona = {
  nome:"Anna",
  cognome : "Verdi"
}

let lista = [{

  nome: "Luca",
  cognome : "Verdi"
},
{
  nome: "Marina",
  cognome : "Rossi"

}]




  return (
    // area 2 JSX
    //JSX (jAVAsCRIPT Extesion) libreria  :
//  "fusione" utilizzare html / css/ js

// POSSIBILI CONFLITTI TRA LINGIUAGGI COMANDA SEMPRE JS  / class = classname 
// parentisi {{}} : doppie graffe

// JSX serve solo per rappresentare i dati  a video non c'è elaborazione 
    <div className="App">

      
      <Menu {...persona}> </Menu>
      <Hooks1></Hooks1>
      <Hooks2></Hooks2>
      <Hooks3></Hooks3>
      <Hooks4InDe></Hooks4InDe>
      <Esercizio1 tabellina = "5"/>
      <Esercizio1 tabellina = "2"/> {/* componente ESE 1 */}

      <Esercizio2 ese2 = "0"/>
      <Esercizio2 ese2Titolo = "Variazioni"/>
      <Esercizio2 ese2Titolo = "ciao"/>

      <Esercizio2 ese2 = "5"/>

      <Esercizio3 numI ="5" numF = "15"/>

      <Esercizio4 numIte="2"/>

      <Esercizio5 numeroTabellina4 ="4"/>
  

    
    </div>
  );

  }


export default App;
