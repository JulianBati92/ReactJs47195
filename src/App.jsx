import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoryItemList from "./components/CategoryItemList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea de mate argentino!" />
          </Route>
          <Route exact path="/category/:id">
            <CategoryItemList />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

