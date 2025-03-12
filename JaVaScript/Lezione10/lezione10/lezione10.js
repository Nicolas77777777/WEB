
// fetch() funzione BROWSER chiamata http (WS) ... asincrona
// http : 
// Request ... OGGETTI 
// Response... OGGETTI
// http i dati NON HANNO UN FORMATO ... 
let utenti = fetch('https://jsonplaceholder.typicode.com/users'); // REQUEST ... fetch()

// console.log(utenti); // RESPONSE

// REALTA' non si scrive MAI il codice produttore 
utenti.then( (response) => {
    console.log(response); // json() ... estrapola io dati dalla response
    let utenti = response.json(); // promise
    utenti.then( (x) => {
        // dom 
        console.log(x);
    });
});
