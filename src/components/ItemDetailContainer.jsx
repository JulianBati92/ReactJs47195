import React, { useEffect, useState } from 'react';

function ItemDetailContainer({ match }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then(res => res.json())
      .then(json => {
        setItem(json);
      });
  }, [match.params.id]);

  return (
    <div className="container mt-4 text-center">
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Precio: {item.price} USDC</p>
        </div>
      ) : (
        <p>Cargando Items...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
