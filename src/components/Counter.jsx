import React, { useState } from 'react';

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1, itemId }) => {
  const [count, setCount] = useState(q);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (itemId) {
      // Si se proporciona un ID de elemento, verifica si el elemento ya está en el carrito
      onAdd(itemId, count); // Pasa el ID y la cantidad al controlador de agregar al carrito
    } else {
      // Si no se proporciona un ID de elemento, simplemente agrega la cantidad seleccionada
      onAdd(count);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-outline-primary" onClick={decrement}>
        -
      </button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-outline-primary" onClick={increment}>
        +
      </button>
      <button
        className="btn btn-primary ms-3"
        onClick={handleAddToCart}
      >
        {text}
      </button>
    </div>
  );
};

export default Counter;

