import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Ubicación</h4>
            <p>
              Dirección: Av. Don Craig 123<br />
              Ciudad: Avellaneda<br />
              Provincia: Buenos Aires<br />
              Código Postal: 1872
            </p>
          </div>
          <div className="col-md-6">
            <h4>Contacto</h4>
            <p>
              Teléfono: (123) 456-7890<br/>
              Correo Electrónico: info@tumatteoli.com<br/>
              Redes Sociales: 
              <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;