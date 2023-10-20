import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../main';
import { collection, doc, getDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';
import Counter from './Counter'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    if (item && quantity > 0) {
      addToCart({ ...item, quantity }); 
      setCartItemQuantity(quantity);
    }
  };

  const handleRemoveFromCart = () => {
    if (item) {
      removeFromCart(item.id);
      setCartItemQuantity(0);
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
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '350px', height: '500px' }} 
          />
          <p>{item.description}</p>
          <p>Precio: ${item.price} </p>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}

      <div>
        <Counter
          onAdd={handleAddToCart}
          text="Agregar al carrito"
          q={1}
        />
        {cartItemQuantity > 0 && (
          <button onClick={handleRemoveFromCart} className="btn btn-secondary">
            Quitar del carrito
          </button>
        )}
        <Link to="/checkout" className="btn btn-success">
          Ir al checkout
        </Link>
      </div>
      <div style={{ height: '200px' }} />
    </div>
  );
};

export default ItemDetailContainer;

