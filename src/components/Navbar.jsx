import React from 'react';
import { BiCart } from 'react-icons/bi';
import CartWidget from './CartWidget'; 

function Navbar() {
  const numeroDeItemsEnCarrito = 5;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Tu Matteoli</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Principal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Conócenos más
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tienda
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <BiCart className="cart-icon" /> {numeroDeItemsEnCarrito}
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
