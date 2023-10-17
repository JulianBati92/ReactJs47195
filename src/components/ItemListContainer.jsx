import { getDatabase, ref, get } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBUd0NzHHzfTCOBUP-7rYMxn7MO9qsHGwA",
      authDomain: "proyectoreactjsmatteoli.firebaseapp.com",
      projectId: "proyectoreactjsmatteoli",
      storageBucket: "proyectoreactjsmatteoli.appspot.com",
      messagingSenderId: "796504982551",
      appId: "1:796504982551:web:468aaa9f504abe74c74852"
    };

    const database = getDatabase();

    const productsRef = ref(database, 'products');
    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productsData = Object.values(snapshot.val());
          setProducts(productsData);
        }
      })
      .catch((error) => {
        console.error('Error al obtener productos: ', error);
      });
  }, []);

  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>Bienvenido a "Tu Matteoli"</h1>
      <p>{greeting}</p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: {product.price} U$S </p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;