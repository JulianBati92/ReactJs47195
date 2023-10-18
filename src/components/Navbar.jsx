import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart3 } from 'react-icons/bs'; 

const Navbar = () => {
  const navbarLogo = 'Tu Matteoli';
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  useEffect(() => {
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalItemsInCart);
  }, [cartItems]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand">{navbarLogo}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: 'transparent' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Página principal
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={toggleCart}>
                <BsCart3 />
                <span className="ms-1">({cartItemCount})</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {cartOpen && (
        <div className="cart-popup bg-dark position-absolute top-100 end-0 p-3">
          <h4 className="text-white">Carrito de compras</h4>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                  <p className="text-white">{item.name}</p>
                  <p className="text-white">Precio: ${item.price}</p>
                  <button className="btn btn-danger">
                    Eliminar del carrito
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No hay productos en el carrito</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


