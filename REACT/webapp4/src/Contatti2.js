import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contatti2 = () => {
  // Stato unico per i campi del modulo
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    cellulare: "",
    messaggio: "",
  });

  const [errori, setErrori] = useState({});
  const [successo, setSuccesso] = useState(false);

  // Funzione per aggiornare lo stato del modulo
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validazione del modulo
  const validateForm = () => {
    let errors = {};

    if (!formData.nome.trim()) errors.nome = "Il nome è obbligatorio!";
    if (!formData.cognome.trim()) errors.cognome = "Il cognome è obbligatorio!";
    if (!formData.email.includes("@")) errors.email = "Email non valida!";
    if (!/^\d+$/.test(formData.cellulare))
      errors.cellulare = "Il cellulare deve contenere solo numeri!";
    if (!formData.messaggio.trim()) errors.messaggio = "Inserisci un messaggio!";

    setErrori(errors);
    return Object.keys(errors).length === 0;
  };

  // Invio del modulo
  const invioDati = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccesso(true);
      setErrori({});
    } else {
      setSuccesso(false);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        backgroundImage: "url('/img/aquila2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
S
    >
      <div className="container bg-dark p-4 rounded" style={{ maxWidth: "500px" }}>
        <h2 className="text-center">Modulo Contatti</h2>

        <form onSubmit={invioDati}>
          {/* Nome */}
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              name="nome"
              className={`form-control ${errori.nome ? "is-invalid" : ""}`}
              value={formData.nome}
              onChange={handleChange}
            />
            {errori.nome && <div className="invalid-feedback">{errori.nome}</div>}
          </div>

          {/* Cognome */}
          <div className="mb-3">
            <label className="form-label">Cognome</label>
            <input
              type="text"
              name="cognome"
              className={`form-control ${errori.cognome ? "is-invalid" : ""}`}
              value={formData.cognome}
              onChange={handleChange}
            />
            {errori.cognome && <div className="invalid-feedback">{errori.cognome}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errori.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errori.email && <div className="invalid-feedback">{errori.email}</div>}
          </div>

          {/* Cellulare */}
          <div className="mb-3">
            <label className="form-label">Cellulare</label>
            <input
              type="tel"
              name="cellulare"
              className={`form-control ${errori.cellulare ? "is-invalid" : ""}`}
              value={formData.cellulare}
              onChange={handleChange}
            />
            {errori.cellulare && <div className="invalid-feedback">{errori.cellulare}</div>}
          </div>

          {/* Messaggio */}
          <div className="mb-3">
            <label className="form-label">Messaggio</label>
            <textarea
              name="messaggio"
              className={`form-control ${errori.messaggio ? "is-invalid" : ""}`}
              value={formData.messaggio}
              onChange={handleChange}
            />
            {errori.messaggio && <div className="invalid-feedback">{errori.messaggio}</div>}
          </div>

          {/* Pulsante di invio */}
          <button type="submit" className="btn btn-primary w-100">
            Invia
          </button>
        </form>

        {/* Messaggio di successo */}
        {successo && (
          <div className="alert alert-success mt-3">
            Il tuo messaggio è stato inviato con successo!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contatti2;
