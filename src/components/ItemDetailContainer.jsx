import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const detailsRef = useRef(null);

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

    const productRef = ref(database, `products/${id}`);
    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem(snapshot.val());
          if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto: ', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(item);
    setCartItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
    setCartItemQuantity((prevQuantity) => prevQuantity - 1);
  };

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
        <p>Cargando producto...</p>
      )}

      <div>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Agregar al carrito
        </button>
        {cartItemQuantity > 0 && (
          <button onClick={handleRemoveFromCart} className="btn btn-secondary">
            Quitar del carrito
          </button>
        )}
        {cartItemQuantity > 0 && (
          <p className="mt-2">Cantidad en el carrito: {cartItemQuantity}</p>
        )}
      </div>

      <div ref={detailsRef} />
      <div style={{ height: '200px' }} />
    </div>
  );
};

export default ItemDetailContainer;