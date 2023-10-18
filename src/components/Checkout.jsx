import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  // Función para calcular el total a pagar
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    // Puedes usar el total calculado para mostrarlo en la alerta
    const totalPrice = calculateTotalPrice();
    alert(`Gracias por tu compra. Total a pagar: $${totalPrice}. Pronto nos comunicaremos contigo vía email.`);
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
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Total a pagar: ${calculateTotalPrice()}</p>
          <button className="btn btn-primary" onClick={handlePlaceOrder}>
            Realizar Pedido
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
