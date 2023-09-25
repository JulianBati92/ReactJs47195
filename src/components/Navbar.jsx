// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import CartWidget from './CartWidget';

function Navbar() {
  const [categories, setCategories] = useState([]);
  const numeroDeItemsEnCarrito = 5;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

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
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <Link className="nav-link" to={`/category/${category}`}>
                Categoría {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <CartWidget numeroDeItemsEnCarrito={numeroDeItemsEnCarrito} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

