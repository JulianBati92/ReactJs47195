import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryItemList = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryProducts(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>{id}</h1>

      {loading && (
        <div>
          <p>Cargando productos...</p>
          <img src="/loading-45.gif" alt="Cargando productos" style={{ width: '50px', height: '50px' }} />
        </div>
      )}

      {!loading && (
        <div className="row">
          {categoryProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Precio: {product.price} U$S</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItemList;

