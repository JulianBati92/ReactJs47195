import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <div className="social-icons">
              <a href="https://twitter.com/tu_perfil_de_twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.facebook.com/tu_perfil_de_facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/tu_perfil_de_instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="location-info text-center">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3190835977994!2d-58.35493972346718!3d-34.67189546110341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3333eefe606a5%3A0xf1f16c37f79b8f81!2sAvenida%20Bartolom%C3%A9%20Mitre%20%26%20Iguaz%C3%BA%2C%20Crucecita%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686434218397!5m2!1ses!2sar"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-4">
            <div className="useful-links text-center">
              <ul className="list-unstyled">
                <li>
                  <Link to="/contacto" className="text-light text-decoration-none">Contacto</Link>
                </li>
                <li>
                  <a href="/terminos" className="text-light text-decoration-none">Términos y condiciones</a>
                </li>
                <li>
                  <a href="/privacidad" className="text-light text-decoration-none">Política de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
