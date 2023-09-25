import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryItemList = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then(res => res.json())
      .then(json => setItems(json));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Productos en categorias {id}</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: {item.price} USD</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItemList;

