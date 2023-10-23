import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../main';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coleccionProductos = id ?  query(collection(db, "products"), where('category', '==', id)) : collection(db, "products");
        const querySnapshot = await getDocs(coleccionProductos);
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error('Error al obtener los productos: ', error);
      }
    };

    fetchData();
  }, [id]); 
console.log(products)
  return (
    <div className="container mt-4 text-center" style={{ marginBottom: '200px' }}>
      <h1>Bienvenido a "Tu Matteoli"</h1>
      <p>{greeting} {id && <span>{id}</span>}</p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '500px', objectFit: '' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: ${product.price} </p>
                <Link to={'/item/${product.id}'} className="btn btn-primary">
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