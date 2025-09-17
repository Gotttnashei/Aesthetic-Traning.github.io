import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Planes from './Planes';
import Contacto from './Contacto';
import SobreMi from './Sobremi';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer.jsx'; 
import NotFound from '../views/NotFound.jsx';
import './main.css';

  function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home + catálogo general */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ItemListContainer />
            </>
          }
        />

        {/* Catálogo filtrado por categoría */}
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        {/* Detalle de producto */}
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} />

        {/* Otras secciones */}
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobremi" element={<SobreMi />} />

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
