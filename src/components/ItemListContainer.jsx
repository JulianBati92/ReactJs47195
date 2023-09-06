import React from 'react';

function ItemListContainer() {

  const items = [
    { id: 1, name: 'Mate Imperial', price: 15000 },
    { id: 2, name: 'Mate Torpedo', price: 12000 },
    { id: 3, name: 'Mate Termico', price: 6000 },
    { id: 4, name: 'Mate Calabaza', price: 2500 },
    { id: 5, name: 'Bombilla Plata 925', price: 15000 },
    { id: 6, name: 'Set Mate Completo', price: 30000 },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Lista de Productos</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body text-center"> {/* Utiliza text-center aquí */}
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
