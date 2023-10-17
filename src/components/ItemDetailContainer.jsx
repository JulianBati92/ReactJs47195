import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../main';
import { collection, doc, getDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (item) {
      addToCart(item);
      setCartItemQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (item) {
      removeFromCart(item.id);
      setCartItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(collection(db, 'products'), id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setItem({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log('No se encontró el producto.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

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

      <div style={{ height: '200px' }} />
    </div>
  );
};

export default ItemDetailContainer;

