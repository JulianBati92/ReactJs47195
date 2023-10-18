import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryItemList from './components/CategoryItemList';
import Formulario from './components/Form';
import Checkout from './components/Checkout';

import { CartContextProvider } from './components/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea de mate argentino!" />}
          />
          <Route path="/category/:id" element={<CategoryItemList />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Formulario />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
};

export default App;
