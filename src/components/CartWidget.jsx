import React from 'react';
import { BiCart } from 'react-icons/bi';

function CartWidget() {
  return (
    <a className="nav-link" href="#">
      <BiCart className="cart-icon" />
    </a>
  );
}

export default CartWidget;