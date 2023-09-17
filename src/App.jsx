import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const sections = [
  {
    title: "Tipo de Hierbas",
    description: "El mate argentino se prepara con hierbas como la yerba mate, el boldo y la menta. Cada hierba aporta un sabor y propiedades únicas."
  },
  {
    title: "Accesorios del Mate",
    description: "Los accesorios esenciales para disfrutar del mate incluyen la calabaza (mate), la bombilla y el termo. Descubre cómo elegir los mejores accesorios."
  },
  {
    title: "Cómo Preparar el Mate",
    description: "Aprende la técnica para preparar el mate perfecto: la temperatura del agua, la cantidad de yerba y el tiempo de infusión son fundamentales."
  },
  {
    title: "Cultura y Tradiciones",
    description: "Explora las tradiciones sociales en torno al mate argentino. Descubre cómo se llevan a cabo las reuniones de mates y las historias que rodean a esta bebida."
  },
  {
    title: "Tienda en Línea",
    description: "Visita nuestra tienda en línea para comprar yerba mate de calidad, calabazas decoradas y bombillas. ¡Disfruta del mate auténtico!"
  },
  {
    title: "Blog y Noticias",
    description: "Lee nuestros artículos sobre las últimas tendencias en el mundo del mate, eventos relacionados y noticias de interés para los amantes del mate."
  },
  {
    title: "Videos y Tutoriales",
    description: "Consulta nuestros videos y tutoriales que muestran cómo preparar el mate correctamente y ofrecen consejos sobre su disfrute."
  },
  {
    title: "Galería de Fotos",
    description: "Explora nuestra galería de imágenes que capturan la belleza y la tradición del mate argentino."
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea de mate argentino!" />
      <div className="container mt-4 text-center">
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-md-6" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">{section.title}</h2>
                  <p className="card-text">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
