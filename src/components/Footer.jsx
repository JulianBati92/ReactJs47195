import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const iconSize = 30; // Tamaño de los iconos en píxeles

  return (
    <footer className="bg-dark text-white p-4" style={{ bottom: '0', width: '100%', marginTop: '60px' }}>
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
              <a href="#" style={{ fontSize: iconSize }}>
                <FaFacebook />
              </a>
              {' '}
              <a href="#" style={{ fontSize: iconSize }}>
                <FaTwitter />
              </a>
              {' '}
              <a href="#" style={{ fontSize: iconSize }}>
                <FaInstagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

