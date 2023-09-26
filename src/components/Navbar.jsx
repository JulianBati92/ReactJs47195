import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import CartWidget from './CartWidget'; 

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const cartItemCount = 5; // Reemplaza esto con tu lógica real para obtener la cantidad de ítems en el carrito

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Tu Matteoli
        </a>
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
              <Link className="nav-link" to="/">
                Principal
              </Link>
            </li>
            {categories.map(category => (
              <li className="nav-item" key={category}>
                <Link className="nav-link" to={`/category/${category}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <BiCart className="cart-icon" /> {cartItemCount}
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
