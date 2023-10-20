import React, { useState } from 'react';
import { db } from '../main'; 
import { collection, addDoc, query, getDocs, where, updateDoc } from 'firebase/firestore';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: 'efectivo',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ordersCollection = collection(db, 'orders');
    const productsCollection = collection(db, 'productos'); // Reemplaza 'productos' con el nombre real de tu colección de productos
    const cartItems = []; // Reemplaza esto con tu lógica para obtener los elementos del carrito

    try {
      // 1. Primero, agrega el pedido a la colección de pedidos
      const docRef = await addDoc(ordersCollection, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        paymentMethod: formData.paymentMethod,
      });

      // 2. Luego, recorre los productos en el carrito y actualiza el stock de cada producto
      for (const item of cartItems) {
        const productTitle = item.title; // Título del producto en el carrito

        // Busca el producto en la colección de productos por su título
        const query = query(productsCollection, where("title", "==", productTitle));
        const querySnapshot = await getDocs(query);

        if (!querySnapshot.empty) {
          // Debería haber solo un producto con el título dado
          const productDoc = querySnapshot.docs[0].ref;
          const currentStock = querySnapshot.docs[0].data().stock;

          // Calcula el nuevo stock restando la cantidad en el carrito
          const newStock = currentStock - item.quantity;

          // Actualiza el stock del producto en Firebase
          await updateDoc(productDoc, { stock: newStock });

          console.log(`Stock actualizado para ${productTitle}`);
        } else {
          console.error(`El producto ${productTitle} no existe en la base de datos`);
        }
      }

      alert('Gracias por tu compra, Nos comunicaremos pronto por email. ID del pedido: ' + docRef.id);
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      alert('Error al enviar el pedido. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="container">
      <h1>Formulario de Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombres</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Método de Pago</label>
          <select
            className="form-select"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de Crédito</option>
            <option value="tarjeta_debito">Tarjeta de Débito</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;
