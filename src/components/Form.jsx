import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
  };

  return (
    <div className="container formulario">
      {showNotification && (
        <div className="alert alert-success" role="alert">
          Su solicitud de contacto ha sido enviada.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowNotification(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <Link to="/" className="btn btn-primary">
            Volver a los productos
          </Link>
        </div>
      )}
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea className="form-control" id="mensaje" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;