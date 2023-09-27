import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setItem(json);
        if (detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      });
  }, [id]);

  return (
    <div className="container mt-4 text-center">
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} className="img-fluid" />
          <p>{item.description}</p>
          <p>Precio: {item.price} USD</p>
        </div>
      ) : (
        <p>Cargando productos...</p>
      )}

      <div ref={detailsRef} />
      <div style={{ height: '200px' }} />
    </div>
  );
};

export default ItemDetailContainer;

