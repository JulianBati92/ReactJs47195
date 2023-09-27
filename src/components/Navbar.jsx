import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const cartItemCount = 5; // Replace with your actual cart item count logic

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Tu Matteoli
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Use data-bs-toggle instead of data-toggle
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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


