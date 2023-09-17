import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-4 text-center">
      <h1>Bienvenido a "Tu Matteoli"</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
