import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart3 } from 'react-icons/bs';
import tuMatteoliLogo from '../assets/tuMatteoliLogo.jpg';

const Navbar = () => {
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
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand">
            <img src={tuMatteoliLogo} alt="Tu Matteoli" style={{ width: '70px', height: '70px' }} />
          </Link>
          <div className="d-flex align-items-center me-4"> 
            <Link to="/category/mate" className="nav-link text-white me-4">Mate</Link>
            <Link to="/category/set" className="nav-link text-white me-4">Set</Link>
            <Link to="/category/bombilla" className="nav-link text-white">Bombilla</Link>
          </div>
        </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={toggleCart}>
                <BsCart3 />
                <span className="ms-1">({cartItemCount})</span>
              </button>
            </li>
          </ul>
      </div>
      {cartOpen && (
        <div className="cart-popup bg-dark position-absolute top-100 end-0 p-3">
          <h3 className="text-white">Carrito de compras</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
                  <p className="text-white">{item.title}</p>
                  <p className="text-white">Cantidad: {item.quantity}</p>
                  <p className="text-white">Precio unitario: ${item.price}</p>
                </li>
              ))}
              <p className="text-white">Total a pagar: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              <Link to="/checkout" className="btn btn-primary">Ir al checkout</Link>
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
