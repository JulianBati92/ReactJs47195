import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';

const CategoryItemList = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);

    const firebaseConfig = {
      apiKey: "AIzaSyBUd0NzHHzfTCOBUP-7rYMxn7MO9qsHGwA",
      authDomain: "proyectoreactjsmatteoli.firebaseapp.com",
      projectId: "proyectoreactjsmatteoli",
      storageBucket: "proyectoreactjsmatteoli.appspot.com",
      messagingSenderId: "796504982551",
      appId: "1:796504982551:web:468aaa9f504abe74c74852"
    };

    const database = getDatabase();

    const categoryProductsRef = ref(database, 'products');
    get(categoryProductsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productsData = Object.values(snapshot.val());
          const filteredProducts = productsData.filter(product => product.categoryId === parseInt(id));
          setCategoryProducts(filteredProducts);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error al obtener productos desde Firebase: ', error);
      });
  }, [id]);

  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>Categoría {id}</h1>

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
                  <p className="card-text">Precio: {product.price} U$S</p>
                  <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Detalles
                  </Link>
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


