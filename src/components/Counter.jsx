import React, { useState } from 'react';

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {
  const [count, setCount] = useState(q);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
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
        onClick={() => onAdd(count)}
      >
        {text}
      </button>
    </div>
  );
};

export default Counter;

