import React from 'react';
import { BiCart } from 'react-icons/bi';

function CartWidget({ numeroDeItemsEnCarrito }) {
  return (
    <a className="nav-link" href="#">
      <BiCart className="cart-icon" />
      <span className="cart-count">{numeroDeItemsEnCarrito}</span>
    </a>
  );
}

export default CartWidget;