import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    const totalPrice = calculateTotalPrice();
    alert(`Gracias por tu compra. Total a pagar: $${totalPrice}. Pronto nos comunicaremos contigo vía email.`);
  };

  const handleEmptyCart = () => {
    cartItems.forEach(item => {
      removeFromCart(item.id);
    });
    setCartItems([]);
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '200px', height: '250px' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                    <p className="card-text">Cantidad: {item.quantity}</p> {/* Muestra la cantidad de este producto */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Total a pagar: ${calculateTotalPrice()}</p>
          <Link to="/order-form">
            <button className="btn btn-primary">Realizar Pedido</button>
          </Link>
          <button className="btn btn-danger" onClick={handleEmptyCart}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

