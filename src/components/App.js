import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Planes from './Planes';
import Contacto from './Contacto';
import SobreMi from './Sobremi';
import ItemListContainer from './ItemListContainer';
import './main.css'; // estilos globales

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ItemListContainer greeting/>
            </>
          }
        />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobremi" element={<SobreMi />} />
      </Routes>
    </Router>
  );
}

export default App;
