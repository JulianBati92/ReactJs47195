import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setItem(json);
      });
  }, [id]);

  return (
    <div className="container mt-4 text-center">
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} style={{ width: '200px' }} />
          <p>{item.description}</p>
          <p>Precio: {item.price} USD</p>
          <p>Categoria: {item.category}</p>
        </div>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );S
};

export default ItemDetailContainer;
