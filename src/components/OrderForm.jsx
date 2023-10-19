import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const productsRef = db.collection('productos');

    cartItems.forEach((item) => {
      const productDoc = productsRef.doc(item.id);
      productDoc.get().then((doc) => {
        if (doc.exists) {
          const currentStock = doc.data().stock;
          if (currentStock >= item.quantity) {
            const newStock = currentStock - item.quantity;
            productDoc.update({ stock: newStock })
              .then(() => {
                console.log(`Stock actualizado para ${item.title}`);
              })
              .catch((error) => {
                console.error('Error al actualizar el stock:', error);
              });
          } else {
            console.error(`No hay suficiente stock para ${item.title}`);
          }
        } else {
          console.error(`El producto ${item.title} no existe en la base de datos`);
        }
      });
    });

    alert(`Pedido enviado:\nNombres: ${formData.firstName}\nApellidos: ${formData.lastName}\nEmail: ${formData.email}\nDirección: ${formData.address}\nMétodo de pago: ${formData.paymentMethod}`);
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
