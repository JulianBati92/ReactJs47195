import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import CartWidget from './CartWidget';

const Navbar = () => {
  const numeroDeItemsEnCarrito = 5;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Tu Matteoli
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Principal
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/1">
              Categoría 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/2">
              Categoría 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/3">
              Categoría 3
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <CartWidget numeroDeItemsEnCarrito={numeroDeItemsEnCarrito} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


